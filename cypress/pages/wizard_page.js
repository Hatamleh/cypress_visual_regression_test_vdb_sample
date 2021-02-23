
const appartment = () => cy.get('.ab-house-1', { timeout: 10000 }).eq(0);
const terracedHouse = () => cy.get('.ab-house-2', { timeout: 10000 }).eq(0);
const cornerHouse = () => cy.get('.ab-house-3', { timeout: 10000 }).eq(0);
const twoUnderOneRoofHouse = () => cy.get('.ab-house-4', { timeout: 10000 }).eq(0);
const detachedHouse = () => cy.get('.ab-house-5', { timeout: 10000 }).eq(0);
const houseTypeNext = () => cy.get('.ab-house-button-next-step', { timeout: 10000 });
export const editUageForm = () => cy.get('.edit-usage-form')
const oneResident = () => cy.get('.ab-resident-1').eq(0);
const twoResidents = () => cy.get('.ab-resident-2').eq(0);
const threeResidents = () => cy.get('.ab-resident-3').eq(0);
const fourResidents = () => cy.get('.ab-resident-4').eq(0);
const fiveResidents = () => cy.get('.ab-resident-5').eq(0);
const numberOfResidentsNext = () => cy.get('.ab-resident-button-next-step');

const electricityWithGas = () => cy.get('.ab-with-gas').eq(0);
const electricityOnly = () => cy.get('.ab-without-gas').eq(0);
const viewOfferButton = () => cy.get('.ab-view-offer-button');

const withSolarPanel = () => cy.get('.SelectSolarPanelForm').contains('Ja')
const withoutSolarPanel = () => cy.get('.SelectSolarPanelForm').contains('Nee')
const solarPanelNext = () => cy.contains('Volgende stap')
const solarPanelInput = () => cy.get('[id="priceParameters.solarPanelYield"]')



export const selectRandomHouse = () => {
    let houseType = Math.floor(Math.random() * 4 + 2)
    switch (houseType) {
        case 1:
            appartment().click({ force: true });
            break;
        case 2:
            terracedHouse().click({ force: true });
            break;
        case 3:
            cornerHouse().click({ force: true });
            break;
        case 4:
            twoUnderOneRoofHouse().click({ force: true });
            break;
        case 5:
            detachedHouse().click({ force: true });
            break;
    }
    return houseType;
}

export const submitHouseType = () => {
    houseTypeNext().click({ force: true });
}

export const selectResidentNumber = () => {
    let residentNumber = Math.floor(Math.random() * 5 + 1)
    switch (residentNumber) {
        case 1:
            oneResident().click({ force: true });
            break;
        case 2:
            twoResidents().click({ force: true });
            break;
        case 3:
            threeResidents().click({ force: true });
            break;
        case 4:
            fourResidents().click({ force: true });
            break;
        case 5:
            fiveResidents().click({ force: true });
            break;
    }
    return residentNumber;


}

export const submitNumberOfResidents = () => {
    numberOfResidentsNext().click({ force: true });
}

export const selectEnergyType = (type) => {
    let energyType = Math.floor(Math.random() * 2 + 1)
    cy.wait(500)

    if (type) {
        energyType = type
    } else {
        energyType = Math.floor(Math.random() * 2 + 1)
    }

    switch (energyType) {
        case 1:
            electricityOnly().click({ force: true });
            break;
        case 2:
            electricityWithGas().click({ force: true });
            break;
    }

    return energyType;

}

export const selectSolarPanel = () => {
    let solarPanel = Math.floor(Math.random() * 2 + 1)
    switch (solarPanel) {
        case 1:
            withSolarPanel().click({ force: true });
            solarPanelNext().click({ force: true })
            solarPanelInput().clear().type("80", { force: true });
            cy.wait(500)
            solarPanelNext().click({ force: true })
            break;
        case 2:
            withoutSolarPanel().click({ force: true });
            cy.wait(500)
            solarPanelNext().click({ force: true })
            break;
    }

    return solarPanel;

}

export const submitEnergyType = () => {
    viewOfferButton().click({ force: true });
}









