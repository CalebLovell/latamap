import { XMarkIcon } from '@heroicons/react/20/solid';

import { useAppStore } from '~/data/store';

export const Banner = () => {
	const { bannerIsOpen, setBannerIsOpen } = useAppStore();

	return (
		<div className='absolute w-full max-w-3xl px-2'>
			<div className='relative w-full'>
				<div
					className='absolute z-10 mt-14 flex w-full items-center gap-x-6 rounded-md bg-blue-200 px-4 py-2.5 sm:px-3.5 sm:before:flex-1'
					style={{ display: bannerIsOpen ? `flex` : `none` }}
				>
					<p className='text-sm leading-6'>
						Welcome Twitter! I will be updating the data to fix mistakes throughout the day. Thanks for your patience! In the meantime, please
						consider reading the disclaimer in the side menu. I am aware that left-right labels are reductive, and MUCH less meaningful before
						the 20th century. That is a limitation of the project. Don&apos;t take it too seriously!
					</p>
					<div className='flex flex-1 justify-end'>
						<button type='button' onClick={() => setBannerIsOpen(false)} className='-m-3 p-3 focus-visible:outline-offset-[-4px]'>
							<span className='sr-only'>Dismiss</span>
							<XMarkIcon className='h-5 w-5' aria-hidden='true' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
