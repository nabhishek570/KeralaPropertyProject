import { KPLoginPage } from "../pages/KPLoginPage";
import { KPHomePage } from "../pages/KPHomePage";
import { test,expect } from "@playwright/test";

/** @type {KPLoginPage} */
let login;
/**@type {KPHomePage} */
let home;

test.describe("home",()=>
{
  test.beforeEach("login and loading home", async({page})=>
  {
    await page.goto(process.env.BASEURL);
    login=new KPLoginPage(page);
    home=new KPHomePage(page);
    await login.setValues(process.env.KP_USERNAME,process.env.KP_PASSWORD);
    await login.loginClick();
    await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/");
  })

  test("verify logo is visible",async()=>
  {
    await expect(home.logo).toBeVisible();

  })

  test ("verify my properties text and visibility", async()=>
  {
    await expect(home.myProperties).toBeVisible();
    await expect(home.myProperties).toHaveText("My Properties");

  })

  test("verify username is visible",async()=>
  {
    await expect(home.userName).toBeVisible();
    await expect(home.userName).toHaveText("Abhishek");

  })

  test("verify my account text and click", async({page})=>
  {
    await expect(home.myAccount).toBeVisible();
    await expect(home.myAccount).toHaveText("My Account");
    await home.myAccountClick();
    
  })
})