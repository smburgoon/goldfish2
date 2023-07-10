/**
 * test with page objects
 */
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import MagicSetPage from '../pageobjects/magic-set.page.js'

const sets = ['Kaldheim', 'The+Brothers+War']

describe('Find Kaldheim cards growing the fastest', () => {
    it('should find the top 5 fastest growing cards this week', async () => {
        await MagicSetPage.open('Kaldheim')
        await browser.pause(3000)
        await expect(MagicSetPage.cardTable).toBeExisting()
        await MagicSetPage.cardTableRow()

    })
    // it('should login with valid credentials', async () => {
    //     await LoginPage.open()

    //     await LoginPage.login('tomsmith', 'SuperSecretPassword!')
    //     await expect(SecurePage.flashAlert).toBeExisting()
    //     await expect(SecurePage.flashAlert).toHaveTextContaining(
    //         'You logged into a secure area!')
    // })
})

