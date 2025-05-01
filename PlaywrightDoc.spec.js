
import { test } from '@playwright/test';


test('get started link', async ({ page }) => {
  
  await page.goto('https://playwright.dev/');

  await page.locator('//a[text()="Get started"]').click();

  await page.locator('//a[text()="Installation"]').click();

  await page.locator('//a[text()="Writing tests"]').click();

  await page.locator('//a[text()="Generating tests"]').click();

  await page.locator('//a[text()="Running and debugging tests"]').click();

  await page.locator('(//a[text()="Trace viewer"])[1]').click();

  await page.locator('//a[text()="Setting up CI"]').click();

  await page.locator('//a[text()="Getting started - VS Code"]').click();

  await page.locator('//a[text()="Release notes"]').click();

  await page.locator('//a[text()="Canary releases"]').click();

  await page.locator('//a[text()="Playwright Test"]').click();

  await page.locator('//a[text()="Test configuration"]').click();

  await page.locator('//a[text()="Test use options"]').click();

  await page.locator('//a[text()="Annotations"]').click();

  await page.locator('//a[text()="Command line"]').click();

  await page.locator('//a[text()="Emulation"]').click();

  await page.locator('//a[text()="Fixtures"]').click();

  await page.locator('//a[text()="Global setup and teardown"]').click();

  await page.locator('//a[text()="Parallelism"]').click();

  await page.locator('//a[text()="Parameterize tests"]').click();

  await page.locator('//a[text()="Projects"]').click();

  await page.locator('//a[text()="Reporters"]').click();

  await page.locator('//a[text()="Retries"]').click();

  await page.locator('//a[text()="Sharding"]').click();

  await page.locator('//a[text()="Timeouts"]').click();

  await page.locator('//a[text()="TypeScript"]').click();

  await page.locator('//a[text()="UI Mode"]').click();

  await page.locator('//a[text()="Web server"]').click();

  await page.locator('//a[text()="Guides"]').click();

  await page.locator('//a[text()="Library"]').click();

  await page.locator('//a[text()="Accessibility testing"]').click();

  await page.locator('//a[text()="Actions"]').click();

  await page.locator('//a[text()="Assertions"]').click();

  await page.locator('//a[text()="API testing"]').click();

  await page.locator('//a[text()="Authentication"]').click();

  await page.locator('//a[text()="Auto-waiting"]').click();

  await page.locator('//a[text()="Best Practices"]').click();

  await page.locator('//a[text()="Browsers"]').click();

  await page.locator('//a[text()="Chrome extensions"]').click();

  await page.locator('//a[text()="Clock"]').click();

  await page.locator('//a[text()="Components (experimental)"]').click();

  await page.locator('//a[text()="Debugging Tests"]').click();

  await page.locator('//a[text()="Dialogs"]').click();

  await page.locator('//a[text()="Downloads"]').click();

  await page.locator('//a[text()="Evaluating JavaScript"]').click();

  await page.locator('//a[text()="Events"]').click();

  await page.locator('//a[text()="Extensibility"]').click();

  await page.locator('//a[text()="Frames"]').click();

  await page.locator('//a[text()="Handles"]').click();

  await page.locator('//a[text()="Isolation"]').click();

  await page.locator('//a[text()="Locators"]').click();

  await page.locator('//a[text()="Mock APIs"]').click();

  await page.locator('//a[text()="Mock browser APIs"]').click();

  await page.locator('//a[text()="Navigations"]').click();


  await page.locator('//a[text()="Network"]').click();

  await page.locator('//a[text()="Other locators"]').click();

  await page.locator('//a[text()="Pages"]').click();

  await page.locator('//a[text()="Page object models"]').click();

  await page.locator('//a[text()="Screenshots"]').click();

  await page.locator('//a[text()="Snapshot testing"]').click();

  await page.locator('//a[text()="Test generator"]').click();

  await page.locator('//a[text()="Touch events (legacy)"]').click();

  await page.locator('(//a[text()="Trace viewer"])[2]').click();

  await page.locator('//a[text()="Videos"]').click();

  await page.locator('//a[text()="Visual comparisons"]').click();

  await page.locator('//a[text()="WebView2"]').click();

  await page.locator('//a[text()="Migration"]').click();

  await page.locator('//a[text()="Integrations"]').click();

  await page.locator('//a[text()="Supported languages"]').click();


});
