<script setup>
import { useThemeStore } from '@/stores/theme';

const store = useThemeStore();

defineProps({
    title: {
        type: String,
        required: true
    },
    to: {
        type: [Object, String],
        default: null
    },
    icon: {
        type: String,
        default: "mdi-circle-small"
    }
});
</script>

<template>
    <v-list-item
    v-if="to === null"
    :title="title">
        <template v-slot:prepend>
            <v-icon
            :icon="icon"
            :color="store.color">
            </v-icon>
        </template>
    </v-list-item>

    <v-list-item
    v-else
    :title="title"
    :to="to">
        <template v-slot:prepend>
            <v-icon
            :icon="icon"
            :color="store.color">
            </v-icon>
        </template>
    </v-list-item>
</template>

<style scoped>
</style>