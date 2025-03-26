import{
    searchInput,
    wikipediaSearchResult
} from '../../locators/googlePage';

describe('Verify DolarHoy values', () => {
it( "Validate DolarHoy displays exchange rates", () => {
    cy.visit( 'https://dolarhoy.com/' );
    cy.url().should("include","dolarhoy");
    
    cy.get('.compra .val')
        .should('be.visible');
    
    cy.screenshot('ExchangeRates');


  })
})