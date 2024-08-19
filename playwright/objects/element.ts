export class elements{
    readonly usernameInput = "input#identifier"
    readonly passwordInput = "input#password"
    readonly usernameLoginScreenText = '.MuiFormLabel-root[for="identifier"]'
    readonly passwordLoginScreenText = '.MuiFormLabel-root[for="password"]'
    readonly loginButton = 'button[type="submit"]'
    readonly username = '.MuiButton-label:has-text("Kung Sales Agent")'
    readonly usernameLogo = '.MuiButtonBase-root .MuiButton-startIcon' 
    readonly logoutDropdownList = '.logout-modal .MuiSelect-root'
    readonly dropdownList = '.MuiButtonBase-root[data-testid="muiSelect-menuItem-2"]'
    readonly logoutButton = '.button-list .MuiButton-label:has-text("Logout")'
}