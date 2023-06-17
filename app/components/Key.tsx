import Draggable from 'react-draggable';

import { useAppStore, useMapStore } from '~/data/store';
import { getLeaningColors, leaningLabels } from '~/data/types';

export const Key = () => {
	const { mapColorType } = useMapStore();
	const { keyIsVisible } = useAppStore();

	const colors = getLeaningColors(mapColorType);
	const labels = Object.values(leaningLabels);

	if (!keyIsVisible) return null;
	return (
		<Draggable bounds='parent' defaultClassNameDragged='cursor-grab' defaultClassNameDragging='cursor-grabbing'>
			<div className='absolute bottom-4 left-0.5 rounded-lg p-2 md:bottom-16'>
				{labels.map((label, index) => (
					<div key={label} className='mt-1 flex items-center'>
						{/* @ts-ignore */}
						<div className='mr-2 h-6 w-1.5 transition duration-500 ease-in-out sm:h-10' style={{ backgroundColor: colors[index + 1] }} />
						<p className='text-xs font-semibold text-black sm:text-sm'>{label}</p>
					</div>
				))}
			</div>
		</Draggable>
	);
};
