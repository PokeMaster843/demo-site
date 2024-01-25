<script setup>
// library imports

// project imports
import AppBar from "@/components/AppBar.vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";

// eslint-disable-next-line no-undef
const tabs = defineModel("tabs");

defineProps({
    pageTitle: {
        type: String,
        required: true
    },
    includeExtension: {
        type: Boolean,
        default: false
    },
    finished: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <!--app bar element; props are passed forward-->
    <app-bar
    :page-title="pageTitle"
    :finished="finished"
    :include-extension="includeExtension">
        <v-tabs
        v-model="tabs"
        align-tabs="title">
            <slot name="tabs"></slot>
        </v-tabs>
    </app-bar>

    <!--main container element-->
    <v-main
    class="bg-surface-variant mh-screen h-auto">
        <!--VContainer allows pages to use VRow and VCol for layouts-->
        <v-container
        class="page-content"
        fluid>
            <v-window
            v-if="includeExtension"
            v-model="tabs">
                <slot name="window"></slot>
            </v-window>

            <slot></slot>
        </v-container>

        <!--theme switcher is a fixed element; no need to go inside VContainer-->
        <theme-switcher></theme-switcher>
    </v-main>
</template>

<style scoped>
</style>