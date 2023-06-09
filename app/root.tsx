import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import globals from '~/styles/globals.css';

export const links: LinksFunction = () => {
	return [
		{ rel: `stylesheet`, href: globals },
		{ rel: `icon`, href: `/favicon.ico`, type: `image/x-icon` },
	];
};

export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				<div id='tooltip' style={{ position: `absolute`, opacity: 0, zIndex: 10000000 }} />
				<Outlet />
				<ScrollRestoration />
				<script defer data-domain='latamap.com' src='https://plausible.io/js/script.tagged-events.js' />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
