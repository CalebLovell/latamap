import type { LeaderNoId } from '../../app/data/types';
import { leanings } from '../../app/data/types';

export const source = `https://en.wikipedia.org/wiki/List_of_prime_ministers_of_Belize`;

const countryId = 4;

export const belize: LeaderNoId[] = [
	{
		countryId,
		name: `George Cadle Price`,
		party: `People's United Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `12 September 1981`,
		leftOffice: `17 December 1984`,
	},
	{
		countryId,
		name: `Manuel Esquivel`,
		party: `United Democratic Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `17 December 1984`,
		leftOffice: `7 September 1989`,
	},
	{
		countryId,
		name: `George Cadle Price`,
		party: `People's United Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `7 September 1989`,
		leftOffice: `13 July 1993`,
	},
	{
		countryId,
		name: `Manuel Esquivel`,
		party: `United Democratic Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `13 July 1993`,
		leftOffice: `28 August 1998`,
	},
	{
		countryId,
		name: `Said Musa`,
		party: `People's United Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `28 August 1998`,
		leftOffice: `8 February 2008`,
	},
	{
		countryId,
		name: `Dean Barrow`,
		party: `United Democratic Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `8 February 2008`,
		leftOffice: `12 November 2020`,
	},
	{
		countryId,
		name: `Johnny Briceño`,
		party: `People's United Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `12 November 2020`,
		leftOffice: null,
	},
];
