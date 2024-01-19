import { ArrowLeftCircleIcon, ArrowRightCircleIcon, Bars3BottomLeftIcon, CalendarIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';

import { useAppStore, useMapStore } from '~/data/store';

export const Header = () => {
	const { setSidebarIsOpen, setDateModalIsOpen, slideoverIsOpen, setSlideoverIsOpen } = useAppStore();
	const { date } = useMapStore();

	const formatDate = (d: Date | undefined) => (d ? format(new Date(d), `MMMM do, yyy`) : undefined);

	return (
		<>
			<header className='flex h-12 w-full items-center justify-center bg-gray-50 p-2'>
				<div className='flex w-full max-w-3xl items-center justify-between'>
					<button
						title='Open Menu'
						type='button'
						className='flex transform rounded-md p-2 font-bold text-gray-900 duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
						onClick={() => setSidebarIsOpen(true)}
					>
						<Bars3BottomLeftIcon className='h-6 w-6 text-blue-900' />
						<p className='ml-2 hidden font-semibold md:block'>Menu</p>
					</button>
					<div className='flex items-center'>
						<button
							title='Pick New Date'
							type='button'
							className='rounded-md p-2 text-blue-900 duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
							onClick={() => setDateModalIsOpen(true)}
						>
							<CalendarIcon className='h-6 w-6' />
						</button>
						<h1 className='text-center text-base font-bold text-gray-900 sm:text-xl'>{formatDate(date)}</h1>
					</div>
					<div className='flex'>
						<button
							title='Open Slideover'
							type='button'
							className='plausible-event-name=Events flex rounded-md p-2 text-gray-900 transition duration-150 ease-in-out hover:bg-gray-200 active:scale-95'
							onClick={() => setSlideoverIsOpen(!slideoverIsOpen)}
						>
							<p className='mr-2 hidden font-semibold md:block'>Timeline</p>
							{slideoverIsOpen ? (
								<ArrowRightCircleIcon className='h-6 w-6 text-blue-900' />
							) : (
								<ArrowLeftCircleIcon className='h-6 w-6 text-blue-900' />
							)}
						</button>
					</div>
				</div>
			</header>
			<div className='h-0.5 w-full bg-gradient-to-r from-blue-400 via-orange-400 to-red-400' />
		</>
	);
};
