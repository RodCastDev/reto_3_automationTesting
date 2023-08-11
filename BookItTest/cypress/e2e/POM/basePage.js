class basePage{

    get = {
        hotelsContainer: ()=> cy.get('.HotelsContainer'),
        allPrices: ()=> cy.get('.Filter__Container .Filter__Grid .Filter__Prices'),
        clearButton: ()=> cy.get('.Filter__Clear'),
        allcards: () =>  cy.get(".HotelsContainer")
    }

    enterPrices(sing){
        this.get.allPrices().select(sing);
    }

    clearSelect(){
        this.get.clearButton().click();
    }
}

export const basePageM = new basePage;