import IconButton from "@/components/IconButton.vue";

describe("<IconButton />", () => {
    it("renders with default props", () => {
        cy.mount(() => (
            <IconButton></IconButton>
        ));

        cy.getById("icon-btn")
        .should("have.css", "width", "56px")
        .should("have.css", "height", "56px")
        .should("have.class", "bg-surface")
        .should("not.have.attr", "value");
    });

    it("renders with custom props", () => {
        cy.mount(() => (
            <IconButton
            icon="mdi-circle"
            icon-color="amber"
            size="64"
            color="indigo"
            value="test">
            </IconButton>
        ));

        cy.getById("icon-btn")
        .should("have.css", "width", "64px")
        .should("have.css", "height", "64px")
        .should("have.class", "bg-indigo")
        .should("have.value", "test");
        
        cy.getById("icon-btn-icon")
        .should("have.class", "mdi-circle")
        .should("have.class", "text-amber");
    });
});