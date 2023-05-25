import type { Country } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

import { argentina } from './seed/argentina';
import { belize } from './seed/belize';
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
import { guyana } from './seed/guyana';
import { haiti } from './seed/haiti';
import { honduras } from './seed/honduras';
import { jamaica } from './seed/jamaica';
import { mexico } from './seed/mexico';
import { nicaragua } from './seed/nicaragua';
import { panama } from './seed/panama';
import { paraguay } from './seed/paraguay';
import { peru } from './seed/peru';
import { suriname } from './seed/suriname';
import { trinidadAndTobago } from './seed/trinidad-and-tobago';
import { uruguay } from './seed/uruguay';
import { puertoRico, usa } from './seed/usa';
import { venezuela } from './seed/venezuela';

const prisma = new PrismaClient();

const countries: Country[] = [
	{ id: 1, name: `United States of America` },
	{ id: 2, name: `Mexico` },
	{ id: 3, name: `Guatemala` },
	{ id: 4, name: `Belize` },
	{ id: 5, name: `El Salvador` },
	{ id: 6, name: `Honduras` },
	{ id: 7, name: `Nicaragua` },
	{ id: 8, name: `Costa Rica` },
	{ id: 9, name: `Panama` },
	{ id: 10, name: `Colombia` },
	{ id: 11, name: `Venezuela` },
	{ id: 12, name: `Ecuador` },
	{ id: 13, name: `Guyana` },
	{ id: 14, name: `Suriname` },
	{ id: 15, name: `French Guyana` },
	{ id: 16, name: `Peru` },
	{ id: 17, name: `Bolivia` },
	{ id: 18, name: `Paraguay` },
	{ id: 19, name: `Brazil` },
	{ id: 20, name: `Argentina` },
	{ id: 21, name: `Uruguay` },
	{ id: 22, name: `Chile` },
	{ id: 23, name: `Puerto Rico` },
	{ id: 24, name: `Cuba` },
	{ id: 25, name: `Jamaica` },
	{ id: 26, name: `Haiti` },
	{ id: 27, name: `Dominican Republic` },
	{ id: 28, name: `Trinidad and Tobago` },
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
		return prisma.country.create({ data: { id, name } });
	});
	const seededCountries = await Promise.all(createManyCountryPromises);
	console.log({ seededCountries });

	const createManyLeadersPromises = leaders.map(({ countryId, name, party, leaning, tookOffice, leftOffice }) => {
		return prisma.leader.create({
			data: { countryId, name, party, leaning, tookOffice: new Date(tookOffice), leftOffice: leftOffice ? new Date(leftOffice) : null },
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
