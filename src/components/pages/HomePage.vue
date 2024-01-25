<script setup>
import PageContent from "@/components/PageContent.vue";
import { usePageStore } from "@/stores/page";

const store = usePageStore();
</script>

<template>
    <page-content
    :page-title="store.homePage.title"
    :finished="store.homePage.finished">
    </page-content>
</template>

<style scoped>
</style>