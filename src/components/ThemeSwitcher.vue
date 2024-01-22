<script setup>
// library imports
import { ref } from "vue";
import { useTheme, useDisplay } from "vuetify";

// project imports
import { accentColors } from "@/themes";
import { useThemeStore } from "@/stores/theme";
import IconButton from "@/components/IconButton.vue";
import IconList from "@/components/IconList.vue";
import ModalPopup from "@/components/ModalPopup.vue";

const theme = useTheme();
const { xs } = useDisplay();
const store = useThemeStore();
const popup = ref(false);
const customColor = ref(null);

/**
 * Switches theme accent color, preserving light/dark state.
 * @param {String} newColor 
 */
function switchColor(newColor) {
    store.closeList();
    store.setColor(newColor);
}

/**
 * Toggles between light/dark themes, preserving selected accent color.
 */
 function toggleDark() {
    store.toggleDark();
    theme.global.name.value = store.dark ? "defaultDark" : "defaultLight";
}
</script>

<template>
    <div
    class="d-flex flex-column"
    style="position: fixed; bottom: 2em; right: 2em;">
        <icon-list
        v-model:expanded="store.listExpanded"
        v-model:selected="store.color"
        data-cy="theme-colors-list">
            <template #activator="{ props }">
                <icon-button
                v-bind="props"
                icon="mdi-eyedropper"
                color="surface"
                :icon-color="store.color"
                title="Select accent color"
                activator
                data-cy="theme-colors-list--activator">
                </icon-button>
            </template>

            <template
            v-if="!xs">
                <modal-popup
                v-model:show="popup"
                close-btn-text="Cancel"
                submit-btn-text="Use Color"
                @submit="switchColor(customColor)"
                rounded>
                    <template v-slot:activator="{ props }">
                        <icon-button
                        v-bind="props"
                        icon="mdi-select-color"
                        :icon-color="store.currentCustomValue"
                        :value="store.currentCustomValue"
                        title="Select custom accent color"
                        activator
                        data-cy="theme-colors-list--custom-select">
                        </icon-button>
                    </template>

                    <v-color-picker
                    :modes="['hex']"
                    v-model:model-value="customColor"
                    elevation="0"
                    data-cy="modal-color-picker">
                    </v-color-picker>
                </modal-popup>
            </template>
            
            <icon-button
            v-for="(color, index) in accentColors"
            :key="index"
            :color="color"
            :value="color">
            </icon-button>
        </icon-list>

        <!--theme light/dark toggle-->
        <icon-button
        icon="mdi-theme-light-dark"
        title="Toggle dark mode"
        @click="toggleDark()"
        :icon-color="store.color"
        activator
        data-cy="theme-toggle-dark">
        </icon-button>
    </div>
</template>

<style scoped>
</style>