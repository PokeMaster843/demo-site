<script setup>
// project imports
import TheSidebar from "@/components/TheSidebar.vue";
</script>

<template>
    <v-layout style="color: rgb(var(--v-theme-invert));">
        <the-sidebar></the-sidebar>

        <router-view></router-view>
    </v-layout>
</template>

<style scoped>
</style>