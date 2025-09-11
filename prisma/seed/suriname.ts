import type { LeaderNoId } from '../../app/data/types';
import { leanings } from '../../app/data/types';

export const source = `https://en.wikipedia.org/wiki/President_of_Suriname`;

const countryId = 14;

export const suriname: LeaderNoId[] = [
	{
		countryId,
		name: `Kingdom of the Netherlands`,
		tookOffice: `15 December 1954`,
		leftOffice: `25 November 1975`,
		party: `Kingdom of the Netherlands`,
		leaning: leanings.MONARCHY,
	},
	{
		countryId,
		name: `Johan Ferrier`,
		tookOffice: `25 November 1975`,
		leftOffice: `13 August 1980`,
		party: `National Party of Suriname`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Henk Chin A Sen`,
		tookOffice: `15 August 1980`,
		leftOffice: `4 February 1982`,
		party: `Nationalist Republican Party`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Fred Ramdat Misier`,
		tookOffice: `8 February 1982`,
		leftOffice: `25 January 1988`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
	},
	{
		countryId,
		name: `Ramsewak Shankar`,
		tookOffice: `25 January 1988`,
		leftOffice: `24 December 1990`,
		party: `Progressive Reform Party`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Johan Kraag`,
		tookOffice: `29 December 1990`,
		leftOffice: `16 September 1991`,
		party: `National Party of Suriname`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Ronald Venetiaan`,
		tookOffice: `16 September 1991`,
		leftOffice: `15 September 1996`,
		party: `National Party of Suriname`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Jules Wijdenbosch`,
		tookOffice: `15 September 1996`,
		leftOffice: `12 August 2000`,
		party: `National Democratic Party`,
		leaning: leanings.LEFT,
	},
	{
		countryId,
		name: `Ronald Venetiaan`,
		tookOffice: `12 August 2000`,
		leftOffice: `12 August 2010`,
		party: `National Party of Suriname`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Dési Bouterse`,
		tookOffice: `12 August 2010`,
		leftOffice: `16 July 2020`,
		party: `National Democratic Party`,
		leaning: leanings.LEFT,
	},
	{
		countryId,
		name: `Chan Santokhi`,
		tookOffice: `16 July 2020`,
		leftOffice: `16 July 2025`,
		party: `Progressive Reform Party`,
		leaning: leanings.CENTER_LEFT,
	},
	{
		countryId,
		name: `Jennifer Geerlings-Simons`,
		tookOffice: `16 July 2025`,
		leftOffice: null,
		party: `National Democratic Party`,
		leaning: leanings.LEFT,
	}
];
