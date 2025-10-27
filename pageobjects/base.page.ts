import { Page, Locator } from "@playwright/test";

export class BasePage {
  page: Page;
  readonly dialogAlert: Locator;
  readonly dialog: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dialogAlert = page.locator('.alert-wrapper');
    this.dialog = page.locator('.contModal');
  }
}