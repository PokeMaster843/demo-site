<script setup>
// library imports

// project imports
import PageContent from "@/components/PageContent.vue";
import photoSelf from "@/assets/photo-self.jpg";
import photoMath from "@/assets/n_pendulum.png";
import { usePageStore } from "@/stores/page";

const store = usePageStore();

const hobbyCarousel = [
    {
        src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        desc:  "For the past 3 years, I have been completely and utterly obsessed with Beat Saber. It served as \
                my introduction to both VR and rhythm games, two things I now find very fascinating."
    },
    {
        src: photoMath,
        desc:  "Since I was a young child, I have loved mathematics and numbers. Rather than playing outside, \
                I would play with the world of mathematics. I simply followed the rabbit hole as far as my \
                curiosity took me. For example, my interest in making games led me to learn all about the \
                techniques behind 3D rendering, and my insatiable desire to understand led me to learn about \
                matrices and quaternions. Of course, I won't say I effectively understood them; I simply gained \
                enough understanding to use them in basic operations. My curiosity only grew from that point, \
                but as classes got more intensive in high school and college, I had less free time to spend on \
                this hobby. Despite this, the skills it built remain: problem solving, data analysis, and a fair \
                bit of intuition, to name a few."
    },
    {
        src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        desc:  "Coding/programming was a hobby of mine that developed out of my interest in making games. \
                In particular, my deep interest in Minecraft and making Minecraft mods led me to start learning \
                Java in middle school. Whenever I got home from school, I would hop on the computer and watch \
                YouTube tutorials covering the basics of the language. Little by little, the amount of code \
                I could write on my own increased. Eventually, I learned how to make Minecraft mods, my original \
                objective. During this journey, however, I discovered that I loved coding in general. When we \
                were eventually given Chromebooks in school, I taught myself JavaScript so I could do some \
                coding at school as well. In fact, that became my main interaction with coding. Furthermore, \
                my hobbies of coding and mathematics often overlapped, as most projects I worked on were things \
                like a double pendulum simulator, a 2D physics engine, or even Conway's game of life."
    }
];
</script>

<template>
    <page-content
    :page-title="store.aboutPage.title"
    :finished="store.aboutPage.finished">
        <v-row>
            <v-col>
            </v-col>
        </v-row>

        <v-row
        class="ml-n6 pl-3 bg-surface"
        align="center"
        style="clip-path: polygon(0 0, 80% 0%, 75% 100%, 0% 100%);">
            <v-col cols="3">
                <v-img
                class="rounded-circle ma-auto"
                width="auto"
                :src="photoSelf">
                </v-img>
            </v-col>

            <v-col cols="4">
                <div class="text-h6 text-md-h5 text-center font-italic">
                    "Hello, I'm John Knickerbocker! Welcome to my site!"
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
            </v-col>
        </v-row>

        <v-row
        class="mr-n6 pr-3 bg-surface"
        justify="end"
        style="clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 20% 100%);">
            <v-col cols="3">
                <v-carousel
                class="h-auto"
                v-model="store.aboutPage.models.hobbyCarousel"
                :show-arrows="false"
                hide-delimiters>
                    <v-carousel-item
                    v-for="(item, index) in hobbyCarousel"
                    :key="index"
                    :value="index">
                        <div
                        class="carousel-description-container custom-scrollbar text-body-2">
                            {{ item.desc }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-col>

            <v-col cols="5">
                <v-carousel
                class="h-auto"
                v-model="store.aboutPage.models.hobbyCarousel"
                show-arrows="hover"
                hide-delimiter-background>
                    <v-carousel-item
                    v-for="(item, index) in hobbyCarousel"
                    :key="index"
                    :value="index"
                    :src="item.src"
                    :aspect-ratio="16/9"
                    width="auto"
                    cover>
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