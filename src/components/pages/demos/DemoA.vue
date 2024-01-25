<script setup>
// library imports

// project imports
import DemoPage from "@/components/DemoPage.vue";
import { usePageStore } from "@/stores/page";

const store = usePageStore();
</script>

<template>
    <demo-page
    :sections="store.demoA.sections"
    :finished="store.demoA.finished">
        <template #title>
            Demo Title
        </template>

        <template #desc>
            <template
            v-for="i in 15"
            :key="i">
                Brief description
            </template>
        </template>

        <template #display>
            Display for demo
        </template>

        <template #details>
            <template
            v-for="i in 15"
            :key="i">
                Detailed explanation
            </template>
        </template>

        <template #detailsA>
            <template
            v-for="i in 15"
            :key="i">
                Detailed explanation A
            </template>
        </template>

        <template #detailsB>
            <template
            v-for="i in 15"
            :key="i">
                Detailed explanation B
            </template>
        </template>

        <template #detailsC>
            <template
            v-for="i in 15"
            :key="i">
                Detailed explanation C
            </template>
        </template>

        <template #detailsD>
            <template
            v-for="i in 15"
            :key="i">
                Detailed explanation D
            </template>
        </template>

        <template #detailsE>
            <template
            v-for="i in 15"
            :key="i">
                Detailed explanation E
            </template>
        </template>
    </demo-page>
</template>

<style scoped>
</style>