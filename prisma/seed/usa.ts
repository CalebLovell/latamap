import type { LeaderNoId } from '../../app/data/types';
import { leanings } from '../../app/data/types';

export const source = `https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States`;

const countryId = 1;

export const usa: LeaderNoId[] = [
	{
		countryId,
		name: `George Washington`,
		party: `Unaffiliated`,
		leaning: leanings.CENTRIST,
		tookOffice: `1789-04-30T00:00:00.000Z`,
		leftOffice: `1797-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `John Adams`,
		party: `Federalist Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1797-03-04T00:00:00.000Z`,
		leftOffice: `1801-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Thomas Jefferson`,
		party: `Democratic-Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1801-03-04T00:00:00.000Z`,
		leftOffice: `1809-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `James Madison`,
		party: `Democratic-Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1809-03-04T00:00:00.000Z`,
		leftOffice: `1817-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `James Monroe`,
		party: `Democratic-Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1817-03-04T00:00:00.000Z`,
		leftOffice: `1825-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `John Quincy Adams`,
		party: `Democratic-Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1825-03-04T00:00:00.000Z`,
		leftOffice: `1829-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Andrew Jackson`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1829-03-04T00:00:00.000Z`,
		leftOffice: `1837-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Martin Van Buren`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1837-03-04T00:00:00.000Z`,
		leftOffice: `1841-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `William Henry Harrison`,
		party: `Whig Party`,
		leaning: leanings.RIGHT,
		tookOffice: `1841-03-04T00:00:00.000Z`,
		leftOffice: `1841-04-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `John Tyler`,
		party: `Whig Party`,
		leaning: leanings.RIGHT,
		tookOffice: `1841-04-04T00:00:00.000Z`,
		leftOffice: `1845-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `James K. Polk`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1845-03-04T00:00:00.000Z`,
		leftOffice: `1849-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Zachary Taylor`,
		party: `Whig Party`,
		leaning: leanings.RIGHT,
		tookOffice: `1849-03-04T00:00:00.000Z`,
		leftOffice: `1850-07-09T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Millard Fillmore`,
		party: `Whig Party`,
		leaning: leanings.RIGHT,
		tookOffice: `1850-07-09T00:00:00.000Z`,
		leftOffice: `1853-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Franklin Pierce`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1853-03-04T00:00:00.000Z`,
		leftOffice: `1857-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `James Buchanan`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1857-03-04T00:00:00.000Z`,
		leftOffice: `1861-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Abraham Lincoln`,
		party: `Republican Party & National Union Party`,
		leaning: leanings.CENTRIST,
		tookOffice: `1861-03-04T00:00:00.000Z`,
		leftOffice: `1865-04-15T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Andrew Johnson`,
		party: `Democratic Party & National Union Party`,
		leaning: leanings.LEFT,
		tookOffice: `1865-04-15T00:00:00.000Z`,
		leftOffice: `1869-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Ulysses S. Grant`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1869-03-04T00:00:00.000Z`,
		leftOffice: `1877-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Rutherford B. Hayes`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1877-03-04T00:00:00.000Z`,
		leftOffice: `1881-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `James A. Garfield`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1881-03-04T00:00:00.000Z`,
		leftOffice: `1881-09-19T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Chester A. Arthur`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1881-09-19T00:00:00.000Z`,
		leftOffice: `1885-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Grover Cleveland`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1885-03-04T00:00:00.000Z`,
		leftOffice: `1889-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Benjamin Harrison`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1889-03-04T00:00:00.000Z`,
		leftOffice: `1893-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Grover Cleveland`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1893-03-04T00:00:00.000Z`,
		leftOffice: `1897-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `William McKinley`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1897-03-04T00:00:00.000Z`,
		leftOffice: `1901-09-14T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Theodore Roosevelt`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1901-09-14T00:00:00.000Z`,
		leftOffice: `1909-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `William Howard Taft`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1909-03-04T00:00:00.000Z`,
		leftOffice: `1913-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Woodrow Wilson`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1913-03-04T00:00:00.000Z`,
		leftOffice: `1921-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Warren G. Harding`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1921-03-04T00:00:00.000Z`,
		leftOffice: `1923-08-02T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Calvin Coolidge`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1923-08-02T00:00:00.000Z`,
		leftOffice: `1929-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Herbert Hoover`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1929-03-04T00:00:00.000Z`,
		leftOffice: `1933-03-04T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Franklin D. Roosevelt`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1933-03-04T00:00:00.000Z`,
		leftOffice: `1945-04-12T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Harry S. Truman`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1945-04-12T00:00:00.000Z`,
		leftOffice: `1953-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Dwight D. Eisenhower`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1953-01-20T00:00:00.000Z`,
		leftOffice: `1961-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `John F. Kennedy`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1961-01-20T00:00:00.000Z`,
		leftOffice: `1963-11-22T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Lyndon B. Johnson`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1963-11-22T00:00:00.000Z`,
		leftOffice: `1969-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Richard Nixon`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1969-01-20T00:00:00.000Z`,
		leftOffice: `1974-08-09T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Gerald Ford`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1974-08-09T00:00:00.000Z`,
		leftOffice: `1977-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Jimmy Carter`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1977-01-20T00:00:00.000Z`,
		leftOffice: `1981-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Ronald Reagan`,
		party: `Republican Party`,
		leaning: leanings.RIGHT,
		tookOffice: `1981-01-20T00:00:00.000Z`,
		leftOffice: `1989-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `George H. W. Bush`,
		party: `Republican Party`,
		leaning: leanings.CENTER_RIGHT,
		tookOffice: `1989-01-20T00:00:00.000Z`,
		leftOffice: `1993-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Bill Clinton`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `1993-01-20T00:00:00.000Z`,
		leftOffice: `2001-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `George W. Bush`,
		party: `Republican Party`,
		leaning: leanings.RIGHT,
		tookOffice: `2001-01-20T00:00:00.000Z`,
		leftOffice: `2009-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Barack Obama`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `2009-01-20T00:00:00.000Z`,
		leftOffice: `2017-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Donald Trump`,
		party: `Republican Party`,
		leaning: leanings.FAR_RIGHT,
		tookOffice: `2017-01-20T00:00:00.000Z`,
		leftOffice: `2021-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Joe Biden`,
		party: `Democratic Party`,
		leaning: leanings.CENTER_LEFT,
		tookOffice: `2021-01-20T00:00:00.000Z`,
		leftOffice: `2025-01-20T00:00:00.000Z`,
	},
	{
		countryId,
		name: `Donald Trump`,
		party: `Republican Party`,
		leaning: leanings.FAR_RIGHT,
		tookOffice: `2025-01-20T00:00:00.000Z`,
		leftOffice: null,
	},
];

const spanishRule = {
	countryId: 23,
	name: `Captain General of Puerto Rico`,
	party: `Kingdom of Spain`,
	leaning: leanings.MONARCHY,
	tookOffice: `1 January 1580`,
	leftOffice: `1898-10-18T00:00:00.000Z`,
};

const firstAmericanPres = {
	countryId: 23,
	name: `William McKinley`,
	party: `Republican Party`,
	leaning: leanings.CENTER_RIGHT,
	tookOffice: `1898-10-18T00:00:00.000Z`,
	leftOffice: `1901-09-14T00:00:00.000Z`,
};

export const puertoRico = usa
	.map(x => {
		return { ...x, countryId: 23 };
	})
	// Filter out presidents who took office before the US took control of Puerto Rico
	.filter(x => x.tookOffice >= `1898-10-18T00:00:00.000Z`)
	.concat([spanishRule, firstAmericanPres]);
