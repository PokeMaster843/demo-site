<script setup>
// library imports

// project imports

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
    },
    finished: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <v-list-item
    v-if="to === null"
    :title="title"
    :prepend-icon="icon"
    data-cy="page-link">
    </v-list-item>

    <v-list-item
    v-else
    :title="title"
    :to="to"
    :prepend-icon="icon"
    data-cy="page-link">
        <template v-slot:append>
            <v-icon
            v-if="!finished"
            icon="mdi-hammer-wrench"
            color="warning"
            title="This page is not yet finished.">
            </v-icon>
        </template>
    </v-list-item>
</template>

<style scoped>
</style>