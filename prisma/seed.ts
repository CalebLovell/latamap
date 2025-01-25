import type { Country } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

import { argentina } from './seed/argentina';
// import { belize } from './seed/belize';
import { bolivia } from './seed/bolivia';
import { brazil } from './seed/brazil';
import { chile } from './seed/chile';
import { colombia } from './seed/colombia';
import { costaRica } from './seed/costa-rica';
import { cuba } from './seed/cuba';
import { dominicanRepublic } from './seed/dominican-republic';
import { ecuador } from './seed/ecuador';
import { elSalvador } from './seed/el-salvador';
import { guatemala } from './seed/guatemala';
// import { guyana } from './seed/guyana';
import { haiti } from './seed/haiti';
import { honduras } from './seed/honduras';
// import { jamaica } from './seed/jamaica';
import { mexico } from './seed/mexico';
import { nicaragua } from './seed/nicaragua';
import { panama } from './seed/panama';
import { paraguay } from './seed/paraguay';
import { peru } from './seed/peru';
// import { suriname } from './seed/suriname';
import { trinidadAndTobago } from './seed/trinidad-and-tobago';
import { uruguay } from './seed/uruguay';
import { puertoRico, usa } from './seed/usa';
import { venezuela } from './seed/venezuela';

const prisma = new PrismaClient();

const createdAt = new Date();

const countries: Country[] = [
	{ id: 1, name: `United States of America`, createdAt },
	{ id: 2, name: `Mexico`, createdAt },
	{ id: 3, name: `Guatemala`, createdAt },
	{ id: 4, name: `Belize`, createdAt },
	{ id: 5, name: `El Salvador`, createdAt },
	{ id: 6, name: `Honduras`, createdAt },
	{ id: 7, name: `Nicaragua`, createdAt },
	{ id: 8, name: `Costa Rica`, createdAt },
	{ id: 9, name: `Panama`, createdAt },
	{ id: 10, name: `Colombia`, createdAt },
	{ id: 11, name: `Venezuela`, createdAt },
	{ id: 12, name: `Ecuador`, createdAt },
	{ id: 13, name: `Guyana`, createdAt },
	{ id: 14, name: `Suriname`, createdAt },
	{ id: 15, name: `French Guyana`, createdAt },
	{ id: 16, name: `Peru`, createdAt },
	{ id: 17, name: `Bolivia`, createdAt },
	{ id: 18, name: `Paraguay`, createdAt },
	{ id: 19, name: `Brazil`, createdAt },
	{ id: 20, name: `Argentina`, createdAt },
	{ id: 21, name: `Uruguay`, createdAt },
	{ id: 22, name: `Chile`, createdAt },
	{ id: 23, name: `Puerto Rico`, createdAt },
	{ id: 24, name: `Cuba`, createdAt },
	{ id: 25, name: `Jamaica`, createdAt },
	{ id: 26, name: `Haiti`, createdAt },
	{ id: 27, name: `Dominican Republic`, createdAt },
	{ id: 28, name: `Trinidad and Tobago`, createdAt },
];

const leaders = [
	...usa,
	...mexico,
	...guatemala,
	// ...belize,
	...elSalvador,
	...honduras,
	...nicaragua,
	...costaRica,
	...panama,
	...colombia,
	...venezuela,
	...ecuador,
	// ...guyana,
	// ...suriname,
	...peru,
	...bolivia,
	...brazil,
	...argentina,
	...chile,
	...paraguay,
	...uruguay,
	...cuba,
	// ...jamaica,
	...haiti,
	...dominicanRepublic,
	...trinidadAndTobago,
	...puertoRico,
];

async function main() {
	const createManyCountryPromises = countries.map(({ id, name }) => {
		return prisma.country.create({ data: { id, name, createdAt } });
	});
	const seededCountries = await Promise.all(createManyCountryPromises);
	console.log({ seededCountries });

	const createManyLeadersPromises = leaders.map(({ countryId, name, party, leaning, tookOffice, leftOffice }) => {
		return prisma.leader.create({
			data: { countryId, name, party, leaning, tookOffice: new Date(tookOffice), leftOffice: leftOffice ? new Date(leftOffice) : null, createdAt },
		});
	});
	const seededLeaders = await Promise.all(createManyLeadersPromises);
	console.log({ seededLeaders });
}

// eslint-disable-next-line promise/catch-or-return
main()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
