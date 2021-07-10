import "@testing-library/cypress/add-commands";
describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should visit currencies page", () => {
    cy.visit("/currencies");
  });

  it("should navigate to Bitcoin detail page", () => {
    cy.visit("/currencies");
    cy.get(":nth-child(1) > .MuiTableCell-alignLeft > a > .first-cell")
      .contains("[data-testid=coin-row]", "Bitcoin")
      .click()
      .should("have.class", "coin-detail-header");
  });
});
