<script setup>
import TheSidebar from "@/components/TheSidebar.vue";
</script>

<template>
    <v-layout style="color: rgb(var(--v-theme-invert));">
        <the-sidebar></the-sidebar>

        <router-view></router-view>
    </v-layout>
</template>

<style scoped>
.notExpanded {
    rotate: 180deg;
    transition: rotate 0.2s;
}

.expanded {
    rotate: 360deg;
    transition: rotate 0.2s;
}

.subpage {
    text-align: center;
    width: 66%;
    margin-left: 33%;
}
</style>