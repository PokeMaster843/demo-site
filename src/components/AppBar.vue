<script setup>
// library imports
import { useDisplay } from "vuetify";

// project imports
import { usePageStore } from "@/stores/page";

const { mdAndUp } = useDisplay();
const store = usePageStore();

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
    <v-app-bar>
        <v-app-bar-nav-icon
        v-if="!mdAndUp"
        @click="store.toggleNavDrawer()"
        data-cy="sm-menu">
        </v-app-bar-nav-icon>

        <v-toolbar-title
        data-cy="page-title">
            {{ pageTitle }}

            <v-icon
            v-if="!finished"
            class="mx-4"
            color="warning"
            icon="mdi-hammer-wrench"
            title="This page is under construction.">
            </v-icon>
        </v-toolbar-title>

        <template
        v-if="includeExtension"
        v-slot:extension>
            <slot></slot>
        </template>
    </v-app-bar>
</template>

<style scoped>
</style>