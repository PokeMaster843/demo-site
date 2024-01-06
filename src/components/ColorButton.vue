<script setup>
import { useThemeStore } from "@/stores/theme";

const store = useThemeStore();

defineProps({
    icon: {
        type: String,
        default: ""
    },
    iconColor: {
        type: String,
        default: ""
    },
    size: {
        type: Number,
        default: 56
    },
    color: {
        type: String,
        default: "surface"
    },
    title: {
        type: String,
        default: ""
    },
    selected: {
        type: Boolean,
        default: false
    },
    activator: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <v-btn
    :class="{selected: selected, activator: activator}"
    class="ma-2"
    :elevation="activator ? '2' : '1'"
    density="comfortable"
    :icon="icon"
    :size="size"
    :color="color"
    :title="title">
        <template v-slot:default>
            <v-icon :color="iconColor === '' ? store.color : iconColor"></v-icon>
        </template>
    </v-btn>
</template>

<style scoped>
.activator {
    --bg-color: v-bind(store.cssColor(color));
    box-shadow: 0px 0px 2px 2px var(--bg-color) !important;
}

.selected {
    box-shadow: 0px 0px 8px 4px rgb(var(--v-theme-highlight)) !important;
}
</style>