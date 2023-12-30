<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { colorThemes } from "@/themes";

const expanded = ref(false);
const theme = useTheme();

function switchColor(newColor) {
    expanded.value = !expanded.value;
    colorThemes[currentColor()].selected = false;
    colorThemes[newColor].selected = true;
    theme.global.name.value = newColor + (theme.global.current.value.dark ? "Dark" : "Light");
}

function toggleDark() {
    theme.global.name.value = theme.global.current.value.dark ? theme.global.name.value.replace(/Dark$/, "Light") : theme.global.name.value.replace(/Light$/, "Dark");
}

function currentColor() {
    return theme.global.name.value.replace(/(Dark|Light)$/, "");
}
</script>

<template>
    <div
    class="d-flex flex-column"
    style="position: fixed; bottom: 2em; right: 2em;">
        
        <div
        class="d-flex flex-column anim-container">
            <div
            v-for="(color, index) in colorThemes"
            :key="index"
            :class="{ expanded: expanded, contracted: !expanded }"
            class="accent-color-button-container"
            :style="'opacity:' + (expanded ? '1' : '1')">
                <v-btn
                :class="{ selected: color.selected && expanded }"
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

        <v-btn
        class="ma-2"
        elevation="2"
        density="comfortable"
        icon=""
        size="56"
        color="surface"
        style="box-shadow: 0px 0px 2px 2px rgb(var(--v-theme-surface)) !important;"
        @click="expanded = !expanded"
        title="Select accent color">
            <template v-slot:default>
                <v-icon
                icon="mdi-select-color"
                color="accent-color"></v-icon>
            </template>
        </v-btn>

        <v-btn class="ma-2"
        elevation="1"
        density="comfortable"
        icon=""
        size="56"
        @click="toggleDark()"
        title="Toggle dark mode">
            <template v-slot:default>
                <v-icon
                icon="mdi-theme-light-dark"
                color="accent-color"></v-icon>
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