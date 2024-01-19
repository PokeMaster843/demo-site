import IconList from "@/components/IconList.vue";
import IconButton from "@/components/IconButton.vue";

describe("<IconList />", () => {
    it("renders list contracted by default", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(() => (
            <IconList>
                {{
                    activator: () => (<IconButton activator></IconButton>),
                    default: () => (
                        <>
                            <IconButton
                            color="amber"
                            value="1">
                            </IconButton>
                            <IconButton
                            color="indigo"
                            value="2">
                            </IconButton>
                        </>
                    )
                }}
            </IconList>
        ));

        // list items not visible
        cy.getById("icon-list-items")
        .should("not.be.visible");
        
        // list activator visible
        cy.getById("icon-list-activator")
        .should("be.visible");
    });

    it("renders expanded list correctly", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(() => (
            <IconList expanded>
                {{
                    activator: () => (<IconButton activator></IconButton>),
                    default: () => (
                        <>
                            <IconButton
                            color="amber"
                            value="1">
                            </IconButton>
                            <IconButton
                            color="indigo"
                            value="2">
                            </IconButton>
                        </>
                    )
                }}
            </IconList>
        ));

        // renders list items before activator
        cy.getById("icon-list-container")
        .should("have.class", "flex-column")
        .should("not.have.class", "flex-column-reverse")
        .children()
        .last()
        .should("have.attr", "data-cy", "icon-list-activator");
        
        // list items are visible and rendered in plain flex-column
        cy.getById("icon-list-items")
        .should("have.class", "flex-column")
        .should("not.have.class", "flex-column-reverse")
        .should("be.visible")
        // list contains correct number of items
        .children("button.v-btn")
        .should("have.length", 2)
        // list items are correctly ordered
        .first()
        .should("have.value", "1");
        
        // list activator visible
        cy.getById("icon-list-activator")
        .should("be.visible");
    });

    it("renders expanded horizontal list correctly", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(() => (
            <IconList
            expanded
            horizontal>
                {{
                    activator: () => (<IconButton activator></IconButton>),
                    default: () => (
                        <>
                            <IconButton
                            color="amber"
                            value="1">
                            </IconButton>
                            <IconButton
                            color="indigo"
                            value="2">
                            </IconButton>
                        </>
                    )
                }}
            </IconList>
        ));

        // renders list items before activator
        cy.getById("icon-list-container")
        .should("have.class", "flex-row")
        .should("not.have.class", "flex-row-reverse")
        .children()
        .last()
        .should("have.attr", "data-cy", "icon-list-activator");
        
        // list items are visible and rendered in plain flex-row
        cy.getById("icon-list-items")
        .should("have.class", "flex-row")
        .should("not.have.class", "flex-row-reverse")
        .should("be.visible")
        // list contains correct number of items
        .children("button.v-btn")
        .should("have.length", 2)
        // list items are correctly ordered
        .first()
        .should("have.value", "1");
        
        // list activator visible
        cy.getById("icon-list-activator")
        .should("be.visible");
    });

    it("renders expanded reverse list correctly", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(() => (
            <IconList
            expanded
            reverse>
                {{
                    activator: () => (<IconButton activator></IconButton>),
                    default: () => (
                        <>
                            <IconButton
                            color="amber"
                            value="1">
                            </IconButton>
                            <IconButton
                            color="indigo"
                            value="2">
                            </IconButton>
                        </>
                    )
                }}
            </IconList>
        ));

        // renders list items before activator
        cy.getById("icon-list-container")
        .should("have.class", "flex-column")
        .should("not.have.class", "flex-column-reverse")
        .children()
        .last()
        .should("have.attr", "data-cy", "icon-list-activator");
        
        // list items are visible and rendered in flex-column-reverse
        cy.getById("icon-list-items")
        .should("have.class", "flex-column")
        .should("have.class", "flex-column-reverse")
        .should("be.visible")
        // list contains correct number of items
        .children("button.v-btn")
        .should("have.length", 2)
        // list items are correctly ordered
        .first()
        .should("have.value", "1");
        
        // list activator visible
        cy.getById("icon-list-activator")
        .should("be.visible");
    });

    it("renders expanded list correctly when 'activator-first' is set", () => {
        // see: https://on.cypress.io/mounting-vue
        cy.mount(() => (
            <IconList
            expanded
            activator-first>
                {{
                    activator: () => (<IconButton activator></IconButton>),
                    default: () => (
                        <>
                            <IconButton
                            color="amber"
                            value="1">
                            </IconButton>
                            <IconButton
                            color="indigo"
                            value="2">
                            </IconButton>
                        </>
                    )
                }}
            </IconList>
        ));

        // renders list items after activator
        cy.getById("icon-list-container")
        .should("have.class", "flex-column")
        .should("have.class", "flex-column-reverse")
        .children()
        .last()
        .should("have.attr", "data-cy", "icon-list-activator");
        
        // list items are visible and rendered in plain flex-column
        cy.getById("icon-list-items")
        .should("have.class", "flex-column")
        .should("not.have.class", "flex-column-reverse")
        .should("be.visible")
        // list contains correct number of items
        .children("button.v-btn")
        .should("have.length", 2)
        // list items are correctly ordered
        .first()
        .should("have.value", "1");
        
        // list activator visible
        cy.getById("icon-list-activator")
        .should("be.visible");
    });
});