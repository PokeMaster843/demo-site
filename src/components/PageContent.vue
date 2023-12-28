<script setup>
import AppBar from "@/components/AppBar.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { clicked } from "@/references";

defineProps({
    pageTitle: {
        type: String,
        required: true
    },
    includeExtension: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <app-bar
    :page-title="pageTitle"
    :include-extension="includeExtension">
        <slot name="tabs"></slot>
    </app-bar>

    <v-main
    class="h-screen page-container"
    @click="clicked = !clicked">
        <v-container
        class="page-content"
        fluid>
            <slot></slot>
        </v-container>

        <theme-switcher></theme-switcher>
    </v-main>
</template>

<style scoped>
.page-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: rgb(var(--v-theme-surface-variant));
}
</style>