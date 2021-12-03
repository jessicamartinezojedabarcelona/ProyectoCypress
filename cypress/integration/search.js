describe('search elements', () =>{
    beforeEach(() => {
        cy.visit('/')
    })
    it('search for elements with multiple results', () => {
       // para abrir la pagina ahora ponermos 
       cy.fixture('index').then((index)  => {
           cy.get(index.searchBox).type('dress');
           cy.get(index.searchButton).click();
       }) 
       cy.fixture('searchResult').then((searchResult)  => {
           cy.get(searchResult.titleResult).should('contain', 'dress');
       })
    })
    it('search for elements with multiple results', () => {
        // para abrir la pagina ahora ponermos 
        cy.fixture('index').then((index)  => {
            cy.get(index.searchBox).type('Query');
            cy.get(index.searchButton).click();
        }) 
        cy.fixture('searchResult').then((searchResult)  => {
            cy.get(searchResult.alertResult).should('contain', 'No results were found for your search');
        })
     })
})