<script setup>
import PageContent from "@/components/PageContent.vue";
import { resumePage as page } from "@/references";
</script>

<template>
    <page-content
    :page-title="page.title"
    :finished="page.finished"
    include-extension>
        <template #tabs>
            <v-tab value="education">Education</v-tab>
            <v-tab value="skills">Skills</v-tab>
            <v-tab value="experience">Experience</v-tab>
            <v-tab value="other">Other</v-tab>
        </template>

        <template #window>
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
        </template>
    </page-content>
</template>

<style scoped>
</style>