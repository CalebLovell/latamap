import type { V2_MetaFunction } from '@remix-run/node';
import type { HeadersFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import * as React from 'react';

import { Banner } from '~/components/Banner';
import { DataPanel } from '~/components/DataPanel';
import { DateModal } from '~/components/DateModal';
import { DisclaimerModal } from '~/components/DisclaimerModal';
import { EventList } from '~/components/EventList';
import { Header } from '~/components/Header';
import { Key } from '~/components/Key';
import { Map } from '~/components/Map';
import { Sidebar } from '~/components/Sidebar';
import { Timeline } from '~/components/Timeline';
import { prisma } from '~/data/prisma.server';
import { useMapStore } from '~/data/store';

export const meta: V2_MetaFunction = () => {
	return [
		{ title: `Latin American Political History Map` },
		{ name: `description`, content: `A visual timeline of the political history of Latin America` },
		{ property: `og:title`, content: `Latin American Political History Map` },
		{ property: `og:description`, content: `A visual timeline of the political history of Latin America` },
		{ property: `og:url`, content: `https://latamap.com/images/screenshot.png` },
		{ property: `og:site_name`, content: `Latin American Political History Map` },
		{ property: `og:type`, content: `website` },
		{ property: `og:image`, content: `https://latamap.com/images/screenshot.png` },
		{ property: `og:image:width`, content: `1200` },
		{ property: `og:image:height`, content: `630` },
		{ property: `og:image:type`, content: `image/png` },
		{ name: `twitter:card`, content: `summary_large_image` },
		{ name: `twitter:site`, content: `@CalebLovell` },
		{ name: `twitter:title`, content: `Latin American Political History Map` },
		{ name: `twitter:image`, content: `https://latamap.com/images/screenshot.png` },
		{ name: `twitter:description`, content: `A visual timeline of the political history of Latin America` },
		{ name: `twitter:image:alt`, content: `A screenshot of the map set to January 1st, 2023` },
	];
};

// Random number to bust cache on new deploys
const randomSeconds = Math.floor(Math.random() * 1000);
// Six hours + randomSeconds
const maxAge = 60 * 60 + randomSeconds;

export const headers: HeadersFunction = () => ({
	'Cache-Control': `public, max-age=${maxAge}`,
});

export const loader = async () => {
	const response = new Response();
	const leaders = await prisma.leader.findMany({ include: { Country: true } });

	return json({ leaders }, { headers: response.headers });
};

export default function Index() {
	const { leaders } = useLoaderData<typeof loader>();
	const { setLeaders } = useMapStore();

	// leaders dates became strings instead of dates, so we need to convert them back to dates
	const newLeaders = leaders.map(x => {
		return {
			...x,
			tookOffice: new Date(x.tookOffice),
			leftOffice: x.leftOffice ? new Date(x.leftOffice) : null,
		};
	});

	React.useEffect(() => {
		setLeaders(newLeaders);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className='flex h-screen flex-col items-center bg-radial-at-br from-red-100 via-orange-100 to-blue-100'>
				<Header />
				<Banner />
				<main className='flex h-full w-full max-w-3xl flex-1 flex-col items-center justify-center'>
					<div className='relative h-content w-full'>
						<Map />
						<DataPanel />
						<Key />
					</div>
					<Timeline />
				</main>
				<EventList />
				<Sidebar />
			</div>
			<DateModal />
			<DisclaimerModal />
		</>
	);
}
