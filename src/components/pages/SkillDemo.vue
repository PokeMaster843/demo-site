<script setup>
import PageContent from "@/components/PageContent.vue";
import { demosPage } from "@/references";
</script>

<template>
    <page-content :page-title="demosPage.title">
        <router-view></router-view>
    </page-content>
</template>

<style scoped>
</style>