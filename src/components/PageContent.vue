<script setup>
// library imports

// project imports
import AppBar from "@/components/AppBar.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import { useTabStore } from "@/stores/tab";

const store = useTabStore();

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
        <v-tabs
        v-model="store.tabs"
        align-tabs="title">
            <slot name="tabs"></slot>
        </v-tabs>
    </app-bar>

    <!--main container element-->
    <v-main
    class="page-container">
        <!--VContainer allows pages to use VRow and VCol for layouts-->
        <v-container
        class="page-content"
        fluid>
            <v-window
            v-if="includeExtension"
            v-model="store.tabs">
                <slot name="window"></slot>
            </v-window>

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