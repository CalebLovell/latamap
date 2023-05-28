import * as d3 from 'd3';
import type { FeatureCollection } from 'geojson';
import * as topojson from 'topojson-client';

import { geoJSON } from '~/data/worldGeojson';

export const laTopoJson = topojson.feature(geoJSON, geoJSON.objects.countries) as FeatureCollection;

export const mapHeight = 500;
export const mapWidth = 350;
const projection = d3
	.geoAzimuthalEqualArea()
	.rotate([80, 10])
	.fitSize([mapWidth, mapHeight], { type: `FeatureCollection`, features: laTopoJson.features });

export const path = d3.geoPath().projection(projection);

export const adjustCentroids = (feature: any) => {
	const name = feature.properties?.ADMIN;
	const centroid = path.centroid(feature);
	switch (name) {
		case `Peru`:
			const peru: [number, number] = [centroid[0] - 6, centroid[1]];
			return peru;
		case `Chile`:
			const chile: [number, number] = [centroid[0] - 10, centroid[1] - 10];
			return chile;
		case `Guyana`:
			const guyana: [number, number] = [centroid[0] - 2, centroid[1] - 5];
			return guyana;
		case `Panama`:
			const panama: [number, number] = [centroid[0] + 3, centroid[1] - 7];
			return panama;
		case `Costa Rica`:
			const costaRica: [number, number] = [centroid[0] - 4, centroid[1] + 6];
			return costaRica;
		case `Nicaragua`:
			const nicaragua: [number, number] = [centroid[0], centroid[1] + 1];
			return nicaragua;
		case `Cuba`:
			const cuba: [number, number] = [centroid[0] + 4, centroid[1] - 7];
			return cuba;
		case `Guatemala`:
			const guatemala: [number, number] = [centroid[0] - 1, centroid[1] + 2];
			return guatemala;
		case `Belize`:
			const belize: [number, number] = [centroid[0] + 8, centroid[1] - 1];
			return belize;
		case `El Salvador`:
			const elSalvador: [number, number] = [centroid[0] - 1, centroid[1] + 6];
			return elSalvador;
		case `Jamaica`:
			const jamica: [number, number] = [centroid[0] - 1, centroid[1] + 6];
			return jamica;
		case `Trinidad and Tobago`:
			const trinidad: [number, number] = [centroid[0], centroid[1] - 5];
			return trinidad;
		case `Puerto Rico`:
			const puertoRico: [number, number] = [centroid[0], centroid[1] - 4];
			return puertoRico;
		case `Dominican Republic`:
			const dominicanRepublic: [number, number] = [centroid[0] + 3, centroid[1] - 7];
			return dominicanRepublic;
		case `Haiti`:
			const haiti: [number, number] = [centroid[0] - 2, centroid[1] + 8];
			return haiti;
		default:
			return centroid;
	}
};
