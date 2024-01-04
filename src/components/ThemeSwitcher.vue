<script setup>
// library imports
import { useTheme } from "vuetify";
import { onMounted } from "vue";

// project imports
import { colorThemes } from "@/themes";
import { useThemeStore } from "@/stores/theme";

const theme = useTheme();
const store = useThemeStore();

onMounted(() => {
    theme.global.name.value = store.currentTheme;
});

/**
 * Switches theme accent color, preserving light/dark state.
 * @param {String} newColor 
 */
function switchColor(newColor) {

    store.closeList();

    // deselect current color, and then select new color
    colorThemes[store.color].selected = false;
    colorThemes[newColor].selected = true;
    store.setColor(newColor);

    // change site theme
    theme.global.name.value = store.currentTheme;

}

/**
 * Toggles between light/dark themes, preserving selected accent color.
 */
function toggleDark() {
    store.toggleDark();
    theme.global.name.value = store.currentTheme;
}

// when any other part of the webpage is clicked, close theme list
document.body.addEventListener("click", () => {
    store.closeList();
});

// event handler for expanding/contracting theme list
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
            :class="{ expanded: store.listExpanded, contracted: !store.listExpanded }">
                <v-btn
                :class="{ selected: store.color == color.name && store.listExpanded }"
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