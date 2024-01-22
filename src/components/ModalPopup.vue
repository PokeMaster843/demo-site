<script setup>
// library imports

// project imports
import { useThemeStore } from "@/stores/theme";

const store = useThemeStore();

// eslint-disable-next-line no-undef
const show = defineModel("show");

defineProps({
    width: {
        type: String,
        default: "fit-content"
    },
    minWidth: {
        type: String,
        default: "200px"
    },
    maxWidth: {
        type: String,
        default: "900px"
    },
    rounded: {
        type: Boolean,
        default: false
    },

    color: {
        type: String,
        default: "surface"
    },

    closeBtnText: {
        type: String,
        default: "Close"
    },

    submitBtnText: {
        type: String,
        default: "Ok"
    },

    btnColor: {
        type: String,
        default: "on-surface"
    },
    btnDensity: {
        type: String,
        default: "default"
    },
    btnSize: {
        type: String,
        default: "default"
    },
    btnVariant: {
        type: String,
        default: "plain"
    },
    btnRounded: {
        type: String,
        default: "xs"
    },
    btnRipple: {
        type: Boolean,
        default: false
    },
});
defineEmits(['close', 'submit']);
</script>

<template>
    <div
    @click.stop>
        <slot
        name="activator"
        :props="{ onClick: () => { show = !show; } }"></slot>
    </div>

    <teleport to="body">
        <div
        class="modal-mask"
        :class="{show: show, hidden: !show}"
        @click.stop="show = !show">
            <v-container
            class="popup"
            :class="{'rounded-xl': rounded}"
            :style="{'background-color': store.cssColor(color)}"
            @click.stop
            fluid>
                <v-row>
                    <v-col>
                        <slot></slot>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="auto">
                        <v-btn
                        :color="btnColor"
                        :density="btnDensity"
                        :size="btnSize"
                        :rounded="btnRounded"
                        :ripple="btnRipple"
                        :variant="btnVariant"
                        @click="$emit('close'); show = !show;"
                        data-cy="modal-close-btn">
                            {{ closeBtnText }}
                        </v-btn>
                    </v-col>

                    <v-spacer></v-spacer>

                    <v-col cols="auto">
                        <v-btn
                        :color="btnColor"
                        :density="btnDensity"
                        :size="btnSize"
                        :rounded="btnRounded"
                        :ripple="btnRipple"
                        :variant="btnVariant"
                        @click="$emit('submit'); show = !show;"
                        data-cy="modal-submit-btn">
                            {{ submitBtnText }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </teleport>
</template>

<style scoped>
@keyframes hide-modal {
    from {
        opacity: 1;
        display: block;
        visibility: visible;
    }
    to {
        opacity: 0;
        display: none;
        visibility: hidden;
    }
}

@keyframes show-modal {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes hide-popup {
    from {
        translate: 0;
    }
    to {
        translate: 0px -60vh;
    }
}

@keyframes show-popup {
    from {
        translate: 0px -60vh;
    }
    to {
        translate: 0;
    }
}

.modal-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background-color: rgba(0,0,0,0.5);
    display: none;
    visibility: hidden;

    .popup {
        position: fixed;
        width: v-bind(width);
        min-width: v-bind(minWidth);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}

.hidden {
    animation: hide-modal 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;

    .popup {
        animation: hide-popup 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }
}

.show {
    display: block;
    visibility: visible;
    animation: show-modal 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;

    .popup {
        animation: show-popup 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    }
}
</style>