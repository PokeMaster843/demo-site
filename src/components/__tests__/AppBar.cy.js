import AppBar from "@/components/AppBar.vue";

describe("<AppBar />", () => {
    it("renders with page title", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(AppBar, {
            props: {
                pageTitle: "Test Page Title"
            }
        });

        cy.get("[data-cy=page-title]").should("have.text", "Test Page Title");
    });

    it("button for controlling sidebar does not appear on larger screens", () => {
        cy.viewport("macbook-13");
        cy.mount(AppBar, {
            props: {
                pageTitle: "Test Page Title"
            }
        });

        cy.get("[data-cy=sm-menu]").should("not.exist");
    });

    it("button for controlling sidebar shows up on smaller screens", () => {
        cy.viewport("iphone-xr");
        cy.mount(AppBar, {
            props: {
                pageTitle: "Test Page Title"
            }
        });

        cy.get("[data-cy=sm-menu]").should("exist");
    });

    it("app bar extension renders when prop is set", () => {
        cy.mount(AppBar, {
            props: {
                pageTitle: "Test Page Title",
                includeExtension: true
            }
        });

        cy.get("div .v-toolbar__extension").should("exist");
    });
});