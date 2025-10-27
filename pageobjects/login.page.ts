import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

/**
 * The login form page object
 */
export class LoginPage extends BasePage {
  
  readonly inputUsername: Locator;
  readonly inputPassword: Locator;
  readonly buttonLogin: Locator;

  constructor(page: Page) {
    super(page);
    
    this.inputUsername = page.locator('#ion-input-1');
    this.inputPassword = page.locator('#ion-input-2');
    this.buttonLogin = page.locator('button[type="submit"]');
    
  }

  /**
   * Fills the login form with credentials.
   * When param is null, the field is skipped.
   */
  async fillLoginForm(username: string | null, password: string | null): Promise<void> {
    if(username){
      await this.inputUsername.fill(username);
    }
    if(password) {
      await this.inputPassword.fill(password);
    }
    return;
  }

  /**
   * Clicks the login button in the login form
   */
  async clickLoginButton(): Promise<void> {
    await this.buttonLogin.click();
  }
}