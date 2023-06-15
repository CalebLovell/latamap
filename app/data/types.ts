import type { Country, Leader } from '@prisma/client';

export type CountryReturn = Country;

export type LeaderReturn = Leader & {
	Country: Country;
};

export type LeaderNoId = {
	countryId: Leader[`countryId`];
	name: Leader[`name`];
	party: Leader[`party`];
	leaning: Leader[`leaning`];
	tookOffice: string;
	leftOffice: string | null;
};

export const leanings = {
	FAR_LEFT: 1,
	LEFT: 2,
	CENTER_LEFT: 3,
	CENTRIST: 4,
	CENTER_RIGHT: 5,
	RIGHT: 6,
	FAR_RIGHT: 7,
	MILITARY: 8,
	MONARCHY: 9,
};

export const leaningLabels = {
	1: `Far Left`,
	2: `Left Wing`,
	3: `Center Left`,
	4: `Center / Independent`,
	5: `Center Right`,
	6: `Right Wing`,
	7: `Far Right`,
	8: `Military Non-Aligned`,
	9: `Monarchy`,
};

export type MapKeyColorScheme = `global` | `usa`;

export const getLeaningColors = (mapColorType: MapKeyColorScheme) => {
	const globalColors = {
		1: `rgb(157,0,0)`,
		2: `rgb(215,17,27)`,
		3: `rgb(223,139,139)`,
		4: `rgb(203,200,146)`,
		5: `rgb(147,184,200)`,
		6: `rgb(28,133,196)`,
		7: `rgb(0,96,147)`,
		8: `rgb(61,129,22)`,
		9: `gold`,
	};
	const usaColors = {
		7: `rgb(157,0,0)`,
		6: `rgb(215,17,27)`,
		5: `rgb(223,139,139)`,
		4: `rgb(203,200,146)`,
		3: `rgb(147,184,200)`,
		2: `rgb(28,133,196)`,
		1: `rgb(0,96,147)`,
		8: `rgb(61,129,22)`,
		9: `gold`,
	};
	return mapColorType === `global` ? globalColors : usaColors;
};

export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(` `);
}

export const getLeadersByDate = (leaders: LeaderReturn[], date: Date) => {
	const leadersByDate = leaders?.filter(x => {
		const tookOffice = new Date(x.tookOffice);
		const leftOffice = x.leftOffice ? new Date(x.leftOffice) : new Date();
		const dateIsBetween = date >= tookOffice && date < leftOffice;
		return dateIsBetween;
	});
	return leadersByDate;
};
