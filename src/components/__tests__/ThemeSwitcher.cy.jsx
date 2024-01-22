import { usePreferredColorScheme } from "@vueuse/core";

import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { accentColors } from "@/themes";

const pref = usePreferredColorScheme();

describe("<ThemeSwitcher />", () => {
    it("renders properly", () => {
        cy.mount(() => (
            <ThemeSwitcher data-cy="theme-switcher"></ThemeSwitcher>
        ));

        cy.getById("theme-switcher")
        // theme buttons rendered in flex-column
        .should("have.class", "flex-column")
        // component rendered in bottom right corner
        .should("have.attr", "style", "position: fixed; bottom: 2em; right: 2em;");
        
        cy.getById("theme-colors-list")
        // theme color select buttons not visible by default
        .children("div.v-card")
        .should("not.be.visible");

        cy.getById("theme-colors-list--activator")
        .should("be.visible")
        .should("have.attr", "title", "Select accent color");

        cy.getById("theme-toggle-dark")
        .should("be.visible")
        .should("have.attr", "title", "Toggle dark mode");
    });

    it("theme accent color list functions properly", () => {
        cy.mount(() => (
            <ThemeSwitcher></ThemeSwitcher>
        ));

        // toggle color list expansion (expanded)
        cy.getById("theme-colors-list--activator")
        .click();

        cy.getById("theme-colors-list")
        .children("div.v-card")
        .should("be.visible");
        
        // toggle color list expansion (contracted)
        cy.getById("theme-colors-list--activator")
        .click();

        cy.getById("theme-colors-list")
        .children("div.v-card")
        .should("not.be.visible");

        // toggle color list expansion (expanded)
        cy.getById("theme-colors-list--activator")
        .click();

        cy.getById("theme-colors-list")
        .children("div.v-card")
        .should("be.visible");
        
        // clicking outside theme color list should cause it to contract
        cy.root()
        .click();

        cy.getById("theme-colors-list")
        .children("div.v-card")
        .should("not.be.visible");
    });

    it("standard theme accent colors apply properly", () => {
        cy.mount(() => (
            <ThemeSwitcher></ThemeSwitcher>
        ));

        // toggle color list expansion (expanded)
        cy.getById("theme-colors-list--activator")
        .click();
        
        cy.getById("theme-colors-list")
        // only one color button selected
        .find("button.v-btn--icon.selected")
        .should("have.length", "1")
        // 'default' color selected by default
        .should("have.class", "bg-default");

        for(const color of accentColors.toReversed()) {
            // select accent color
            cy.getById("theme-colors-list")
            .find("button.v-btn--icon.bg-" + color)
            .click();

            // list contracts after selecting accent color
            cy.getById("theme-colors-list")
            .children("div.v-card")
            .should("not.be.visible");

            // expand theme color list
            cy.getById("theme-colors-list--activator")
            .click();

            cy.getById("theme-colors-list")
            // only one color button is selected
            .find("button.v-btn--icon.selected")
            .should("have.length", "1")
            // correct color is selected
            .should("have.class", "bg-" + color);

            // verify that accent color has changed
            cy.getById("theme-colors-list--activator")
            .find("i.mdi-eyedropper")
            .should("have.class", "text-" + color);
        }
    });

    it("'toggle dark' button functions properly", () => {
        cy.mount(() => (
            <ThemeSwitcher></ThemeSwitcher>
        ));
        
        let order = ["defaultDark", "defaultLight"]
        if(pref.light) {
            order = ["defaultLight", "defaultDark"];
        }

        cy.getById("theme-toggle-dark")
        // default theme matches browser preference
        .should("have.class", "v-theme--" + order[0])
        // toggle light/dark
        .click();
        
        cy.getById("theme-toggle-dark")
        // theme toggled to light/dark
        .should("have.class", "v-theme--" + order[1])
        // toggle light/dark again
        .click();

        cy.getById("theme-toggle-dark")
        // theme toggled back to initial brower preference
        .should("have.class", "v-theme--" + order[0]);
    });

    it("custom accent color button not visible on mobile/smaller screen sizes", () => {
        cy.mobile();
        cy.mount(() => (
            <ThemeSwitcher></ThemeSwitcher>
        ));
        
        cy.getById("theme-colors-list--activator")
        .click();

        cy.getById("theme-colors-list")
        .find("button.v-btn--icon[data-cy=theme-colors-list--custom-select]")
        .should("not.exist");
    });

    it("custom accent color button visible on desktop/larger screen sizes", () => {
        cy.desktop();
        cy.mount(() => (
            <ThemeSwitcher></ThemeSwitcher>
        ));
        
        cy.getById("theme-colors-list--activator")
        .click();

        cy.getById("theme-colors-list")
        .find("button.v-btn--icon[data-cy=theme-colors-list--custom-select]")
        .should("exist")
        .should("be.visible");
    });

    it("custom accent color button functions properly", () => {
        cy.desktop();
        cy.mount(() => (
            <ThemeSwitcher></ThemeSwitcher>
        ));
        
        cy.getById("theme-colors-list--activator")
        .click();

        cy.getById("theme-colors-list")
        .find("button.v-btn--icon[data-cy=theme-colors-list--custom-select]")
        // custom color select button exists and is visible when list is expanded
        .should("exist")
        .should("be.visible")
        .click();

        cy.getById("modal-color-picker")
        .find("div.v-color-picker-edit__input > input")
        .type("#00cc66{enter}");
        
        // confirm custom color selection
        cy.getById("modal-submit-btn")
        .click();

        // expand theme color list
        cy.getById("theme-colors-list--activator")
        .click();

        cy.getById("theme-colors-list")
        // only one color button is selected
        .find("button.v-btn--icon.selected")
        .should("have.length", "1")
        // custom color is selected
        .should("have.attr", "data-cy", "theme-colors-list--custom-select");

        // verify that accent color has changed
        cy.getById("theme-colors-list--activator")
        .find("i.mdi-eyedropper")
        .should("have.css", "color", "rgb(0, 204, 102)");
    });
});