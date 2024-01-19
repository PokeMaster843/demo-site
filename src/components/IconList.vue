<!-- eslint-disable no-undef -->
<script setup>
// library imports
import { provide } from "vue";

const expanded = defineModel("expanded");
const selected = defineModel("selected");

provide("selected", selected);

document.body.addEventListener("click", () => {
    expanded.value = false;
});

defineProps({
    horizontal: {
        type: Boolean,
        default: false
    },
    reverse: {
        type: Boolean,
        default: false
    },
    activatorFirst: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div
    class="d-flex"
    :class="{
        'flex-row': horizontal,
        'flex-row-reverse': horizontal && activatorFirst,
        'flex-column': !horizontal,
        'flex-column-reverse': !horizontal && activatorFirst
    }"
    data-cy="icon-list-container">
        <v-expand-transition>
            <v-card
            color="#00000000"
            v-show="expanded"
            flat>
                <div
                class="d-flex"
                :class="{
                    'flex-row': horizontal,
                    'flex-row-reverse': horizontal && reverse,
                    'flex-column': !horizontal,
                    'flex-column-reverse': !horizontal && reverse
                }"
                data-cy="icon-list-items">
                    <slot></slot>
                </div>
            </v-card>
        </v-expand-transition>

        <div
        @click.stop
        data-cy="icon-list-activator">
            <slot
            name="activator"
            :props="{ onClick: () => { expanded = !expanded; } }"></slot>
        </div>
    </div>
</template>

<style scoped>
</style>