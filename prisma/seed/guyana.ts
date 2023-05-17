import type { LeaderNoId } from '../../app/data/types';
import { leanings } from '../../app/data/types';

export const source = `https://en.wikipedia.org/wiki/List_of_heads_of_state_of_Guyana`;

const countryId = 13;

export const guyana: LeaderNoId[] = [
	{
		countryId,
		name: `Elizabeth II`,
		party: `British Monarchy`,
		leaning: leanings.MONARCHY,
		tookOffice: `26 May 1966`,
		leftOffice: `17 March 1970`,
	},
	{
		countryId,
		name: `Elizabeth II`,
		party: `British Monarchy`,
		leaning: leanings.MONARCHY,
		tookOffice: `26 May 1966`,
		leftOffice: `17 March 1970`,
	},
	{
		countryId,
		name: `Arthur Chung`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: `17 March 1970`,
		leftOffice: `6 October 1980`,
	},
	{
		countryId,
		name: `Forbes Burnham`,
		party: `People's National Congress Reform`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `6 October 1980`,
		leftOffice: `6 August 1985`,
	},
	{
		countryId,
		name: `Desmond Hoyte`,
		party: `People's National Congress Reform`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `6 August 1985`,
		leftOffice: `9 October 1992`,
	},
	{
		countryId,
		name: `Cheddi Jagan`,
		party: `People's Progressive Party`,
		leaning: leanings.LEFT,
		tookOffice: `9 October 1992`,
		leftOffice: `6 March 1997`,
	},
	{
		countryId,
		name: `Sam Hinds`,
		party: `People's Progressive Party`,
		leaning: leanings.LEFT,
		tookOffice: `6 March 1997`,
		leftOffice: `19 December 1997`,
	},
	{
		countryId,
		name: `Janet Jagan`,
		party: `People's Progressive Party`,
		leaning: leanings.LEFT,
		tookOffice: `19 December 1997`,
		leftOffice: `11 August 1999`,
	},
	{
		countryId,
		name: `Bharrat Jagdeo`,
		party: `People's Progressive Party`,
		leaning: leanings.LEFT,
		tookOffice: `11 August 1999`,
		leftOffice: `3 December 2011`,
	},
	{
		countryId,
		name: `Donald Ramotar`,
		party: `People's Progressive Party`,
		leaning: leanings.LEFT,
		tookOffice: `3 December 2011`,
		leftOffice: `16 May 2015`,
	},
	{
		countryId,
		name: `David Granger`,
		party: `People's National Congress Reform`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `16 May 2015`,
		leftOffice: `2 August 2020`,
	},
	{
		countryId,
		name: `Irfaan Ali`,
		party: `People's Progressive Party`,
		leaning: leanings.LEFT,
		tookOffice: `2 August 2020`,
		leftOffice: null,
	},
];
