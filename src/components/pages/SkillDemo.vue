<script setup>
import PageContent from "@/components/PageContent.vue";
import { usePageStore } from "@/stores/page";

const store = usePageStore();
</script>

<template>
    <page-content
    :page-title="store.demosPage.title"
    :finished="store.demosPage.finished">
        <router-view></router-view>
    </page-content>
</template>

<style scoped>
</style>