<script setup lang="jsx">
import PageContent from "@/components/PageContent.vue";
import { usePageStore } from "@/stores/page";

const store = usePageStore();

const appBarTabs = [
    {
        title: "Education",
        content: <>
            <v-card>
                <div>Test card education</div>
            </v-card>
        </>
    },
    {
        title: "Skills",
        content: <>
            <v-card>
                <div>Test card skills</div>
            </v-card>
        </>
    },
    {
        title: "Experience",
        content: <>
            <v-card>
                <div>Test card experience</div>
            </v-card>
        </>
    },
    {
        title: "Other",
        content: <>
            <v-card>
                <div>Test card other</div>
            </v-card>
        </>
    }
];
</script>

<template>
    <page-content
    :page-title="store.resumePage.title"
    :finished="store.resumePage.finished"
    v-model:tabs="store.resumePage.models.appBarTabs"
    include-extension>
        <template #tabs>
            <v-tab
            v-for="(item, index) in appBarTabs"
            :key="index"
            :value="index">
                {{ item.title }}
            </v-tab>
        </template>

        <template #window>
            <v-window-item
            v-for="(item, index) in appBarTabs"
            :key="index"
            :value="index">
                <component :is="item.content"></component>
            </v-window-item>
        </template>
    </page-content>
</template>

<style scoped>
</style>