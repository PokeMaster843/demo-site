<script setup>
// library imports
import { useTheme } from "vuetify";

// project imports
import { colorThemes } from "@/themes";
import { store } from "@/reactives";

const theme = useTheme();

/**
 * Switches theme accent color, preserving light/dark state.
 * @param {String} newColor 
 */
function switchColor(newColor) {

    store.closeList();

    // deselect current color, and then select new color
    colorThemes[currentColor()].selected = false;
    colorThemes[newColor].selected = true;

    // change site theme
    theme.global.name.value = newColor + (theme.global.current.value.dark ? "Dark" : "Light");

}

/**
 * Toggles between light/dark themes, preserving selected accent color.
 */
function toggleDark() {
    theme.global.name.value = theme.global.current.value.dark ? theme.global.name.value.replace(/Dark$/, "Light") : theme.global.name.value.replace(/Light$/, "Dark");
}

/**
 * Gets the currently selected accent color of the site.
 * @returns current accent color
 */
function currentColor() {
    return theme.global.name.value.replace(/(Dark|Light)$/, "");
}

// event handler for expanding/contracting theme accent color list
function expandContract(event) {
    
    // prevents click event from propagating to parent elements
    event.stopPropagation();

    // toggles expanded state
    store.toggleList();

}
</script>

<template>
    <div
    class="d-flex flex-column"
    style="position: fixed; bottom: 2em; right: 2em;">
        
        <!--theme accent colors-->
        <div
        class="d-flex flex-column">
            <div
            v-for="(color, index) in colorThemes"
            :key="index"
            :class="{ expanded: store.themeListExpanded, contracted: !store.themeListExpanded }">
                <v-btn
                :class="{ selected: color.selected && store.themeListExpanded }"
                class="ma-2"
                elevation="1"
                density="comfortable"
                icon=""
                size="56"
                :color="theme.global.current.value.dark ? color.dark : color.light"
                @click="switchColor(color.name)">
                </v-btn>
            </div>
        </div>

        <!--theme accent color list toggle-->
        <v-btn
        id="theme-list-toggle"
        class="ma-2"
        elevation="2"
        density="comfortable"
        icon="mdi-select-color"
        size="56"
        color="surface"
        style="box-shadow: 0px 0px 2px 2px rgb(var(--v-theme-surface)) !important;"
        @click="expandContract"
        title="Select accent color">
            <template v-slot:default>
                <v-icon color="accent-color"></v-icon>
            </template>
        </v-btn>

        <!--theme light/dark toggle-->
        <v-btn class="ma-2"
        elevation="1"
        density="comfortable"
        icon="mdi-theme-light-dark"
        size="56"
        @click="toggleDark()"
        title="Toggle dark mode">
            <template v-slot:default>
                <v-icon color="accent-color"></v-icon>
            </template>
        </v-btn>
    </div>
</template>

<style scoped lang="scss">
$numColors: 4;

.contracted {
    transition-delay: 0.1s;
    transition: translate 0.2s;
}

.expanded {
    translate: 0px;
    transition-delay: 0.1s;
    transition: translate;
}

@for $i from 1 through $numColors {
    .contracted:nth-child(#{$i}) {
        translate: 0px calc((57px + 1em) * (($numColors + 1) - $i));
    }
    .expanded:nth-child(#{$i}) {
        transition-duration: (($numColors + 1) - $i) * 0.067s;
    }
}

.selected {
    box-shadow: 0px 0px 8px 4px rgb(var(--v-theme-highlight)) !important;
}
</style>