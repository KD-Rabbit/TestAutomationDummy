import {test} from "@playwright/test"
import {careOSFunction} from '../objects/common.ts'


test('Verify Login Screen',async({page}) => {
    const careOS = new careOSFunction(page)
    await careOS.navigateToCareOS()
    await careOS.verifyLoginScreen()
})

test('Verify User Name',async({page}) => {
    const careOS = new careOSFunction(page)
    await careOS.login()
    await careOS.verifyUserName()
})

test('Verify Login Screen After Logout' ,async({page}) => {
    const careOS = new careOSFunction(page)
    await careOS.logout()
    await careOS.verifyLoginScreen()
})