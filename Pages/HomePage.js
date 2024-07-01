const {expect} = require("@playwright/test")

exports.HomePage = class HomePage{

    constructor(page){

        this.page = page
        this.typeManuallyButton = page.getByRole('button', { name: 'Type manually' }).nth(1)
        this.addressPincodeTxt = page.getByPlaceholder("Search a new address")
        this.confirmAndContinueBtn = page.getByText("Confirm & Continue")
        
        this.loginBtn = page.getByRole("button", {name: "Login"}).nth(0)
        this.cartBtn = page.getByRole("link", {name: "Cart"}).nth(0)
    }

    async typeManualLocationDetails(pincode, address){
        await this.typeManuallyButton.click()
        await this.addressPincodeTxt.fill(pincode)
        await this.page.getByText(address).nth(0).click()
        await this.confirmAndContinueBtn.click()
    }

    async typeManualLocationJunkDetails(junkValue, message){
        await this.typeManuallyButton.click()
        await this.addressPincodeTxt.fill(junkValue)
        await expect(this.page.getByText(message)).toHaveText(message)
    }

    async isNavbarIconsExist(){
        await this.page.pause()
        await expect(this.loginBtn).toBeVisible()
        await this.page.pause()
        await expect(this.cartBtn).toBeVisible()
    }

}