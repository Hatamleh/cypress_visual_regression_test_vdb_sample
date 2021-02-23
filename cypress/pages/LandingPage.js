
export const SignupPanel = () => cy.get('.SignupPanel-Block')
const postCodeTextField = () => cy.get('[id="submitData.shippingAddress.zipCode"]');
const houseNumberTextField = () => cy.get('[id="submitData.shippingAddress.number"]');
const calculateMonthlyAmountButton = () => cy.get('.SignupPanel-FormContainer button');


export const fillSignupPanel = (postcode, houseNumber) => {
 postCodeTextField().type(postcode, { force: true, delay: 100 });
 houseNumberTextField().type(houseNumber, { force: true });
 calculateMonthlyAmountButton().click({ force: true });
};

