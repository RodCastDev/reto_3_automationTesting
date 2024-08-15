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

        basePageM.enterPrices(medio);
        cy.get(".HotelCard__Price").each(card => {cy.get(card).should("contains.text", medio)});

        basePageM.enterPrices(alto);
        cy.get(".HotelCard__Price").each(card => {cy.get(card).should("contains.text", alto)});
    });

    it('clear filters',() =>{
        basePageM.clearSelect()
        cy.get(".HotelsContainer").should('be.visible');

    });

    it('view all cards',() =>{
        basePageM.all
    });

});

