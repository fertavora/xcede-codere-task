import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'],['html', { open: 'always' }]],
  use: {
    baseURL: process.env.CODERE_URL,
    screenshot: 'on',
    viewport: { width: 1920, height: 1080 },
    trace: 'retain-on-failure',
    // This helps to override the Access Denied
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
  },
});
