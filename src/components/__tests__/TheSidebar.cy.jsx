import TheSidebar from "@/components/TheSidebar.vue";
import { createPage, createChildPage } from "@/references";

const testPages = [
    createPage("Home Page", "mdi-home", "home"),
    createPage("Test Page A", "mdi-square", "a", true, true, [
        createChildPage("Test Child Page B", "b")
    ]),
];

describe("<TheSidebar />", () => {
    it("renders minimized sidebar rail on larger screens", () => {
        cy.desktop();
        cy.mount(() => (
            <TheSidebar pages={testPages}></TheSidebar>
        ));
        
        // renders nav drawer rail
        cy.getById("nav-drawer")
        .should("have.class", "v-navigation-drawer--rail")
        .should("be.visible")
        // nav drawer not expanded
        .should("not.have.class", "v-navigation-drawer--is-hovering")
        // nav drawer not mobile version
        .should("not.have.class", "v-navigation-drawer--temporary")
        .should("not.have.class", "v-navigation-drawer-mobile");
        
        cy.getByIdAndAttributes("page-link-home", {
            href: "'/'"
        }).should("exist");

        cy.getById("parent-page-a")
        .should("exist");

        cy.getByIdAndAttributes("child-link-b", {
            href: "'/a/b'"
        }).should("exist");
    });

    it("expands on hover on larger screens", () => {
        cy.desktop();
        cy.mount(() => (
            <TheSidebar pages={testPages}></TheSidebar>
        ));

        cy.getById("nav-drawer")
        .hover()
        .should("have.class", "v-navigation-drawer--is-hovering");
    });

    it("pages with children only visible after click to expand list", () => {
        cy.desktop();
        cy.mount(() => (
            <TheSidebar pages={testPages}></TheSidebar>
        ));

        cy.getById("nav-drawer")
        .hover();

        cy.getById("child-link-b")
        .should("not.be.visible");

        cy.getById("parent-page-a")
        .click();

        cy.getById("child-link-b")
        .should("be.visible");
    });

    it("not visible by default on smaller screens", () => {
        cy.mobile();
        cy.mount(() => (
            <TheSidebar pages={testPages}></TheSidebar>
        ));

        cy.getById("nav-drawer")
        .should("not.be.visible");
    });
});