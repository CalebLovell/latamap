import { Transition } from '@headlessui/react';
import { format } from 'date-fns';
import { Fragment } from 'react';

import { events } from '~/data/events';
import { useAppStore, useMapStore } from '~/data/store';
import { classNames } from '~/data/types';

export const EventList = () => {
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
	const { date, setDate, setSelectedCountry } = useMapStore();

	const formatDate = (d: Date | undefined) => (d ? format(new Date(d), `MMMM do, yyy`) : undefined);

	return (
		<section className='overflow-auto pb-4'>
			<ol className='relative pb-1 pl-4 pr-1'>
				<div
					className='absolute bottom-1 left-3 inline-block border border-gray-900'
					style={{
						borderWidth: `0 3px 3px 0`,
						padding: `3px`,
						transform: `rotate(45deg)`,
					}}
				/>
				{events.map((x, i) => {
					const currentDate = formatDate(x.date) === formatDate(date);
					return (
						<li key={x.title} className={classNames(i === 0 ? `pt-0 lg:pt-2` : ``, ` relative border-l border-gray-900 pl-4`)}>
							<button
								className={classNames(
									currentDate ? `border-2 border-blue-900` : `border-2 border-transparent`,
									`my-1 rounded-md px-2 py-0.5 text-left hover:bg-blue-200`
								)}
								onClick={() => {
									setDate(x.date);
									setSelectedCountry(x.country);
								}}
								type='button'
							>
								{i !== events.length - 1 && (
									<div className='absolute -bottom-[1.6rem] -left-[.27rem] h-2 w-2 rounded-full bg-gray-900 pt-2' />
								)}
								<time className='pb-1 text-xs font-semibold leading-none text-gray-500'>{formatDate(x.date)}</time>
								<h3 className='text-lg font-semibold text-gray-900'>{x.title}</h3>
								<p className='text-base font-normal text-gray-900'>{x.description}</p>
							</button>
						</li>
					);
				})}
			</ol>
		</section>
	);
};
