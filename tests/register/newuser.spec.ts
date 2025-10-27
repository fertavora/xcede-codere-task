/**
 *********************************************************************
 * This test was added only to show the error702 issue found
 * while trying to register into the app and get valid credentials
 * for the login successful test case.
 * *********************************************************************
 */

import { test, expect } from '../../fixtures/homePage.fixture';
import { RegisterData } from '../../types/RegisterData';

test.describe('Sign up - Success', async () => {
  test.skip('User signs up successfully', async ({ homePage }) => {
    const newUserData: RegisterData = {
      firstName: 'John',
      firstSurname: 'Doe',
      birthDate: {
        birthDay: '15',
        birthMonth: 'Enero',
        birthYear: '1980'
      },
      jobIndustry: 'Informática y telecomunicaciones',
      personalId: '17355846T',
      address: {
        addressName: 'Paseo de la Castellana 122',
        addressZipCode: '28046'
      },
      mobilePhoneNumber: '628853248',
      email: 'codere@example.com',
      username: 'codingtask',
      password: 'Xcedecoderetask1'
    }
    
    const registerPage = await homePage.openRegisterForm();
    await registerPage.fillRegistrationForm(newUserData);
    await registerPage.submitRegistrationForm();
    await expect(registerPage.dialogAlert).toBeVisible({timeout: 15000});
    await expect(registerPage.dialogAlert).toContainText('Usuario Registrado');
  });
});
