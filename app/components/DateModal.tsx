import { Dialog, Transition } from '@headlessui/react';
import { format } from 'date-fns';
import * as React from 'react';

import { SelectMenu } from '~/components/SelectMenu';
import { useAppStore, useMapStore } from '~/data/store';

export const DateModal = () => {
	const { dateModalIsOpen, setDateModalIsOpen } = useAppStore();
	const { date, setDate } = useMapStore();

	const year = years.find(y => y.id === date.getFullYear())!;
	const setYear = React.useCallback(
		(y: { id: number; name: number }) => {
			console.log(y);
			setDate(new Date(y.id, date.getMonth(), date.getDate()));
		},
		[date, setDate]
	);

	const month = months.find(m => m.id === date.getMonth() + 1)!;
	const setMonth = React.useCallback(
		(m: { id: number; name: string }) => {
			setDate(new Date(date.getFullYear(), m.id - 1, date.getDate()));
		},
		[date, setDate]
	);

	const day = days.find(d => d.id === date.getDate())!;
	const setDay = React.useCallback(
		(d: { id: number; name: number }) => {
			setDate(new Date(date.getFullYear(), date.getMonth(), d.id));
		},
		[date, setDate]
	);

	const formatDate = (d: Date | undefined) => (d ? format(new Date(d), `MMMM do, yyy`) : undefined);

	return (
		<Transition appear show={dateModalIsOpen} as={React.Fragment}>
			<Dialog
				static
				open={dateModalIsOpen}
				onClose={() => setDateModalIsOpen(false)}
				className='fixed left-0 top-0 z-40 h-full w-full overflow-y-auto overflow-x-hidden text-gray-800'
			>
				<Transition.Child
					as={React.Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black/75' aria-hidden='true' />
				</Transition.Child>

				<Transition.Child
					as={React.Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					<div className='relative mx-auto flex h-full w-full max-w-xl items-center px-2 py-14'>
						<div className='relative flex max-h-full w-full flex-col overflow-hidden rounded border-none bg-gray-100'>
							<div className='flex flex-shrink-0 items-center justify-center rounded-t border-b border-gray-300 p-4'>
								<Dialog.Title className='text-center text-2xl font-bold'>{formatDate(date)}</Dialog.Title>
							</div>
							<Dialog.Panel className='relative flex-auto space-y-4 overflow-y-auto p-4'>
								<Dialog.Description className=''>
									<SelectMenu values={years} title='Select a Year' selected={year} setSelected={setYear} />
								</Dialog.Description>
								<Dialog.Description className=''>
									<SelectMenu values={months} title='Select a Month' selected={month} setSelected={setMonth} />
								</Dialog.Description>
								<Dialog.Description className=''>
									<SelectMenu values={days} title='Select a Day' selected={day} setSelected={setDay} />
								</Dialog.Description>
							</Dialog.Panel>
							<div className='flex flex-shrink-0 flex-wrap items-center justify-between rounded-b border-t border-gray-300 p-4'>
								<div className='flex items-center justify-center space-x-2'>
									<p className='text-sm font-semibold text-gray-900'>Pick any date between 1789 and today!</p>
								</div>
								<button
									type='button'
									className='rounded bg-gray-800 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:scale-105 hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg'
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	);
};

// Years from 1789 to now
const years = Array.from({ length: new Date().getFullYear() - 1789 + 1 }, (_, i) => ({
	id: i + 1789,
	name: i + 1789,
}));

const months = [
	{ id: 1, name: `January` },
	{ id: 2, name: `February` },
	{ id: 3, name: `March` },
	{ id: 4, name: `April` },
	{ id: 5, name: `May` },
	{ id: 6, name: `June` },
	{ id: 7, name: `July` },
	{ id: 8, name: `August` },
	{ id: 9, name: `September` },
	{ id: 10, name: `October` },
	{ id: 11, name: `November` },
	{ id: 12, name: `December` },
];

const days = [
	{ id: 1, name: `1st` },
	{ id: 2, name: `2nd` },
	{ id: 3, name: `3rd` },
	{ id: 4, name: `4th` },
	{ id: 5, name: `5th` },
	{ id: 6, name: `6th` },
	{ id: 7, name: `7th` },
	{ id: 8, name: `8th` },
	{ id: 9, name: `9th` },
	{ id: 10, name: `10th` },
	{ id: 11, name: `11th` },
	{ id: 12, name: `12th` },
	{ id: 13, name: `13th` },
	{ id: 14, name: `14th` },
	{ id: 15, name: `15th` },
	{ id: 16, name: `16th` },
	{ id: 17, name: `17th` },
	{ id: 18, name: `18th` },
	{ id: 19, name: `19th` },
	{ id: 20, name: `20th` },
	{ id: 21, name: `21st` },
	{ id: 22, name: `22nd` },
	{ id: 23, name: `23rd` },
	{ id: 24, name: `24th` },
	{ id: 25, name: `25th` },
	{ id: 26, name: `26th` },
	{ id: 27, name: `27th` },
	{ id: 28, name: `28th` },
	{ id: 29, name: `29th` },
	{ id: 30, name: `30th` },
	{ id: 31, name: `31st` },
];
