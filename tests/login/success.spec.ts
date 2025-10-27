import { test, expect } from '../../fixtures/homePage.fixture';

test.describe('Login - Success', async () => {
  test('User logins successfully', async ({ homePage }) => {
    const loginPage = await homePage.openLoginForm();
    await loginPage.fillLoginForm(process.env.CODERE_USERNAME!, process.env.CODERE_PASSWORD!);
    await loginPage.clickLoginButton();
    await expect(loginPage.dialogAlert).toBeVisible();
    // Here it is assumed that the alert should show a "Bienvenido!" message.
    // Due to "error702" it is unknown which is the valid expected result here.
    await expect(loginPage.dialogAlert, 'Successful login failed!').toContainText('Bienvenido!');
  });
});
