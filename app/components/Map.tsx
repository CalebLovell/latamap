import * as d3 from 'd3';
import * as React from 'react';
import { ClientOnly } from 'remix-utils';

import { Borders } from '~/components/Borders';
import { Country } from '~/components/Country';
import { LoadingSpinner } from '~/components/LoadingSpinner';
import { adjustCentroids, laTopoJson, mapHeight, mapWidth } from '~/data/map';
import { useMapStore } from '~/data/store';
import { getLeadersByDate } from '~/data/types';

export const Map = () => {
	const { leaders } = useMapStore();
	const { date } = useMapStore();
	const leadersByDate = getLeadersByDate(leaders, date);
	const svgRef = React.useRef(null);
	const gRef = React.useRef(null);

	const svg = d3.select(svgRef.current);
	const g = d3.select(gRef.current);

	function reset() {
		svg.transition()
			.duration(750)
			// @ts-ignore
			.call(zoom.transform, d3.zoomIdentity, d3.zoomTransform(svg.node()).invert([mapWidth / 2, mapHeight / 2]));
	}

	const zoom = d3.zoom().scaleExtent([1, 8]).on(`zoom`, zoomed);

	function zoomed(event: any) {
		const { transform } = event;
		g.attr(`transform`, transform);
	}

	return (
		<ClientOnly fallback={<LoadingSpinner />}>
			{() => (
				<svg
					ref={svgRef}
					width='100%'
					height='100%'
					viewBox='-4 10 360 480'
					onClick={reset}
					// @ts-ignore
					onDoubleClick={() => svg.call(zoom)}
				>
					<g ref={gRef}>
						{laTopoJson.features.map(feature => {
							const name = feature.properties?.ADMIN;
							const leader = leadersByDate?.find(x => x.Country.name === name);
							const centroid = adjustCentroids(feature);
							return <Country key={name} feature={feature} centroid={centroid} leader={leader} />;
						})}
						<Borders />
					</g>
				</svg>
			)}
		</ClientOnly>
	);
};
