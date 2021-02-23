![Cypress.io](https://img.shields.io/badge/Cypress.io-17202C?style=for-the-badge&logo=cypress&link=http://right)
![Javascript](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&link=http://right&logoColor=000000)

# Visual Regression Testing study

Adding a visual regression testing with Cypress is very very easy using this [plugin](https://github.com/jaredpalmer/cypress-image-snapshot)


### Plugin Setup:

* install the dependency to your project
```shell
yarn add cypress-image-snapshot
```

* add the below in [plugin folder](cypress/plugins/index.js)

```js
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};
```

* create a new cypress command inside [cypress/support/commands.js] as below:

```js
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
 failureThreshold: 0.00, // 1px different will fail the test case
 failureThresholdType: 'percent',
 customDiffConfig: {threshold: 0.0},
 capture: "viewport"
});
```

And Thats it for the setup.


### Way of testing:

Using this command we have two ways of testing as below:

* Compare a snapshot for a specific element.
* Compare a snapshot for a full page.

But in both cases and when we use our command, and run the project for the first time, then Cypress will save all the snapshots inside [snapshots folder](cypress/snapshots)
And these images will be our base images that cypress will compare to in the comming runs.


#### Compare snapshot for am element:

The only thing that we will need to do is to nest any element with our command for example, in testing the energy signup,
We can specify the screen size as well, and we will see how in the next example

```js
import * as LandingPage from '../pages/LandingPage'
import * as Wizard from '../pages/wizard_page';
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
```

#### Compare a snapshot for a full page:

And here we just need to use our command in isolation, in the below example you will see how to perform visual testing on many pages and many screen sizes at once

```js
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
```

## Update base snapshot: 

Changing the design will require changing the base images, and for that there is a spcial script in the [package.json](package.json) to do that
So simple just type 
```shell
yarn update-snapshots
```


## Run the demo locally

* Clone this repo
* Download all the dependencies
* Delete the scnapshots folder
* Run the test as below:
```shell
yarn cypress run
```

And Thats !


