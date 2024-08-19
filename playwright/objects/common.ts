import {expect} from '@playwright/test'
import {elements} from './element.ts'
import {data} from '../fixtures/data.ts'

export class careOSFunction{
    readonly page 
    readonly element 
    readonly data

    constructor(page){
     this.page = page
     this.element = new elements()
     this.data = data
    }

    async navigateToCareOS(){
        await this.page.goto(this.data.link)
    }

    async login(){
        await this.navigateToCareOS()
        await this.page.locator(this.element.usernameInput).fill(this.data.username)
        await this.page.locator(this.element.passwordInput).fill(this.data.password)
        await this.page.locator(this.element.loginButton).click()
    }

    async logout(){
        await this.login()
        await this.page.locator(this.element.username).click()
        await this.page.locator(this.element.logoutDropdownList).click()
        await this.page.locator(this.element.dropdownList).click()
        await this.page.locator(this.element.logoutButton).click()
    }

    async verifyUserName(){
        await expect(this.page.locator(this.element.username)).toBeVisible()
    }

    async verifyLoginScreen(){
        await expect(this.page.locator(this.element.usernameLoginScreenText)).toContainText("Username")
        await expect(this.page.locator(this.element.passwordLoginScreenText)).toContainText("Password")
    }

}
