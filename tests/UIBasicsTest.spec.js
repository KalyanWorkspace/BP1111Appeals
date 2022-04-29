const {test,expect} = require('@playwright/test');
const devconnect = "https://dev.connect.sqa.org.uk/";
const pageTitle = "Home | SQA Connect";
const email = "norman1.appealssqa.admin.dev.appeals@sqa.org.uk";
 const password ="Password@123";
 const submitButton = "button[type='submit']";
test('LoginToDevConnectWithValidUserDetails', async ({page})=>
{
   await page.goto(devconnect);
   console.log(await page.title());
  await expect(page).toHaveTitle(pageTitle);
  await page.locator('#Email').type("norman1.appeals.dev.appeals@sqa.org.uk");
  await page.locator('#Password').type(password);
  await page.locator(submitButton).click();
  console.log(await page.title());
  await expect(page).toHaveTitle(pageTitle);
  console.log(await page.locator(".list--blockgrid__link h3").nth(1).textContent());
   
});

test('LoginToDevAppeals',async({browser})=>
{
const context = await browser.newContext();
const URL = await context.newPage();
await URL.goto("https://dev.appeals.sqa.org.uk/");
//console.log(await page.title());
//await expect(page).toHaveTitle("")
});
test('LoginToDevConnectWithInvalidUserDetails', async ({page})=>
{
   //const context = await browser.newContext();
   //const URL = await context.newPage();
   await page.goto(devconnect);
   console.log(await page.title());
  await expect(page).toHaveTitle(pageTitle);
  await page.locator('#Email').type("email@email.com");
  await page.locator('#Password').type("password");
  await page.locator(submitButton).click();
  console.log(await page.locator("[style*='color']").textContent());
   
});

test('PBI17583BothMaintainKeyDates(HLR_001)', async({page})=>
{
   await page.goto(devconnect);
   console.log(await page.title());
  await expect(page).toHaveTitle(pageTitle);
  await page.locator('#Email').type("norman1.appeals.dev.appeals@sqa.org.uk");
  await page.locator('#Password').type(password);
  await page.locator(submitButton).click();
  console.log(await page.title());
  await expect(page).toHaveTitle(pageTitle);
  console.log(await page.locator(".list--blockgrid__link h3").nth(5).textContent());
  await page.locator(".list--blockgrid__link h3").nth(5).click();
  console.log(await page.title());
  await expect(page).toHaveTitle("Index");
  await page.locator("//a[contains(text(),'Maintain Key Dates')]").click();

});
