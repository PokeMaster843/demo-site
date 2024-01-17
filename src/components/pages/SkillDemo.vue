<script setup>
import PageContent from "@/components/PageContent.vue";
import { demosPage as page } from "@/references";
</script>

<template>
    <page-content
    :page-title="page.title"
    :finished="finished">
        <router-view></router-view>
    </page-content>
</template>

<style scoped>
</style>