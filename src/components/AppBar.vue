<script setup>
import { useDisplay } from "vuetify";
import { store } from "@/reactives";

const { mdAndUp } = useDisplay();

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
    <v-app-bar>
        <v-app-bar-nav-icon
        v-if="!mdAndUp"
        @click="store.toggleNavDrawer()"
        color="accent-color"
        data-cy="sm-menu">
        </v-app-bar-nav-icon>

        <v-toolbar-title
        data-cy="page-title">
            {{ pageTitle }}
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