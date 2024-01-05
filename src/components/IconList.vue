<script setup>
// eslint-disable-next-line no-undef
const expanded = defineModel();

defineProps({
    itemCount: {
        type: Number,
        required: true
    }
});
defineEmits(["update:expanded"]);
</script>

<template>
    <div class="d-flex flex-column">
        <div
        class="list-item"
        :class="{expanded: expanded, contracted: !expanded}"
        v-for="i in itemCount"
        :key="i"
        :style="'--n:' + i">
            <slot :name="i"></slot>
        </div>
    </div>

    <div
    @click="expanded = !expanded"
    @click.stop="$emit('update:expanded', expanded)">
        <slot name="activator"></slot>
    </div>
</template>

<style scoped>

.expanded:nth-child(n) {
    translate: 0;
    transition-duration: calc(0.067s * ((v-bind(itemCount) + 1) - var(--n)));
}

.contracted:nth-child(n) {
    translate: 0px calc((100%) * ((v-bind(itemCount) + 1) - var(--n)));
    transition-duration: 0.2s;
}
</style>