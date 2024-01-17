<script setup>
// library imports
import { useDisplay } from "vuetify";

// project imports
import { sitePages } from "@/references";
import { store } from "@/reactives";
import PageLink from "@/components/PageLink.vue";

const { mdAndUp } = useDisplay();

defineProps({
    pages: {
        type: Array,
        default: sitePages.value
    }
});
</script>

<template>
    <v-navigation-drawer
    location="left"
    v-model="store.navDrawer"
    expand-on-hover
    :rail="mdAndUp"
    :permanent="mdAndUp"
    color="surface"
    data-cy="nav-drawer">
        <v-list nav>
            <template
            v-for="(page, index) in pages"
            :key="index">
                <!--render link normally if page has no children-->
                <page-link
                v-if="!page.hasChildren"
                :title="page.title"
                :to="{name: page.to}"
                :finished="page.finished"
                :icon="page.icon"
                :data-cy="'page-link-' + page.to">
                </page-link>

                <!--if page has children, render a VListGroup-->
                <v-list-group
                v-else
                :value="page.title">
                    <!--parent page acts as dropdown; no link bound to element-->
                    <template
                    v-slot:activator="{ props }">
                        <page-link
                        v-bind="props"
                        :title="page.title"
                        :icon="page.icon"
                        :data-cy="'parent-page-' + page.to">
                        </page-link>
                    </template>

                    <!--child pages rendered with links-->
                    <page-link
                    v-for="(child, subindex) in page.children"
                    :key="subindex"
                    :title="child.title"
                    :to="{name: child.to}"
                    :finished="page.finished"
                    :data-cy="'child-link-' + child.to">
                    </page-link>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
</style>