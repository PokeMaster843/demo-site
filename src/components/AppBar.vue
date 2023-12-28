<script setup>
import { navDrawer } from "@/references";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

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
        v-if="mobile"
        @click="navDrawer = !navDrawer"
        color="icon-color">
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