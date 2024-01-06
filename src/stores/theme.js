// library imports
import { defineStore } from "pinia";
import { usePreferredColorScheme } from "@vueuse/core";

export const useThemeStore = defineStore("theme", {
    state: () => ({
        listExpanded: false,
        color: "default",
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
    }
});