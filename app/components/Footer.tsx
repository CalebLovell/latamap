import { BackwardIcon, ChevronLeftIcon, ChevronRightIcon, ForwardIcon, PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import * as React from 'react';
import { getTrackBackground, Range } from 'react-range';
import { useKeyPressEvent } from 'react-use';

import { useMapStore } from '~/data/store';

const step = 1;
const min = 1789;
const max = new Date().getFullYear();
const background = 'rgb(31 41 55)';
const accent = 'rgb(156 163 175)';

export const Footer = () => {
	const { date, setDate } = useMapStore();
	const selectedYear = date.getFullYear();
	const setSelectedYear = React.useCallback((year: number) => setDate(new Date(year, date.getMonth(), date.getDate())), [date, setDate]);

	return (
		<div className='flex h-20 w-full flex-col px-2 md:px-12'>
			<div className='flex h-8 w-full items-center justify-between'>
				<TimelineBar selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
			</div>
			<div className='flex h-12 w-full flex-col items-center justify-center'>
				<PlaybackBar selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
			</div>
		</div>
	);
};

type Props = {
	selectedYear: number;
	setSelectedYear: (year: number) => void;
};

const TimelineBar = ({ selectedYear, setSelectedYear }: Props) => {
	const onChange = (vals: number[]) => {
		setSelectedYear(vals[0]);
	};

	const increment = () => {
		if (selectedYear === max) return;
		setSelectedYear(selectedYear + 1);
	};

	const decrement = () => {
		if (selectedYear === min) return;
		setSelectedYear(selectedYear - 1);
	};

	useKeyPressEvent('ArrowLeft', decrement);
	useKeyPressEvent('ArrowRight', increment);

	return (
		<>
			<button
				title='Previous Year'
				onClick={decrement}
				className='flex h-8 w-8 items-center justify-center rounded-md border-2 border-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 active:scale-95'
			>
				<ChevronLeftIcon className='mr-0.5 h-6 w-6 text-gray-800' />
			</button>
			<Range
				values={[selectedYear]}
				step={step}
				min={min}
				max={max}
				onChange={onChange}
				renderTrack={({ props, children }) => (
					// eslint-disable-next-line jsx-a11y/no-static-element-interactions
					<div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} className='flex h-full w-full px-6'>
						<div
							ref={props.ref}
							className='h-1.5 w-full self-center rounded-full bg-gray-400'
							style={{
								background: getTrackBackground({
									values: [selectedYear],
									colors: [background, accent],
									min,
									max,
								}),
							}}
						>
							{children}
						</div>
					</div>
				)}
				renderThumb={({ props, isDragged }) => (
					<div
						{...props}
						className='flex h-8 w-8 items-center justify-center rounded-md border-2 border-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2'
					>
						<div className='absolute -top-10 rounded-sm bg-gray-800 px-2 py-1 text-white'>{selectedYear}</div>
						<div className={clsx('h-1/2 w-1', `${isDragged ? 'bg-gray-800' : 'bg-gray-400'}`)} />
					</div>
				)}
			/>
			<button
				title='Next Year'
				onClick={increment}
				className='flex h-8 w-8 items-center justify-center rounded-md border-2 border-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 active:scale-95'
			>
				<ChevronRightIcon className='ml-0.5 h-6 w-6 text-gray-800' />
			</button>
		</>
	);
};

const PlaybackBar = ({ selectedYear, setSelectedYear }: Props) => {
	const { date, setDate } = useMapStore();

	const [isPlaying, setIsPlaying] = React.useState(false);
	const speeds = [
		{ value: 875, label: 0.25 },
		{ value: 750, label: 0.5 },
		{ value: 625, label: 0.75 },
		{ value: 500, label: 1 },
		{ value: 375, label: 1.25 },
		{ value: 250, label: 1.5 },
		{ value: 125, label: 1.75 },
		{ value: 67.5, label: 2 },
	];
	const baseSpeed = speeds[3];
	const [speed, setSpeed] = React.useState(baseSpeed);

	const increment = React.useCallback(() => {
		if (selectedYear === max) return;
		setSelectedYear(selectedYear + 1);
	}, [selectedYear, setSelectedYear]);

	React.useEffect(() => {
		if (!isPlaying) return;
		const interval = setInterval(() => {
			if (selectedYear === max) {
				clearInterval(interval);
				setDate(new Date(min, date.getMonth(), date.getDate()));
				return;
			}
			increment();
		}, speed.value);
		return () => clearInterval(interval);
	}, [date, increment, isPlaying, selectedYear, setDate, speed]);

	const increaseSpeed = () => {
		const index = speeds.findIndex(s => s.value === speed.value);
		if (index === speeds.length - 1) return;
		setSpeed(speeds[index + 1]);
	};

	const decreaseSpeed = () => {
		const index = speeds.findIndex(s => s.value === speed.value);
		if (index === 0) return;
		setSpeed(speeds[index - 1]);
	};

	return (
		<>
			<div className='relative flex items-center space-x-4'>
				<p className='absolute -left-14 text-sm font-bold'>Speed</p>
				<button
					title='Decrease Timeline Speed'
					type='button'
					className='flex rounded-full from-red-200 via-orange-200 to-blue-200 p-1.5 text-gray-900 duration-150 ease-in-out hover:bg-red-200 active:scale-95'
					onClick={decreaseSpeed}
				>
					<BackwardIcon className='h-8 w-8' />
				</button>
				<button
					title={isPlaying ? 'Pause Timeline' : 'Autoplay Timeline'}
					type='button'
					className='rounded-full from-red-200 via-orange-200 to-blue-200 p-1.5 text-gray-900 duration-150 ease-in-out hover:bg-red-200 active:scale-95'
					onClick={() => setIsPlaying(!isPlaying)}
				>
					{isPlaying ? <PauseCircleIcon className='h-8 w-8' /> : <PlayCircleIcon className='h-8 w-8' />}
				</button>
				<button
					title='Increase Timeline Speed'
					type='button'
					className='rounded-full from-red-200 via-orange-200 to-blue-200 p-1.5 text-gray-900 duration-150 ease-in-out hover:bg-red-200 active:scale-95'
					onClick={increaseSpeed}
				>
					<ForwardIcon className='h-8 w-8' />
				</button>
				<p className='absolute -right-14 text-sm font-bold'>{speed.label}x</p>
			</div>
		</>
	);
};
