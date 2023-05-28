import { Dialog, Transition } from '@headlessui/react';
import { EnvelopeIcon, ExclamationTriangleIcon, LightBulbIcon } from '@heroicons/react/24/solid';
import * as React from 'react';

import { useAppStore } from '~/data/store';

export const DisclaimerModal = () => {
	const { disclaimerModalIsOpen, setDisclaimerModalIsOpen } = useAppStore();

	return (
		<Transition appear show={disclaimerModalIsOpen} as={React.Fragment}>
			<Dialog
				static
				open={disclaimerModalIsOpen}
				onClose={() => setDisclaimerModalIsOpen(false)}
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
					<div className='relative mx-auto flex h-full w-full max-w-3xl items-center px-2 py-14'>
						<div className='relative flex max-h-full w-full flex-col overflow-hidden rounded border-none bg-gray-100'>
							<div className='flex flex-shrink-0 items-center justify-between rounded-t border-b border-gray-300 p-4'>
								<Dialog.Title className='text-2xl font-bold'>Map Explanation</Dialog.Title>
							</div>
							<Dialog.Panel className='relative flex-auto overflow-y-auto p-4'>
								<div className='mb-2 flex items-center'>
									<ExclamationTriangleIcon className='mr-2 h-5 w-5 text-red-700' />
									<Dialog.Title as='h3' className='text-xl font-semibold'>
										Disclaimer
									</Dialog.Title>
								</div>
								<Dialog.Description className='mb-2'>
									This is meant to be a fun, quick way to visualize the political history of Latin America. Reducing every president and
									political party to a single left-right axis is inherently oversimplistic and highly subjective.
								</Dialog.Description>
								<Dialog.Description className='mb-2'>
									All the data comes from Wikipedia, relying mostly on its &#34;Ideology&#34; and &#34;Political Position&#34; metrics. When
									those were not available, I tried my best to approximate the closest position based on their policies, stated ideology, and
									political affiliations.
								</Dialog.Description>
								<div className='mb-2 flex items-center'>
									<LightBulbIcon className='mr-2 h-5 w-5 text-orange-400' />
									<Dialog.Title as='h3' className='text-xl font-semibold'>
										Methodology
									</Dialog.Title>
								</div>
								<Dialog.Description className='mb-2'>
									To be clear, this gets harder and more absurd the farther back in time you go. The oldest political parties have often
									switched ideologies and priorities significantly throughout their history, and whatever the left-right spectrum roughly
									represents today is only vaguely applicable to the political stances of the 1800s.
								</Dialog.Description>
								<Dialog.Description className='mb-2'>
									In short, please do not take this map as any sort of authoritative reference, because the whole concept itself is
									inherently flawed! I made it to be a quick reference and fun visualization, nothing more.
								</Dialog.Description>
								<div className='mb-2 flex items-center'>
									<EnvelopeIcon className='mr-2 h-5 w-5 text-blue-600' />
									<Dialog.Title as='h3' className='text-xl font-semibold'>
										Contact Me
									</Dialog.Title>
								</div>
								<Dialog.Description className='mb-2'>
									If you notice any errors in the data or any other bugs, or just have a comment, I would love to hear from you! You can
									contact me{` `}
									<a
										className='font-medium text-red-600 hover:underline'
										href='https://www.caleblovell.com/contact'
										target='_blank'
										rel='noreferrer'
									>
										here
									</a>
									, or on my social media listed below.
								</Dialog.Description>
							</Dialog.Panel>
							<div className='flex flex-shrink-0 flex-wrap items-center justify-end rounded-b border-t border-gray-300 p-4'>
								<button
									type='button'
									className='rounded bg-gray-800 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out hover:scale-105 hover:bg-gray-900 hover:shadow-lg active:bg-gray-800 active:shadow-lg'
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
