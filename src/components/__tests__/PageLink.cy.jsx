import PageLink from "@/components/PageLink.vue";

describe("<PageLink />", () => {
    it("renders with default props", () => {
        cy.mount(() => (
            <v-list>
                <PageLink title="Test Page Link Title"></PageLink>
            </v-list>
        ));
        
        cy.getById("page-link")
        .children("div.v-list-item__content")
        .children("div.v-list-item-title")
        .should("have.text", "Test Page Link Title");

        cy.getById("page-link")
        .should("have.class", "v-list-item")
        .should("be.visible")
        // default icon renders in prepend slot
        .children("div.v-list-item__prepend")
        .children("i")
        .should("have.class", "mdi-circle-small")
        .should("have.class", "text-default");

        cy.getById("page-link")
        // no append slot rendered when 'to' set to null (when used as v-list-group activator, slot is used for dropdown arrow)
        .children("div.v-list-item__append")
        .should("have.length", "0");
    });

    it("renders with custom props", () => {
        cy.mount(() => (
            <v-list>
                <PageLink
                title="Test Page Link Title"
                to="a"
                icon="mdi-square"
                finished={false}></PageLink>
            </v-list>
        ));
        
        cy.getByIdAndAttributes("page-link", {
            href: "'/a'"
        })
        .children("div.v-list-item__content")
        .children("div.v-list-item-title")
        .should("have.text", "Test Page Link Title");

        cy.getByIdAndAttributes("page-link", {
            href: "'/a'"
        })
        .should("have.class", "v-list-item")
        .should("have.class", "v-list-item--link")
        .should("be.visible")
        // default icon renders in prepend slot
        .children("div.v-list-item__prepend")
        .children("i")
        .should("have.class", "mdi-square")
        .should("have.class", "text-default");

        cy.getByIdAndAttributes("page-link", {
            href: "'/a'"
        })
        .children("div.v-list-item__append")
        .children("i")
        // proper icon renders
        .should("have.class", "mdi-hammer-wrench")
        // icon renders in 'warning' color
        .should("have.class", "text-warning")
        // icon renders with description text
        .should("have.attr", "title", "This page is not yet finished.");
    });
});