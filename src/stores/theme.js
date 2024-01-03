// library imports
import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
    state: () => ({
        listExpanded: false,
        color: "default",
        dark: true
    }),

    getters: {
        currentTheme: (state) => state.color + (state.dark ? "Dark" : "Light")
    },

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