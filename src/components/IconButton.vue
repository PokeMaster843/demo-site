<script setup>
// library imports
import { inject } from "vue";

// project imports

const selected = inject("selected", null);

defineProps({
    icon: {
        type: String,
        default: ""
    },
    iconColor: {
        type: String,
        default: undefined
    },
    size: {
        type: Number,
        default: 56
    },
    color: {
        type: String,
        default: "surface"
    },
    value: {
        type: String,
        default: null
    },
    activator: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <v-btn
    :class="{selected: selected === value && value !== null}"
    class="ma-2"
    :icon="icon"
    :size="size"
    :color="color"
    :value="value"
    @click="if(!activator) { selected = value; }"
    data-cy="icon-btn">
        <template v-slot:default>
            <v-icon
            v-if="iconColor !== undefined"
            :color="iconColor"></v-icon>
        </template>
    </v-btn>
</template>

<style scoped>
.selected {
    box-shadow: 0px 0px 4px 4px rgb(var(--v-theme-highlight)) !important;
}
</style>