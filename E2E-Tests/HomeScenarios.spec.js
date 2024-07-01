import {test, expect} from "../Pages/Base"

// const {HomePage} = require("../Pages/HomePage")

test.describe("Manual Address Functionalities", () => {

  test.beforeEach( async ({page}) => {

    await page.goto("https://www.zeptonow.com/")

  })

  test("Successful Entering Manual Location Details", async ({homePage}) => {

    // const homePage = new HomePage(page)
  
    await homePage.typeManualLocationDetails("560001", "Bengaluru, Karnataka 560001, India")
  
  })
  
  test("Failure in Entering Manual Location Details -Junk Values", async ({homePage}) => {
    
    // const homePage = new HomePage(page)

    await homePage.typeManualLocationJunkDetails("dawdawdwawd", "Location not found")

  })

})

test.describe("Home Page Validations", () => {

  test.beforeEach( async ({homePage, page}) => {

    await page.goto("https://www.zeptonow.com/")

    await homePage.typeManualLocationDetails("560001", "Bengaluru, Karnataka 560001, India")

  })

  test("Validate Navbar Icons", async ({homePage, page}) => {

    await page.pause()
    
    await homePage.isNavbarIconsExist()

  })

})