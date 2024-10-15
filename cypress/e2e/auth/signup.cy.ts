import { AppRoutes } from "../../../src/app/config/routes/AppRoutes";

/// <reference types="cypress" />

function generateEmail() {
  const num = Math.floor(Math.random() * 10000);
  return `test${num}@example.com`;
}

describe("Sign-up page", () => {
  it("should register user and redirect him to dashboard", () => {
    cy.visit(AppRoutes.signUp);
    cy.contains("Sign up");
    cy.get(`[data-test="@input:name"]`).type("John Doe");
    cy.get(`[data-test="@input:email"]`).type(generateEmail());
    cy.get(`[data-test="@input:password"]`).type("Password123.");
    cy.get(`[data-test="@input:password-repeat"]`).type("Password123.");
    cy.get("form").submit();

    cy.url().should("include", AppRoutes.dashboard);
  });
});
