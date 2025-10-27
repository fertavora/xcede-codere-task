import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { RegisterData } from "../types/RegisterData";

/**
 * The register form page object
 */
export class RegisterPage extends BasePage {

  // Personal data
  readonly inputName: Locator;
  readonly inputFirstSurname: Locator;
  readonly comboBirthDay: Locator;
  readonly comboBirthMonth: Locator;
  readonly inputBirthYear: Locator;
  readonly comboJobIndustry: Locator;
  readonly inputPersonalId: Locator;

  //Contact details
  readonly inputAddress: Locator;
  readonly inputZipCode: Locator;
  readonly inputMobilePhoneNumber: Locator;
  readonly inputEmail: Locator;

  //User data
  readonly inputUsername: Locator;
  readonly inputPassword: Locator;

  //Confirmation
  readonly checkboxTermsConditions: Locator;
  readonly buttonCompleteRegistration: Locator;

  constructor(page: Page) {
    super(page);
    this.inputName = page.getByRole('textbox', { name: 'Nombre' });
    this.inputFirstSurname = page.getByRole('textbox', { name: 'Primer Apellido' });
    this.comboBirthDay = page.locator('select[formcontrolname="birthDay"]');
    this.comboBirthMonth = page.locator('select[ng-reflect-name="birthMonth"]');
    this.inputBirthYear = page.getByRole('textbox', { name: 'Año' });
    this.comboJobIndustry = page.getByLabel('Profesión');
    this.inputPersonalId = page.getByRole('textbox', { name: 'DNI' });

    this.inputAddress = page.getByRole('textbox', { name: 'Dirección' });
    this.inputZipCode = page.getByRole('spinbutton', { name: 'Código Postal' });
    this.inputMobilePhoneNumber = page.getByRole('textbox', { name: 'Móvil' });
    this.inputEmail = page.getByRole('textbox', { name: 'Email' });

    this.inputUsername = page.getByRole('textbox', { name: 'Usuario' });
    this.inputPassword = page.getByRole('textbox', { name: 'Contraseña' });

    this.checkboxTermsConditions = page.locator('.checkbox-icon').first();
    this.buttonCompleteRegistration = page.getByRole('button', { name: 'Finalizar Registro' });
  }

  /**
   * This methods fills the registration form
   * @param registerData The new user registgration data
   */
  async fillRegistrationForm(registerData: RegisterData): Promise<void> {
    await this.inputName.fill(registerData.firstName);
    await this.inputFirstSurname.fill(registerData.firstSurname);
    await this.comboBirthDay.selectOption(registerData.birthDate.birthDay);
    await this.comboBirthDay.press('Enter');
    await this.comboBirthMonth.selectOption({ label: registerData.birthDate.birthMonth });
    await this.comboBirthMonth.press('Enter');
    await this.inputBirthYear.fill(registerData.birthDate.birthYear);
    await this.comboJobIndustry.selectOption(registerData.jobIndustry);
    await this.comboJobIndustry.press('Enter');
    await this.inputPersonalId.fill(registerData.personalId);

    await this.inputAddress.fill(registerData.address.addressName);
    await this.inputZipCode.fill(registerData.address.addressZipCode);
    await this.inputMobilePhoneNumber.fill(registerData.mobilePhoneNumber);
    await this.inputEmail.fill(registerData.email);

    await this.inputUsername.fill(registerData.username);
    await this.inputPassword.fill(registerData.password);

    await this.checkboxTermsConditions.click();
  }

  /**
   * This method submits the registration form
   */
  async submitRegistrationForm(): Promise<void> {
    return this.buttonCompleteRegistration.click();
  }
}