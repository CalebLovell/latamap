import { Dialog, Transition } from '@headlessui/react';
import { BookOpenIcon, CalendarIcon, ExclamationTriangleIcon, FlagIcon, KeyIcon, SwatchIcon, TableCellsIcon, XMarkIcon } from '@heroicons/react/24/solid';
import * as React from 'react';

import { useAppStore, useMapStore } from '~/data/store';

export const Sidebar = () => {
	const {
		sidebarIsOpen,
		setSidebarIsOpen,
		bannerIsOpen,
		setBannerIsOpen,
		keyIsVisible,
		setKeyIsVisible,
		panelIsVisible,
		setPanelIsVisible,
		setDateModalIsOpen,
		setDisclaimerModalIsOpen,
	} = useAppStore();
	const { mapColorType, setMapColorType } = useMapStore();

	const sections = [
		{
			title: `Map Controls`,
			options: [
				{
					title: `Select a Date`,
					onClick: () => {
						setDateModalIsOpen(true);
						setSidebarIsOpen(false);
					},
					icon: <CalendarIcon className='h-6 w-6 text-blue-900' />,
				},
				{
					title: `Invert Color Scheme`,
					onClick: () => setMapColorType(mapColorType === `usa` ? `global` : `usa`),
					icon: <SwatchIcon className='h-6 w-6 text-blue-900' />,
				},
				{
					title: `Toggle Map Key`,
					onClick: () => setKeyIsVisible(!keyIsVisible),
					icon: <KeyIcon className='h-6 w-6 text-blue-900' />,
				},
				{
					title: `Toggle Data Panel`,
					onClick: () => setPanelIsVisible(!panelIsVisible),
					icon: <TableCellsIcon className='h-6 w-6 text-blue-900' />,
				},
				{
					title: `Reopen Banner Message`,
					onClick: () => setBannerIsOpen(!bannerIsOpen),
					icon: <FlagIcon className='h-6 w-6 text-blue-900' />,
				},
			],
		},
	];

	return (
		<Transition.Root show={sidebarIsOpen} as={React.Fragment}>
			<Dialog as='div' static className='z-40 fixed inset-0 overflow-hidden' open={sidebarIsOpen} onClose={setSidebarIsOpen}>
				<Transition.Child
					as={React.Fragment}
					enter='transition-opacity ease-linear duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition-opacity ease-linear duration-300'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-gray-600 bg-opacity-50' />
				</Transition.Child>
				<div className='fixed inset-0 flex'>
					<Transition.Child
						as={React.Fragment}
						enter='transition ease-in-out duration-300 transform'
						enterFrom='-translate-x-full'
						enterTo='translate-x-0'
						leave='transition ease-in-out duration-300 transform'
						leaveFrom='translate-x-0'
						leaveTo='-translate-x-full'
					>
						<Dialog.Panel>
							<div className='relative flex h-full w-80 flex-shrink-0 flex-col items-center bg-white'>
								<div className='flex h-12 w-full items-center justify-end p-2'>
									<button
										title='Open Menu'
										type='button'
										className='flex transform rounded-md from-red-200 via-orange-200 to-blue-200 px-2 py-1.5 font-bold text-gray-900 duration-150 ease-in-out hover:bg-gray-300 active:scale-95'
										onClick={() => setSidebarIsOpen(false)}
									>
										<span className='sr-only'>Close sidebar</span>
										<p className='mr-2 font-semibold'>Close</p>
										<XMarkIcon className='h-6 w-6 text-red-600' aria-hidden='true' />
									</button>
								</div>
								<div className='h-0.5 w-full bg-gradient-to-r from-blue-400 via-orange-400 to-red-400' />
								<div className='flex h-full w-full overflow-auto flex-col justify-between bg-radial-at-br from-red-50 via-orange-50 to-blue-50 p-2'>
									<div>
										<div className='mb-2 text-xs font-semibold leading-6 text-gray-900'>Map Information</div>
										<div className='flex flex-col space-y-2 text-sm text-gray-900'>
											<p>
												This website is a visualization of the political history of Latin America. Use the timeline or calendar to select
												a date, and click on any country to see its data.
											</p>
											<p>
												You can also click and drag the map to pan around, and use the scroll wheel (or your fingers) to zoom in and out.
											</p>
											<p>The info panel and key are also both draggable and toggleable.</p>
										</div>
										{sections.map(({ title, options }) => (
											<React.Fragment key={title}>
												<div className='my-2 text-xs font-semibold leading-6 text-gray-900'>{title}</div>
												<div className='space-y-2'>
													{options.map(x => (
														<button
															key={x.title}
															onClick={x.onClick}
															className='flex w-full items-center justify-between rounded-md border border-gray-400 bg-gray-200 p-2 text-center text-sm font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-300 active:scale-95'
														>
															{x.title}
															{x.icon}
														</button>
													))}
													<button
														key='Methodology Disclaimer'
														onClick={() => {
															setDisclaimerModalIsOpen(true);
															setSidebarIsOpen(false);
														}}
														className='plausible-event-name=Disclaimer flex w-full items-center justify-between rounded-md border border-gray-400 bg-gray-200 p-2 text-center text-sm font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-300 active:scale-95'
													>
														Methodology Disclaimer
														<ExclamationTriangleIcon className='h-6 w-6 text-blue-900' />
													</button>
													<a
														className='flex w-full items-center justify-between rounded-md border border-gray-400 bg-gray-200 p-2 text-center text-sm font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-300 active:scale-95'
														href='https://www.caleblovell.com/blog/building-latamap-website'
														target='_blank'
														rel='noreferrer'
													>
														Read Full Blog Article
														<BookOpenIcon className='h-6 w-6 text-blue-900' />
													</a>
												</div>
											</React.Fragment>
										))}
									</div>
									<div className='flex items-center justify-center space-x-2 pt-2'>
										{socials.map(x => (
											<a
												key={x.title}
												href={x.href}
												className='rounded p-2 text-blue-900 transition duration-150 ease-in-out hover:rotate-12 hover:bg-gray-200'
												target='_blank'
												rel='noreferrer'
											>
												<span className='sr-only'>{x.title}</span>
												{x.svg}
											</a>
										))}
									</div>
								</div>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};

const socials = [
	{
		title: `Twitter`,
		href: `https://twitter.com/CalebLovell`,
		svg: (
			<svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
				<path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
			</svg>
		),
	},
	{
		title: `GitHub`,
		href: `https://github.com/CalebLovell`,
		svg: (
			<svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24' aria-hidden='true'>
				<path
					fillRule='evenodd'
					d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
					clipRule='evenodd'
				/>
			</svg>
		),
	},
	{
		title: `LinkedIn`,
		href: `https://www.linkedin.com/in/caleblovell/`,
		svg: (
			<svg
				className='h-6 w-6'
				fill='currentColor'
				aria-hidden='true'
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
			>
				<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
			</svg>
		),
	},
];
