<script setup>
// library imports

// project imports
import AppBar from "@/components/AppBar.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { store } from "@/reactives";

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
    <!--app bar element; props are passed forward-->
    <app-bar
    :page-title="pageTitle"
    :include-extension="includeExtension">
        <slot name="tabs"></slot>
    </app-bar>

    <!--main container element-->
    <v-main
    class="page-container"
    @click="store.closeList()">
        <!--VContainer allows pages to use VRow and VCol for layouts-->
        <v-container
        class="page-content"
        fluid>
            <slot></slot>
        </v-container>

        <!--theme switcher is a fixed element; no need to go inside VContainer-->
        <theme-switcher></theme-switcher>
    </v-main>
</template>

<style scoped>
.page-container {
    background-color: rgb(var(--v-theme-surface-variant));
    min-height: 100vh;
    height: fit-content;
}
</style>