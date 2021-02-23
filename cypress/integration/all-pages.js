


const pages = ["/", "/energie", "/energie-berekenen", "/elektrisch-rijden", "/elektrisch-rijden/laadpas/signup", "/elektrisch-rijden/laadpalen/keuze", "/elektrisch-rijden/laadpalen/samenstellen", "/elektrisch-rijden/laadpalen/groenladen/samenstellen"]

const screenSizes = ["iphone-x", "macbook-15", "ipad-2"]

describe("Check All the pages", () => {

 pages.forEach(page => {
  screenSizes.forEach(size => {
   it(`perform a vistual test for "${page}" page on "${size}"`, () => {
    cy.setCookie('cookieConsentStatus', 'allowed', {domain: '.vandebron.nl'});
    cy.visit(page)
    cy.matchImageSnapshot(`${page}-${size}`);
   })
  })
  
 })



 

})