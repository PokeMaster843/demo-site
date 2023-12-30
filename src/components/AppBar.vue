<script setup>
import { useDisplay } from "vuetify";
import { navDrawer } from "@/references";

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
        @click="navDrawer = !navDrawer"
        color="accent-color">
        </v-app-bar-nav-icon>

        <v-toolbar-title>
            <span>
                {{ pageTitle }}
            </span>
        </v-toolbar-title>

        <template v-if="includeExtension" v-slot:extension>
            <slot></slot>
        </template>
    </v-app-bar>
</template>

<style scoped>
</style>