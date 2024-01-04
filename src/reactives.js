// library imports
import { reactive } from "vue";

export const store = reactive({

    // VModel bound to site sidebar
    navDrawer: null,
    // toggles sidebar visibility
    toggleNavDrawer() {
        this.navDrawer = !this.navDrawer;
    },

});