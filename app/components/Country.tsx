import { path } from '~/data/map';
import { useMapStore } from '~/data/store';
import type { LeaderReturn } from '~/data/types';
import { getLeaningColors } from '~/data/types';

type Props = {
	feature: any;
	centroid: [number, number];
	leader: LeaderReturn | undefined;
};

export const Country = ({ feature, centroid, leader }: Props) => {
	const { mapColorType, setSelectedCountry } = useMapStore();

	const name = feature.properties.ADMIN;
	const ISO_A3 = feature.properties?.ISO_A3;
	// @ts-ignore
	const fill = leader ? getLeaningColors(mapColorType)[leader.leaning] : `url(#diagonal)`;
	const d = path(feature) ? String(path(feature)) : undefined;

	const onClick = () => {
		setSelectedCountry(name);
	};

	return (
		<>
			<path
				id={name}
				d={d}
				fill={fill}
				onClick={onClick}
				className='cursor-pointer transition duration-500 ease-in-out hover:opacity-80 active:opacity-50'
				style={{ WebkitTapHighlightColor: `transparent` }}
			/>
			<defs>
				<pattern id='diagonal' width='5' height='5' patternUnits='userSpaceOnUse' patternTransform='rotate(45)'>
					<line x1='0' y1='0' x2='0' y2='5' stroke='black' strokeWidth='0.5' />
				</pattern>
			</defs>
			<text
				x={centroid[0]}
				y={centroid[1]}
				className='pointer-events-none select-none font-semibold'
				style={{
					fontWeight: `bold`,
					fontSize: `6px`,
					textAnchor: `middle`,
					alignmentBaseline: `middle`,
				}}
			>
				{ISO_A3}
			</text>
		</>
	);
};
