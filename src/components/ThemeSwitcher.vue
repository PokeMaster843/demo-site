<script setup>
// library imports
import { useTheme, useDisplay } from "vuetify";

// project imports
import { accentColors } from "@/themes";
import { useThemeStore } from "@/stores/theme";
import ColorButton from "@/components/ColorButton.vue";
import IconList from "./IconList.vue";

const theme = useTheme();
const { xs } = useDisplay();
const store = useThemeStore();

/**
 * Switches theme accent color, preserving light/dark state.
 * @param {String} newColor 
 */
function switchColor(newColor) {

    store.closeList();
    store.setColor(newColor);

}

/**
 * Toggles between light/dark themes, preserving selected accent color.
 */
 function toggleDark() {
    store.toggleDark();
    theme.global.name.value = store.dark ? "defaultDark" : "defaultLight";
}

// when any other part of the webpage is clicked, close theme list
document.body.addEventListener("click", () => {
    store.closeList();
});
</script>

<template>
    <div
    class="d-flex flex-column"
    style="position: fixed; bottom: 2em; right: 2em;">
        <icon-list
        :item-count="5"
        v-model="store.listExpanded">
            <template #activator>
                <color-button
                id="theme-list-toggle"
                icon="mdi-eyedropper"
                color="surface"
                title="Select accent color"
                activator>
                </color-button>
            </template>
            
            <!--TODO: implement custom accent color option here-->
            <template
            v-if="!xs"
            #1>
                <color-button
                :selected="store.custom && store.listExpanded"
                :class="{ expanded: store.listExpanded, contracted: !store.listExpanded }">
                </color-button>
            </template>

            <template
            v-for="(color, index) in accentColors"
            :key="index"
            #[index+2]>
                <color-button
                :selected="store.color == color && store.listExpanded"
                :class="{ expanded: store.listExpanded, contracted: !store.listExpanded }"
                :color="color"
                @click="switchColor(color)">
                </color-button>
            </template>
        </icon-list>

        <!--theme light/dark toggle-->
        <color-button
        icon="mdi-theme-light-dark"
        title="Toggle dark mode"
        @click="toggleDark()">
        </color-button>
    </div>
</template>

<style scoped>
.modal-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    background-color: rgba(0,0,0,0.5);

    #modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.show {
    visibility: visible;
}
.hidden {
    visibility: hidden;
}



.selected {
    box-shadow: 0px 0px 8px 4px rgb(var(--v-theme-highlight)) !important;
}
</style>