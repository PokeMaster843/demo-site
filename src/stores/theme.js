// library imports
import { defineStore } from "pinia";
import { usePreferredColorScheme } from "@vueuse/core";

export const useThemeStore = defineStore("theme", {
    state: () => ({
        listExpanded: false,
        color: "default",
        dark: usePreferredColorScheme().light ? false : true
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
        }
    }
});