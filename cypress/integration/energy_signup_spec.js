// USE cypress-image-snapshot
// Please check the support/index.js File
// Please check the support/commands.js file



/**
 * When we run the code for the first time and adding .matchImageSnapshot();
 * Then Cypress will take a snapshot for the element or the page and save it inside snapshots folder
 * This image there will be the base image, and every new run will compare the auto generated image with the base one
 */


import * as LandingPage from '../pages/LandingPage'
import * as Wizard from '../pages/wizard_page';
// import * as BestDealPage from '../../../pages/website/best_deal_page';
// import * as ConnectFormPage from '../../../pages/website/connect_form_page'
// import * as ThankyouPage from '../../../pages/website/thank_you_page'


describe('Visual Testing using cypress-image-snapshot', () => {

 before(() => {

  cy.setCookie('cookieConsentStatus', 'allowed', {domain: '.vandebron.nl'});
  cy.viewport('macbook-15')
  cy.visit('/')
 })

 it('perform a full signup flow', () => {
   // You can take a snapshot for a specific elememt
  LandingPage.SignupPanel().matchImageSnapshot("signup panel");
  LandingPage.fillSignupPanel('1017bw', "545")
  Wizard.editUageForm().matchImageSnapshot("houses")
  Wizard.selectRandomHouse();
  Wizard.submitHouseType();
  Wizard.editUageForm().matchImageSnapshot("residents")
  Wizard.selectResidentNumber();
  Wizard.submitNumberOfResidents();
  Wizard.editUageForm().matchImageSnapshot("energyType")
  Wizard.selectEnergyType();
  Wizard.submitEnergyType();
  Wizard.selectSolarPanel();
 })
})