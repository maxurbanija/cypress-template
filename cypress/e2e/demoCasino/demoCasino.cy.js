import {
  emailInput,
  agreeTermsDiv,
  noBonusCheckBox,
  passwordInput,
  passwordConfirmationInput,
  createAccountBtn
} from '../../locators/registrationPage';

import {
  popularGamesLabel,
  recommendedGamesLabel,
  signUpBtn,
  newGamesLabel,
} from '../../locators/homePage';

describe('Demo Casino Challenge', () => {
 /* beforeEach(() => {
    cy.visit('https://demo.casino',{ failOnStatusCode: false })
    cy.get('.mfp-close',{timeout:20000}).should('exist',).click()
  })*/

  it('User Sign Up', () => {
    // Fill the form with user data
    const email = 'test@gmail.com'
    const password = 'Paramo123'

    cy.get(signUpBtn)
      .should('be.visible')
      .click()
    cy.url()
      .should("include", "/user/registration")
    cy.get(emailInput)
      .as('inputEmail')
      .should('be.visible')
      .should('be.enabled')
      .and('have.attr','type','email')
      .and('have.attr','placeholder','Email')
      .type(email)
      .should('have.value',email)
    cy.contains(agreeTermsDiv)
      .should('be.visible')
      .click()
    cy.get(noBonusCheckBox)
      .click()
    cy.get(passwordInput)
      .as('inputPassword')
      .should('be.visible')
      .should('be.enabled')
      .and('have.attr','type','password')
      .and('have.attr','placeholder','Password')
      .type(password)
    cy.get(passwordConfirmationInput)
      .as('passwordConfirmationInput')
      .should('be.visible')
      .should('be.enabled')
      .and('have.attr','type','password')
      .and('have.attr','placeholder','Reenter password')
      .type(password) 
    cy.get(createAccountBtn)
      .as('createAccountButton')
      .click()
  })

  it( "Validate homepage elements", () => {
    cy.url().should("include","demo.casino")
    //Checking the visibility of required elements
    cy.get('.header__layout').should('be.visible')
    cy.contains('h2',popularGamesLabel)
      .scrollIntoView()
      .should('be.visible')
    cy.contains('h2',newGamesLabel)
      .scrollIntoView()
      .should('be.visible')
    cy.contains('h2',recommendedGamesLabel)
      .scrollIntoView()
      .should('be.visible')
  })

  /*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Scroll to bottom of page
4. Verify 'RECOMMENDED ITEMS' are visible
5. Click on 'Add To Cart' on Recommended product
6. Click on 'View Cart' button
7. Verify that product is displayed in cart page
*/

it.only("Cart",( ) => {
  cy.visit('https://automationexercise.com/');
  cy.scrollTo('bottom');
  cy.get('.recommended_items h2')
    .first()
      .scrollIntoView()
      .should('be.visible')
      .contains('recommended items');
  cy.get('#recommended-item-carousel .item div a')
    .first()
    .should('be.visible')
    .click();

  cy.get('#cartModal div div p a')
  .should('be.visible')
  .click()

  cy.get('[id*="product-"]')
    .should('be.visible')
})
})

