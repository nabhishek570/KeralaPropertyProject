export class KPLoginPage
{
  /**
   * @param {import('@playwright/test').Page} page
   */
   
  constructor(page)
  {
    this.page=page;
    this.usernamefield=page.locator("#ulogin");
    this.passwordfield=page.locator("#upass");
    this.loginbutton=page.locator("#sub_logbtn");
    this.logo=page.getByAltText("Kerala Property");

  }

  async setValues(user,pass)
  {
    await this.usernamefield.fill(user);
    await this.passwordfield.fill(pass);

  }

  async loginClick()
  {
    await this.loginbutton.click();

  }

  async logoClick()
  {
    await this.logo.click();
  }
}