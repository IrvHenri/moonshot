describe("Portfolio", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("should see My Portfolio in the navbar after logging in", () => {
    cy.get('input[name="email"]').type("henriquezirv@gmail.com");
    cy.get('input[name="password"]').type("123456");
    cy.findByText("Log in").click();
    cy.findByText("My Portfolio").should("exist");
  });
  it("should see Create A model Portolfio on screen if portfolio is empty  ", () => {
    cy.get('input[name="email"]').type("henriquezirv@gmail.com");
    cy.get('input[name="password"]').type("123456");
    cy.findByText("Log in").click();
    cy.findByText("My Portfolio").click();
    cy.findByText("Create A Model Portfolio!").should("exist");
  });
  it("should be able to add  a coin and see it in your coin table ", () => {
    cy.get('input[name="email"]').type("2");
    cy.get('input[name="password"]').type("2");
    cy.findByText("Log in").click();
    cy.findByText("My Portfolio").click();
    cy.findByText("Add Coin:").click();
    cy.findByText("bitcoin").click();
    cy.get('input[type="number"]').clear().type("1");
    cy.findByText("Add Coin To Portfolio").click();
    cy.findByText("BTC").should("exist");
  });
  it("should be able to update a coin ", () => {
    //Issue with DB reset
    cy.get('input[name="email"]').type("2");
    cy.get('input[name="password"]').type("2");
    cy.findByText("Log in").click();
    cy.findByText("My Portfolio").click();
    cy.findByText("Update").click();
    cy.get('input[type="number"]').clear().type("2");
    cy.get(".update-asset-modal").contains("Update").click();
  });
  it("should be able to remove a coin", () => {
    cy.get('input[name="email"]').type("2");
    cy.get('input[name="password"]').type("2");
    cy.findByText("Log in").click();
    cy.findByText("My Portfolio").click();
    cy.findByText("Add Coin:").click();
    cy.findByText("cardano").click();
    cy.get('input[type="number"]').clear().type("1");
    cy.findByText("Add Coin To Portfolio").click();
    cy.get(".coin-asset-row")
      .get(`[data-testid='cardano']`)
      .click({ force: true });
    cy.findByText("ADA").should("not.exist");
  });
});
