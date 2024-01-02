<script setup>
// library imports
import { ref } from "vue";
import { useDisplay } from "vuetify";

// project imports
import { sitePages } from "@/references";

const { mdAndUp } = useDisplay();
const navDrawer = ref(null);

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
    :rail="mdAndUp"
    :permanent="mdAndUp"
    color="surface">
        <v-list nav>
            <template
            v-for="(page, index) in pages"
            :key="index">
                <!--render link normally if page has no children-->
                <v-list-item
                v-if="!page.hasChildren"
                :title="page.title"
                :to="{name: page.to}">
                    <template v-slot:prepend>
                        <v-icon
                        :icon="page.icon"
                        color="accent-color">
                        </v-icon>
                    </template>
                </v-list-item>

                <!--if page has children, render a VListGroup-->
                <v-list-group
                v-else
                :value="page.title">
                    <!--parent page acts as dropdown; no link bound to element-->
                    <template
                    v-slot:activator="{ props }">
                        <v-list-item
                        v-bind="props"
                        :title="page.title">
                            <template v-slot:prepend>
                                <v-icon
                                :icon="page.icon"
                                color="accent-color">
                                </v-icon>
                            </template>
                        </v-list-item>
                    </template>

                    <!--child pages rendered with links-->
                    <v-list-item
                    v-for="(child, subindex) in page.children"
                    :key="subindex"
                    :title="child.title"
                    :to="{name: child.to}">
                        <template v-slot:prepend>
                            <v-icon
                            :icon="child.icon"
                            color="accent-color">
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