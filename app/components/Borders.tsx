import * as topojson from 'topojson-client';

import { path } from '~/data/map';
import { useMapStore } from '~/data/store';
import { geoJSON } from '~/data/worldGeojson';

export const Borders = () => {
	return (
		<>
			<SelectedBorders />
			<UnselectedBorders />
		</>
	);
};

const SelectedBorders = () => {
	const { selectedCountry } = useMapStore();

	const countries = geoJSON.objects.countries;

	const outerBorders = topojson.mesh(
		geoJSON,
		// @ts-ignore
		countries,
		// @ts-ignore
		(a, b) => a === b && a.properties.ADMIN === selectedCountry && b.properties.ADMIN === selectedCountry
	);
	const innerBorders = topojson.mesh(
		geoJSON,
		// @ts-ignore
		countries,
		// @ts-ignore
		(a, b) => a !== b && (a.properties.ADMIN === selectedCountry || b.properties.ADMIN === selectedCountry)
	);
	const mapBorders = { type: `MultiLineString`, coordinates: outerBorders.coordinates.concat(innerBorders.coordinates) };

	// @ts-ignore
	const d = path(mapBorders) ? String(path(mapBorders)) : undefined;

	const stroke = `black`;
	const strokeWidth = 1.2;

	return <path d={d} strokeWidth={strokeWidth} stroke={stroke} fill='none' className='transition duration-300 ease-in-out' strokeLinejoin='round' />;
};

const UnselectedBorders = () => {
	const { selectedCountry } = useMapStore();

	const outerBorders = topojson.mesh(
		geoJSON,
		// @ts-ignore
		geoJSON.objects.countries,
		// @ts-ignore
		(a, b) => a === b && a.properties.ADMIN !== selectedCountry && b.properties.ADMIN !== selectedCountry
	);
	const innerBorders = topojson.mesh(
		geoJSON,
		// @ts-ignore
		geoJSON.objects.countries,
		// @ts-ignore
		(a, b) => a !== b && a.properties.ADMIN !== selectedCountry && b.properties.ADMIN !== selectedCountry
	);
	const mapBorders = { type: `MultiLineString`, coordinates: outerBorders.coordinates.concat(innerBorders.coordinates) };

	// @ts-ignore
	const d = path(mapBorders) ? String(path(mapBorders)) : undefined;

	const stroke = `white`;
	const strokeWidth = 0.5;

	return <path d={d} strokeWidth={strokeWidth} stroke={stroke} fill='none' className='transition duration-300 ease-in-out' strokeLinejoin='round' />;
};
