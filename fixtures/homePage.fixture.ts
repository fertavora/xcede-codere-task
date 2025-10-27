import { test as base, Page } from '@playwright/test';
import { HomePage } from '../pageobjects/home.page';

type customFixtures = {
  homePage: HomePage;
}

export const test = base.extend<customFixtures>({
  homePage: async ({ page }, use, testInfo) => {
    // This sets the sec-ch-ua header to all site requests to avoid the Access Denied
    const baseUrl = testInfo.project.use.baseURL;
    await page.route(`${baseUrl}/**`, async (route) => {
      const headers = route.request().headers();
      headers['sec-ch-ua'] = 'Chromium';
      await route.continue({ headers });
    });

    const homePage = new HomePage(page);
    await homePage.load();    
    await use(homePage);
  }
});

export { expect } from '@playwright/test';