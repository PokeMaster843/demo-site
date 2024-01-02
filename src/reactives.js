// library imports
import { reactive } from "vue";

export const store = reactive({
    // state of theme accent color list
    themeListExpanded: false,
    // toggles theme accent color list state
    toggleList() {
        this.themeListExpanded = !this.themeListExpanded;
    },
    // closes theme accent color list (sets expanded state to false)
    closeList() {
        this.themeListExpanded = false;
    }
});