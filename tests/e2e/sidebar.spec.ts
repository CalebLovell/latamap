import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto(`http://localhost:3000/`);
});

test.describe(`Sidebar opens and all options function correctly`, () => {
	test(`test`, async ({ page }) => {
		await page.getByRole(`button`, { name: `Menu` }).click();
		await page.getByRole(`button`, { name: `Invert Color Scheme` }).click();
		await page.getByRole(`button`, { name: `Invert Color Scheme` }).click();
		await page.getByRole(`button`, { name: `Close` }).click();
	});
});
