import { KPLoginPage } from "../pages/KPLoginPage";
import { test,expect } from "@playwright/test";

/** @type {KPLoginPage} */
let login;
test.describe("login",()=>
{

test.beforeEach("url loading", async({page})=>
{
  await page.goto(process.env.BASEURL);
  login=new KPLoginPage(page);  
})

test("valid login", async({page})=>
{
  await login.setValues(process.env.KP_USERNAME,process.env.KP_PASSWORD);
  await login.loginClick();
  await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/");

})

test("invalid login", async({page})=>
{
  await login.setValues("marcorma7@gmail.com", "1234567");
  await login.loginClick();
  await expect(page).toHaveURL("https://keralaproperty.in/member/login/");
})

test("verify logo is visible", async()=>
{
  await expect(login.logo).toBeVisible();
})

test("logo navigates to the home page", async({page})=>
{
  await login.logoClick();
  await expect(page).toHaveURL("https://keralaproperty.in/");
})
})