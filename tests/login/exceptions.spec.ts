import { test, expect } from '../../fixtures/homePage.fixture';
import { LoginPage } from '../../pageobjects/login.page';

test.describe('Login - Exceptions', () => {
  let loginPage:LoginPage;
  test.beforeEach(async ({ homePage }) => {
    loginPage = await homePage.openLoginForm();
  });

  test('User tries to login submitting an empty login form', async () => {
    await loginPage.clickLoginButton();
    await expect(loginPage.dialogAlert).toBeVisible();
    await expect(loginPage.dialogAlert).toContainText('Revisa que todos los campos estén rellenos');
  });

  test('User tries to login leaving the password field empty', async () => {
    await loginPage.fillLoginForm('fakeusername', null);
    await loginPage.clickLoginButton();
    await expect(loginPage.dialogAlert).toBeVisible();
    await expect(loginPage.dialogAlert).toContainText('Revisa que todos los campos estén rellenos');
  });

  test('User tries to login leaving the username field empty', async () => {
    await loginPage.fillLoginForm(null, 'fakepassword');
    await loginPage.clickLoginButton();
    await expect(loginPage.dialogAlert).toBeVisible();
    await expect(loginPage.dialogAlert).toContainText('Revisa que todos los campos estén rellenos');
  });

  test('User tries to login with invalid credentials', async () => {
    await loginPage.fillLoginForm('fakeusername', 'fakepassword');
    await loginPage.clickLoginButton();
    await expect(loginPage.dialogAlert).toBeVisible();
    await expect(loginPage.dialogAlert).toContainText('Error de inicio de sesión');
  });
});
