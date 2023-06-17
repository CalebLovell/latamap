import { AcademicCapIcon, ClockIcon, LightBulbIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import Draggable from 'react-draggable';

import { useAppStore, useMapStore } from '~/data/store';
import { getLeadersByDate, leaningLabels } from '~/data/types';

const formatDate = (date: Date | undefined) => (date ? format(new Date(date), `MMM d, yyy`) : undefined);

export const DataPanel = () => {
	const { panelIsVisible } = useAppStore();
	const { leaders, date, selectedCountry, setSelectedCountry } = useMapStore();
	const leadersByDate = getLeadersByDate(leaders, date);
	const leader = leadersByDate?.find(x => x.Country.name === selectedCountry);

	const country = selectedCountry ? selectedCountry : `Select a Country`;
	const name = leader?.name ? leader?.name : `-`;
	const party = leader?.party ? leader?.party : `-`;
	// @ts-ignore
	const leaning = leader?.leaning ? leaningLabels[leader?.leaning] : `-`;
	const inOffice = `${leader?.tookOffice ? formatDate(leader?.tookOffice) : ``} - ${
		leader?.leftOffice ? formatDate(leader?.leftOffice) : leader?.leftOffice === null ? `Current` : ``
	}`;

	const clearData = () => {
		setSelectedCountry(undefined);
	};

	if (!panelIsVisible) return null;
	return (
		<Draggable bounds='parent' defaultClassNameDragged='cursor-grab' defaultClassNameDragging='cursor-grabbing' cancel='button'>
			<div className='absolute right-2 top-2 w-40 rounded-lg border border-gray-300 bg-white md:right-8 md:top-8 md:w-60'>
				<dl className='flex flex-col'>
					<div className='relative flex-auto p-1 md:p-2'>
						<dt className='truncate text-center text-xs font-semibold leading-6 text-gray-900 md:whitespace-normal md:text-base'>{country}</dt>
					</div>

					{leader?.name ? (
						<>
							<div className='space-y-0 border-y border-gray-300 p-1 md:space-y-1 md:p-2'>
								<div className='flex w-full flex-none items-center gap-x-1'>
									<dt className='flex-none'>
										<span className='sr-only'>Leader</span>
										<UserCircleIcon className='h-5 w-4 text-gray-600' aria-hidden='true' />
									</dt>
									<dd className='text-xs font-medium leading-6 text-gray-900 md:text-sm'>{name}</dd>
								</div>
								<div className='flex w-full flex-none items-center gap-x-1'>
									<dt className='flex-none'>
										<span className='sr-only'>Time in Office</span>
										<ClockIcon className='h-5 w-4 text-gray-600' aria-hidden='true' />
									</dt>
									<dd className='text-xs italic leading-6 text-gray-500 md:text-sm'>
										<time dateTime='2023-01-31'>{inOffice}</time>
									</dd>
								</div>
								<div className='flex w-full flex-none items-center gap-x-1'>
									<dt className='flex-none'>
										<span className='sr-only'>Political Party</span>
										<AcademicCapIcon className='h-5 w-4 text-gray-600' aria-hidden='true' />
									</dt>
									<dd className='text-xs leading-6 text-gray-800 md:text-sm'>{party}</dd>
								</div>
								<div className='flex w-full flex-none items-center gap-x-1'>
									<dt className='flex-none'>
										<span className='sr-only'>Political Leaning</span>
										<LightBulbIcon className='h-5 w-4 text-gray-600' aria-hidden='true' />
									</dt>
									<dd className='text-xs leading-6 text-gray-800 md:text-sm'>{leaning}</dd>
								</div>
							</div>

							<div className='relative flex-auto p-1 md:p-2'>
								<button
									onClick={clearData}
									className='w-full rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 active:scale-95'
								>
									Clear
								</button>
							</div>
						</>
					) : null}
				</dl>
			</div>
		</Draggable>
	);
};
