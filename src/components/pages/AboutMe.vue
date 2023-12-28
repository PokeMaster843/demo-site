<script setup>
import PageContent from "@/components/PageContent.vue";
import photoSelf from "@/assets/photo-self.jpg";
import { aboutPage } from "@/references";
</script>

<template>
    <page-content :page-title="aboutPage.title">
        <v-img
        :src="photoSelf"
        width="200"
        style="border-radius: 50%;">
        </v-img>
    </page-content>
</template>

<style scoped>
</style>