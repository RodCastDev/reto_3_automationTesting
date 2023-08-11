import { basePageM } from "../POM/BasePage";

const {baseBookit} = Cypress.env('endpoint')
const {bajo,medio,alto} = Cypress.env('allpricesValues')


describe('test book it', ()=>{
    beforeEach(()=>{
        cy.visit("/")
        cy.url().should("contains", baseBookit)
    });

    it('validate page', ()=>{
        cy.get(".HotelsContainer").should('be.visible');
    });

    it('run filters', ()=>{

        basePageM.enterPrices(bajo);
        cy.get(".HotelCard__Price").each(card => {cy.get(card).should("contains.text", bajo)});
        cy.wait(2000);

        basePageM.enterPrices(medio);
        cy.get(".HotelCard__Price").each(card => {cy.get(card).should("contains.text", medio)});
        cy.wait(2000);

        basePageM.enterPrices(alto);
        cy.get(".HotelCard__Price").each(card => {cy.get(card).should("contains.text", alto)});
        cy.wait(2000);
    });

    it('clear filters',() =>{
        basePageM.clearSelect()
    });

    it('view all cards',() =>{
        basePageM.all
    });

});

