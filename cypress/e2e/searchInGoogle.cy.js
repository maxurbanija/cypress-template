import{
    searchInput,
    wikipediaSearchResult
} from '../locators/googlePage';

describe('Google search flow', () => {
it( "Validate google results", () => {
    cy.visit( 'https://www.google.com' );
    cy.url().should("include","google");
    
    cy.get(searchInput)
        .type('automation')
        .type('{enter}');
    cy.get('#search')
        .should('be.visible');
    cy.scrollTo('bottom');
    cy.get(wikipediaSearchResult).click();

    cy.origin('https://en.wikipedia.org', () => {
        cy.get('#firstHeading').should('be.visible');
        cy.contains(' Also in 1745, ').scrollIntoView().should('be.visible').screenshot();
    })
  })
})