<script setup>
// library imports
import { useDisplay } from "vuetify";

// project imports
import PageContent from "@/components/PageContent.vue";
import photoSelf from "@/assets/photo-self.jpg";
import { useCarouselStore } from "@/stores/carousel";
import { aboutPage as page } from "@/references";

const store = useCarouselStore();
const { xs, width } = useDisplay();
</script>

<template>
    <page-content
    :page-title="page.title"
    :finished="page.finished">
        <!--TODO: make banner with image and text saying "Hello, I'm John Knickerbocker."-->
        <v-row>
            <v-col
            cols="12"
            sm="5"
            md="4"
            lg="3"
            style="text-align: center;">
                <v-img
                :src="photoSelf"
                style="border-radius: 50%; margin: auto;"
                :width="store.carouselHeight(width)-56">
                </v-img>

                <div
                class="text-subtitle-1"
                style="font-style: italic;">
                    Hello, I'm John Knickerbocker! Welcome to my site!
                    <template v-if="xs">
                        I hope the mobile/small-screen version is to your liking!
                    </template>
                </div>
            </v-col>

            <!--to avoid feeling of cramped screen, add some spacing between profile photo and rest of page on xs screens-->
            <v-col
            v-if="xs"
            cols="12">
                <div style="width: 100%; height: 10vh;"></div>
            </v-col>

            <v-spacer
            v-else>
            </v-spacer>

            <v-col
            order="last"
            order-md="2"
            cols="12"
            sm="12"
            md="3"
            lg="3">
                <v-carousel
                class="h-auto"
                v-model="store.carousel"
                :show-arrows="false"
                hide-delimiters>
                    <v-carousel-item
                    v-for="(item, index) in store.items"
                    :key="item"
                    :value="index">
                        <div
                        class="carousel-description-container custom-scrollbar"
                        :style="'max-height:' + store.carouselHeight(width) + 'px'">
                            <div
                            class="text-body-2"
                            v-if="store.carousel !== null">
                                <template v-for="i in 15" :key="i">
                                    {{ store.items[store.carousel].desc + ' ' }}
                                </template>
                            </div>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-col>

            <v-col
            order="3"
            cols="12"
            sm="7"
            md="5"
            lg="5">
                <v-carousel
                class="h-auto"
                v-model="store.carousel"
                show-arrows="hover"
                hide-delimiter-background>
                    <v-carousel-item
                    v-for="(item, index) in store.items"
                    :key="item"
                    :value="index"
                    :src="item.src"
                    width="100%"
                    :aspect-ratio="store.aspectRatio">
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <hr class="content-separator">

        <v-row>
            <v-col cols="auto">
                <div
                class="text-body-1">
                    Verbose and professional about me info goes here Verbose and professional about me info goes here Verbose and professional about me info goes here Verbose and professional about me info goes hereVerbose and professional about me info goes hereVerbose and professional about me info goes here Verbose and professional about me info goes here Verbose and professional about me info goes here Verbose and professional about me info goes here
                </div>
            </v-col>
        </v-row>
    </page-content>
</template>

<style scoped>
.content-separator {
    color: rgb(var(--v-theme-accent-color));
    background-color: rgb(var(--v-theme-accent-color));
}
.carousel-description-container {
    text-align: justify;
    overflow-y: auto;
}
</style>