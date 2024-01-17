<script setup>
import PageContent from "@/components/PageContent.vue";
import { homePage as page } from "@/references";
</script>

<template>
    <page-content
    :page-title="page.title"
    :finished="page.finished">
    </page-content>
</template>

<style scoped>
</style>