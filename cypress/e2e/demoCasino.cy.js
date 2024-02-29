describe('Paramo Tech Challenge', () => {
  beforeEach(() => {
    cy.visit('https://demo.casino',{ failOnStatusCode: false })
    cy.get('.mfp-close',{timeout:20000}).should('exist',).click()
  })

  it('User Sign Up', () => {
    
    cy.get('[data-test="nav-reg-head"]').should('be.enabled').click()
    cy.url().should("include", "/user/registration")
  
    // Fill the form with user data
    const email = 'test@gmail.com'
    const password = 'Paramo123'
  
    cy.get('[data-test="input-email"]').scrollIntoView()
    cy.get('[data-test="input-email"]')
      .as('inputEmail')
      .should('be.visible')
      .should('be.enabled')
      .and('have.attr','type','email')
      .and('have.attr','placeholder','Email')
      .type(email)
      .should('have.value',email)
    
    cy.contains('I unconditionally agree with ').click()
    cy.get('[for="bonus-0"]').click()
    cy.get('[data-test="input-password"]')
      .as('inputPassword')
      .should('be.visible')
      .should('be.enabled')
      .and('have.attr','type','password')
      .and('have.attr','placeholder','Password')
      .type(password)
    cy.get('[data-test="input-password_confirmation"]')
      .as('inputPasswordConfirmation')
      .should('be.visible')
      .should('be.enabled')
      .and('have.attr','type','password')
      .and('have.attr','placeholder','Reenter password')
      .type(password) 

      cy.get('[data-test="control-submit"]').as('createAccountButton').click()
  })

  it( "Validate homepage elements", () => {
    cy.url().should("include","demo.casino")
    //Checking the visibility of required elements
    cy.get('.header__layout').should('be.visible')
})

} )

