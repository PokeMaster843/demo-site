import AppBar from "@/components/AppBar.vue";

describe("<AppBar />", () => {
    it("renders with page title", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(() => (
            <AppBar page-title="Test Page Title">
            </AppBar>
        ));

        cy.getById("page-title")
        .should("have.text", "Test Page Title");
    });

    it("button for controlling sidebar does not appear on larger screens", () => {
        cy.desktop();
        cy.mount(() => (
            <AppBar page-title="Test Page Title">
            </AppBar>
        ));

        cy.getById("sm-menu")
        .should("not.exist");
    });

    it("button for controlling sidebar shows up on smaller screens", () => {
        cy.mobile();
        cy.mount(() => (
            <AppBar page-title="Test Page Title">
            </AppBar>
        ));

        cy.getById("sm-menu")
        .should("exist");
    });

    it("app bar extension renders when prop is set", () => {
        cy.mount(() => (
            <AppBar
            page-title="Test Page Title"
            include-extension>
            </AppBar>
        ));

        cy.get("div .v-toolbar__extension")
        .should("exist");
    });
});