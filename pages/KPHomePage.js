export class KPHomePage
{
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page)
    {
       this.page=page;
       this.logo=page.getByAltText("Kerala Property");
       this.myProperties=page.getByRole("heading",{name:"My Properties"});
       this.userName=page.getByText("Abhishek",{exact:true});
       this.myAccount=page.getByText("My Account",{exact:true});
    }
    async myAccountClick()
    {
      await this.myAccount.click();
    }
  
}