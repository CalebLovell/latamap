import type { LeaderNoId } from '../../app/data/types';
import { leanings } from '../../app/data/types';

export const source = `https://en.wikipedia.org/wiki/List_of_heads_of_state_of_Trinidad_and_Tobago`;

const countryId = 28;

export const trinidadAndTobago: LeaderNoId[] = [
	{
		countryId,
		name: `Captaincy General of Venezuela`,
		party: `Spanish Empire`,
		leaning: leanings.MONARCHY,
		tookOffice: `1 January 1777`,
		leftOffice: `1 January 1797`,
	},
	{
		countryId,
		name: `Colony of Trinidad and Tobago`,
		party: `British Empire`,
		leaning: leanings.MONARCHY,
		tookOffice: `1 January 1797`,
		leftOffice: `31 August 1962`,
	},
	{
		countryId,
		name: `Sir Solomon Hochoy`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: `31 August 1962`,
		leftOffice: `15 September 1972`,
	},
	{
		countryId,
		name: `Sir Ellis Clarke`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: `15 September 1972`,
		leftOffice: `19 March 1987`,
	},
	{
		countryId,
		name: `Noor Hassanali`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: `20 March 1987`,
		leftOffice: `17 March 1997`,
	},
	{
		countryId,
		name: `A. N. R. Robinson`,
		party: `People's National Movement, Democratic Action Congress, National Alliance for Reconstruction`,
		leaning: leanings.CENTRIST,
		tookOffice: `18 March 1997`,
		leftOffice: `16 March 2003`,
	},
	{
		countryId,
		name: `George Maxwell Richards`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: `17 March 2003`,
		leftOffice: `18 March 2013`,
	},
	{
		countryId,
		name: `Anthony Carmona`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: `18 March 2013`,
		leftOffice: `19 March 2018`,
	},
	{
		countryId,
		name: `Paula-Mae Weekes`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: `19 March 2018`,
		leftOffice: `20 March 2023`,
	},
	{
		countryId,
		name: `Christine Kangaloo`,
		party: `Independent`,
		leaning: leanings.CENTRIST,
		tookOffice: `20 March 2023`,
		leftOffice: null,
	},
];
