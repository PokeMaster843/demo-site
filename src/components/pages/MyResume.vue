<script setup>
import { ref } from "vue";
import PageContent from "@/components/PageContent.vue";
import { resumePage } from "@/references";

const tab = ref(null);
</script>

<template>
    <page-content :page-title="resumePage.title" include-extension>
        <template #tabs>
            <v-tabs v-model="tab" align-tabs="title">
                <v-tab value="education">Education</v-tab>
                <v-tab value="skills">Skills</v-tab>
                <v-tab value="experience">Experience</v-tab>
                <v-tab value="other">Other</v-tab>
            </v-tabs>
        </template>

        <v-window v-model="tab">
            <v-window-item value="education">
                Talk about education here
            </v-window-item>

            <v-window-item value="skills">
                Talk about skills here
            </v-window-item>

            <v-window-item value="experience">
                Talk about experience with technologies (and work experience) here
            </v-window-item>

            <v-window-item value="other">
                Another tab
            </v-window-item>
        </v-window>
    </page-content>
</template>

<style scoped>
</style>