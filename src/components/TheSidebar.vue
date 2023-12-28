<script setup>
import { sitePages, currentPage, navDrawer } from "@/references";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

defineProps({
    pages: {
        type: Object,
        default: sitePages.value
    }
});
</script>

<template>
    <v-navigation-drawer
    location="left"
    v-model="navDrawer"
    expand-on-hover
    :rail="!mobile"
    :permanent="!mobile"
    color="surface">
        <v-list nav>
            <template
            v-for="(page, index) in pages"
            :key="index">
                <v-list-item
                v-if="!page.hasChildren"
                :title="page.title"
                :to="{name: page.to}"
                @click="currentPage = page">
                    <template v-slot:prepend>
                        <v-icon
                        :icon="page.icon"
                        color="icon-color">
                        </v-icon>
                    </template>
                </v-list-item>

                <v-list-group
                v-else
                :value="page.title">
                    <!--parent page acts as dropdown-->
                    <template
                    v-slot:activator="{ props }">
                        <v-list-item
                        v-bind="props"
                        :title="page.title">
                            <template v-slot:prepend>
                                <v-icon
                                :icon="page.icon"
                                color="icon-color">
                                </v-icon>
                            </template>
                        </v-list-item>
                    </template>

                    <!--child pages-->
                    <v-list-item
                    v-for="(child, subindex) in page.children"
                    :key="subindex"
                    :title="child.title"
                    :to="{name: child.to}"
                    @click="currentPage = page">
                        <template v-slot:prepend>
                            <v-icon
                            :icon="child.icon"
                            color="icon-color">
                            </v-icon>
                        </template>
                    </v-list-item>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
</style>