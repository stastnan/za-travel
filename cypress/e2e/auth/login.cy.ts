import { AppRoutes } from "../../../src/app/config/routes/AppRoutes";

/// <reference types="cypress" />

describe("login to an user's account", () => {
  it("should login registered user and redirect him to the dashboard", () => {
    cy.visit(AppRoutes.login);
    cy.get(`[data-test="@input:email"]`).type("visitor@example.com");
    cy.get(`[data-test="@input:password"]`).type("ILoveTrips!");
    cy.get("button").contains("Login").click();
    cy.url().should("include", AppRoutes.dashboard);
  });
});
