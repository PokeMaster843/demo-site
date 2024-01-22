import AppBar from "@/components/AppBar.vue";

describe("<AppBar />", () => {
    it("renders with page title", () => {
        cy.mount(() => (
            <AppBar page-title="Test Page Title">
            </AppBar>
        ));

        cy.getById("page-title")
        .contains("div", "Test Page Title")
        .should("exist");
    });

    it("does not display button for controlling sidebar on desktop/larger screen sizes", () => {
        cy.desktop();
        cy.mount(() => (
            <AppBar page-title="Test Page Title">
            </AppBar>
        ));

        cy.getById("sm-menu")
        .should("not.exist");
    });

    it("displays button for controlling sidebar on mobile/smaller screen sizes", () => {
        cy.mobile();
        cy.mount(() => (
            <AppBar page-title="Test Page Title">
            </AppBar>
        ));

        cy.getById("sm-menu")
        .should("exist");
    });

    it("renders app bar extension when prop is set", () => {
        cy.mount(() => (
            <AppBar
            page-title="Test Page Title"
            include-extension>
            </AppBar>
        ));

        cy.get("div.v-toolbar__extension")
        .should("exist")
        .should("be.visible");
    });

    it("app bar extension renders unfinished icon when 'finished' prop is set to false", () => {
        cy.mount(() => (
            <AppBar
            page-title="Test Page Title"
            finished={false}>
            </AppBar>
        ));

        cy.getById("page-title")
        .find("i.mdi-hammer-wrench")
        .should("exist")
        .should("be.visible")
        .should("have.class", "text-warning");
    });
});