<script setup>
// library imports
import { useDisplay } from "vuetify";

// project imports

const { xs } = useDisplay();

defineProps({
    sections: {
        type: Array,
        required: true
    },
    finished: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <v-row>
        <v-col
        order="2"
        order-sm="first"
        cols="12"
        sm="5">
            <div
            class="text-h4 text-md-h3 w-100">
                <slot name="title"></slot>
                <v-icon
                v-if="!finished"
                size="56"
                class="mx-4"
                color="warning"
                icon="mdi-hammer-wrench"
                title="This page is under construction.">
                </v-icon>
            </div>

            <div
            class="text-body-1">
                <slot name="desc"></slot>
            </div>
        </v-col>

        <v-spacer v-if="!xs"></v-spacer>

        <v-col
        order="1"
        order-sm="last"
        cols="12"
        sm="7"
        md="7"
        lg="5">
            <div
            class="text-body-1"
            style="height: 30vh; background-color: red;">
                <slot name="display"></slot>
            </div>
        </v-col>
    </v-row>

    <hr class="content-separator">

    <!--table of contents-->
    <v-row>
        <v-container style="margin: 0 !important;">
            <v-row>
                <v-col>
                    <div class="text-h5 text-md-h4">Sections</div>
                </v-col>
            </v-row>

            <v-row
            v-for="(section, index) in sections"
            :key="index">
                <v-btn
                :to="{hash: '#' + section.name}"
                variant="plain">
                    {{ section.title }}
                </v-btn>
            </v-row>
        </v-container>
    </v-row>

    <!--actual contents-->
    <v-row
    v-for="(section, index) in sections"
    :key="index" align="center">
        <v-col cols="auto">
            <div
            class="text-h6 text-md-h5"
            :id="section.name">
                {{ section.title }}
            </div>
        </v-col>

        <v-col>
            <hr class="content-separator section-separator">
        </v-col>

        <v-col cols="12">
            <div class="text-body-2">
                <slot :name="section.name"></slot>
            </div>
        </v-col>
    </v-row>
</template>

<style scoped>
.content-separator {
    color: rgb(var(--v-theme-accent-color));
    background-color: rgb(var(--v-theme-accent-color));
}

.section-separator {
    margin: 0 !important;
}
</style>