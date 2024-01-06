// library imports
import { defineStore } from "pinia";
import { usePreferredColorScheme } from "@vueuse/core";

// matches 3 digit hex, 6 digit hex, or 8 digit hexa
const hex = /^#((\d|[a-fA-F]){3}|(\d|[a-fA-F]){6}|(\d|[a-fA-F]){8})$/;

export const useThemeStore = defineStore("theme", {
    state: () => ({
        listExpanded: false,
        color: "default",
        currentCustomValue: "invert",
        custom: false,
        dark: usePreferredColorScheme().light ? false : true,
        popup: true
    }),

    getters: {},

    actions: {
        toggleList() {
            this.listExpanded = !this.listExpanded;
        },
        closeList() {
            this.listExpanded = false;
        },

        setColor(color) {

            this.color = color;

            if(this.cssColor(color) === color) {
                this.custom = true;
                this.currentCustomValue = color;
            }

            else {
                this.custom = false;
            }
            
        },

        toggleDark() {
            this.dark = !this.dark;
        },

        openPopup() {
            this.popup = true;
        },
        closePopup() {
            this.popup = false;
            console.log("clicked div");
        },

        // converts color to CSS-usable value
        cssColor(color=this.color) {
            if(hex.test(color)) {
                return color;
            }
            return "rgb(var(--v-theme-" + color + "))";
        }
    }
});