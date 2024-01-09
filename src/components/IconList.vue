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
</script>

<template>
    <v-expand-transition>
        <v-card
        color="#00000000"
        v-show="expanded"
        flat>
            <div
            class="d-flex flex-column">
                <slot></slot>
            </div>
        </v-card>
    </v-expand-transition>

    <div
    @click.stop>
        <slot
        name="activator"
        :props="{ onClick: () => { expanded = !expanded; } }"></slot>
    </div>
</template>

<style scoped>
</style>