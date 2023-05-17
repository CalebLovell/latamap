import { Transition } from '@headlessui/react';
import { format } from 'date-fns';
import { Fragment } from 'react';

import { useAppStore, useMapStore } from '~/data/store';
import { classNames } from '~/data/types';

export const Slideover = () => {
	const { slideoverIsOpen } = useAppStore();

	return (
		<Transition.Root show={slideoverIsOpen}>
			<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
				<Transition.Child
					as={Fragment}
					enter='transform transition ease-in-out duration-500'
					enterFrom='translate-x-full'
					enterTo='translate-x-0'
					leave='transform transition ease-in-out duration-500'
					leaveFrom='translate-x-0'
					leaveTo='translate-x-full'
				>
					<div className='pointer-events-auto h-0 w-screen max-w-xl pl-2'>
						<div className='mt-12 h-0.5 w-full' />
						<div className='flex h-slideover w-full flex-col bg-white min-[1920px]:bg-transparent'>
							<SlideoverContent />
						</div>
					</div>
				</Transition.Child>
			</div>
		</Transition.Root>
	);
};

const SlideoverContent = () => {
	const { setDate, setSelectedCountry } = useMapStore();

	const formatDate = (d: Date | undefined) => (d ? format(new Date(d), `MMMM do, yyy`) : undefined);

	return (
		<section className='overflow-auto pt-4'>
			<ol className='relative pl-4 pr-1 pt-1'>
				<div
					className='absolute left-3 top-1 inline-block border border-gray-900'
					style={{
						borderWidth: '0 3px 3px 0',
						padding: '3px',
						transform: 'rotate(-135deg)',
					}}
				/>
				{importantDates.map((x, i) => (
					<li key={x.title} className={classNames(i !== importantDates.length - 1 ? '' : 'pb-2', 'relative border-l border-gray-900 pl-4')}>
						<button
							className='rounded-md p-2 text-left hover:bg-gray-300'
							onClick={() => {
								setDate(x.date);
								setSelectedCountry(x.country);
							}}
							type='button'
						>
							{i !== importantDates.length - 1 && (
								<div className='absolute -bottom-[1.55rem] -left-[.27rem] h-2 w-2 rounded-full bg-gray-900 pt-2' />
							)}
							<time className='pb-1 text-xs font-semibold leading-none text-gray-500'>{formatDate(x.date)}</time>
							<h3 className='text-lg font-semibold text-gray-900'>{x.title}</h3>
							<p className='text-base font-normal text-gray-900'>{x.description}</p>
						</button>
					</li>
				))}
			</ol>
		</section>
	);
};

const importantDates = [
	{
		title: 'Today',
		date: new Date(),
		country: 'Paraguay',
		description:
			'Latin America is dominated by the left-wing, including even Colombia for the first time in its history. However, the recent landslide election of Santiago Peña of Paraguay, and a telling vote against a new constitution in Chile may signal a change in the political winds yet again.',
	},
	{
		title: 'Second Pink Tide',
		date: new Date(2018, 0, 1),
		country: 'Mexico',
		description:
			'AMLO is elected president of Mexico. The second pink tide begins, which will return nearly all of Latin America to left-wing rule over the next few years.',
	},
	{
		title: 'Swing to the Right',
		date: new Date(2010, 2, 12),
		country: 'Chile',
		description:
			'Piñera is elected president of Chile. He is the first of a wave of right-wing leaders to be elected in Latin America, ending the first pink tide. Macri, Bolsonaro, Trump and other right-wing leaders will balance out the previous decade of left-wing leaders.',
	},
	{
		title: 'First Pink Tide',
		date: new Date(1999, 1, 2),
		country: 'Venezuela',
		description:
			'Hugo Chávez is elected president of Venezuela. He is the first of a wave of left-wing leaders to be elected in Latin America. The next decade will see every country in South America elect a "pink" goverment; except for Colombia.',
	},
	{
		title: 'Democratic Wave',
		date: new Date(1979),
		country: 'Ecuador',
		description:
			'Aguilera is elected president of Ecuador, marking a return to democracy in Latin America. Over the next fifteen years, twenty countries in Latin America will return to democracy after decades of military rule.',
	},
	{
		title: 'Operation Condor',
		date: new Date(1973, 10, 11),
		country: 'Chile',
		description:
			'Pinochet seizes power in Chile. The most famous of the US-backed coups in Latin America, Operation Condor is a US-backed campaign to overthrow left-wing governments in Latin America during the height of the Cold War.',
	},
	{
		title: 'Colombian Declaration of Independence',
		date: new Date(1810, 6, 20),
		country: 'Colombia',
		description:
			'Colombia declares independence from Spain. Though the fight for independence will last another decade, Colombia begins the process of freeing itself from Spanish rule.',
	},
	{
		title: 'The Haitian Revolution',
		date: new Date(1791, 0, 1),
		country: 'Haiti',
		description:
			'Toussaint Louverture leads a successful slave revolt in Haiti, leading to the creation of the first black republic in the world, and thus the beginning of post-colonial history in Latin America.',
	},
	{
		title: 'The American Revolution',
		date: new Date(1789, 3, 30),
		country: 'United States of America',
		description:
			'After a hard fought war for independence from Great Britain, George Washington is elected the first President of the United States. The American Revolution will inspire independence movements throughout Latin America.',
	},
];
