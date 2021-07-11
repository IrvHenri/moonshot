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

  it("should navigate to Bitcoin's detail page", () => {
    cy.visit("/currencies");
    cy.findByText("Bitcoin").click();
    cy.findByText("Bitcoin Market Statistics").should("exist");
  });
});
