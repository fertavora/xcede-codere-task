import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { LoginPage } from "./login.page";
import { RegisterPage } from "./register.page";

/**
 * The site home page object displayed when browser goes to base URL
 */
export class HomePage extends BasePage {
  
  readonly buttonAccess: Locator;
  readonly buttonRegister: Locator;
  readonly buttonAcceptCookies: Locator;

  constructor(page: Page) {
    super(page);
    this.buttonAccess = page.locator('.btAccess');
    this.buttonRegister = page.locator('.btSignUp');
    this.buttonAcceptCookies = page.locator('.alert-button-group').getByRole('button', { name: 'Aceptar' });
  }

  /**
   * Goes to base url to load the home page.
   * Accepts cookies if message is displayed. 
   */
  async load(): Promise<void | Response> {
    try{ 
      await this.page.goto('/');
    } catch(error) {
      if (error instanceof Error) {
        throw Error(`An error occurred going to homepage: ${error.message}`);
      } else {
        throw Error(`An unknown error occurred going to homepage: ${error}`);
      }
    }
    const acceptCookiesButton = await this.buttonAcceptCookies.isVisible();
    if (acceptCookiesButton) {
      await this.buttonAcceptCookies.click();
      return this.buttonAcceptCookies.waitFor({ state: 'hidden' });
    }
    return;
  }

  /**
   * Clicks the access button in the top right
   * @returns LoginPage The login form page object
   */
  async openLoginForm(): Promise<LoginPage> {
    await this.buttonAccess.click();
    return new LoginPage(this.page);
  }

  /**
   * Clicks the register button in the top right
   * @returns RegisterPage The regsiter form page object
   */
  async openRegisterForm(): Promise<RegisterPage> {
    await this.buttonRegister.click();
    return new RegisterPage(this.page);
  }
}