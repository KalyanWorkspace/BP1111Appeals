const {test,expect} = require('@playwright/test');
const devauth = "https://dev.auth.sqa.org.uk/account/account/login?ReturnUrl=https://dev.appeals.sqa.org.uk";
const pageTitle = "Index";
const email = "norman1.appealssqa.admin.dev.appeals@sqa.org.uk";
 const password ="Password@123";
 const submitButton = "input[type='submit']";
 const searchButton = "button[type='submit']";

 test('PBI17784SearchCentres', async({page})=>
{
    //navigate to auth page for login
   await page.goto(devauth);   
  await page.locator('#Email').type(email);
  await page.locator('#Password').type(password);
 await page.locator(submitButton).click();

 //landing on appeals page
 console.log(await page.title());
  await expect(page).toHaveTitle("Index");

  //clicking on Centres from the menu bara and searching for Centres
  await page.locator("[class='nav-item']").nth(2).click();
  console.log(await page.locator(".col-auto").textContent());
  await page.locator('#searchInput').fill("5010");
  await page.locator(searchButton).click();
  await page.waitForLoadState('networkidle');
  await page.locator("//a[contains(text(),'EA Secondary School Test1')]").click();
  console.log(await page.locator("div[class='container mt-4']").textContent());

});