
const { test } = require('@playwright/test');
import {waitForUserInput} from "..methods"

test('GMB Application Full Flow', async ({ page : page }) => {
  
await page.goto('https://gmb.nonprod.cuapply.com/journey/1');

  
await page.locator('label').filter({ hasText: 'No' }).click();

await page.locator('//h4[text()="I would like to apply for:"]/following::input').fill('2000')
await page.locator('//h4[text()="And pay back:"]/following::button[text()="Weekly"]').click();

await page.locator('//span[text()="Please Select"]/preceding::button[@dir="ltr"]').click();

await page.locator('(//span[text()="1 year"]/following::div)[1]').click();

await page.locator('(//h4[text()="What\'s the loan for?"]/following::button)[1]').click();

await page.locator('(//span[text()="Car Purchase / Repair"]/following::div)[1]').click();

await page.locator('//button[text()="Apply Now"]').click();
await page.locator('h4:has-text("Confirm your details")').click();

await page.locator('(//span[text()="No"]/following::button[@value="no"])[1]').click();
await page.locator('//span[text()="Title"]/parent::button').click();

await page.locator('//span[text()="Mr"]/parent::div').click();
 
await page.locator('//label[text()="First Name"]/following::input[@name="firstName"]').fill('Vasu');

await page.locator('//label[text()="Last Name"]/following::input[@name="lastName"]').fill('gdhsh');

await page.locator('//label[text()="Date of Birth"]/following::input[@placeholder="Day"]').fill('12');

await page.locator('//span[text()="Month"]').click();

await page.locator('//span[text()="January"]').click();

await page.locator('//label[text()="Date of Birth"]//following::input[@placeholder="Year"]').fill('2000');

await page.locator('//label[text()="Email Address"]//following::input[@placeholder="Email Address"]').fill('vasavi123@gmail.com');

await page.locator('//label[text()="Mobile Number"]//following::input[@placeholder="Mobile Number"]').fill('+447475355392');

await page.locator('//button[text()="Verify"]').click();

const userInput = await waitForUserInput('Please enter something to continue: ');
await page.waitForTimeout(10000);
console.log(`User entered: ${userInput}`);

await page.locator('//label[text()="Enter verification code"]//following::input[@placeholder="xxxxxx"]').fill(userInput);

await page.locator('//label[text()="Address Search"]//following::input[@placeholder="Enter Post Code"]').fill('WC2N 5DU');

await page.locator('//label[text()="Address Search"]//following::button[text()="Find Address"]').click();

});
