const base = require("@playwright/test")
import {HomePage} from "./HomePage"

exports.test = base.test.extend({

    homePage: async ({page}, use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    }

})

exports.expect = base.expect