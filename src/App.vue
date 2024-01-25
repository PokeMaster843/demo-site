<script setup>
import { ref, onMounted } from "vue";

// project imports
import TheSidebar from "@/components/TheSidebar.vue";
import { useThemeStore } from "@/stores/theme";

const store = ref({
    color: "default"
});
onMounted(() => {
    store.value = useThemeStore();
});
</script>

<template>
    <v-defaults-provider
    :defaults="{
        VIcon: {
            color: store.color
        }
    }">
        <v-layout>
            <the-sidebar></the-sidebar>

            <router-view></router-view>
        </v-layout>
    </v-defaults-provider>
</template>

<style scoped>
</style>