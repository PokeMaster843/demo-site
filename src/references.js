import { ref } from "vue";

function createPage(title="", icon="", to="", hasChildren=false, children=[]) {
    return {
        title: title,
        icon: icon,
        to: to,
        hasChildren: hasChildren,
        children: children
    };
}

function createChildPage(title="", to="") {
    return {
        title: title,
        to: to,
        icon: "mdi-circle-small"
    };
}

const   homePage = createPage(          "Home",              "mdi-home",   "home");
const  aboutPage = createPage(      "About Me",       "mdi-information",  "about");
const whyVuePage = createPage(   "Why Vue.js?",             "mdi-vuejs", "whyvue");
const resumePage = createPage(        "Resumé",      "mdi-file-account", "resume");
const  demosPage = createPage("Demonstrations", "mdi-application-array",  "demos", true, [
    createChildPage("Demo 1", "demos"),
    createChildPage("Demo 2", "demos"),
    createChildPage("Demo 3", "demos")
]);
const currentPage = ref(homePage);
const sitePages = ref([
    homePage,
    aboutPage,
    whyVuePage,
    resumePage,
    demosPage
]);

function createCarouselItem(imgSrc, desc) {
    return {
        src: imgSrc,
        desc: desc
    }
}

const placeholderSrc = "https://cdn.vuetifyjs.com/images/parallax/material.jpg";
const bsCarousel = createCarouselItem(placeholderSrc, "Beat Saber description");
const mathCarousel = createCarouselItem(placeholderSrc, "Hobby mathematics description");
const codeCarousel = createCarouselItem(placeholderSrc, "Hobby coding description");
const aboutMeCarousel = ref([
    bsCarousel,
    mathCarousel,
    codeCarousel
]);

const carouselWidth = ref(500);
const carouselHeight = ref(300);

const clicked = ref(true);
const navDrawer = ref(null);

export {
    homePage,
    aboutPage,
    whyVuePage,
    resumePage,
    demosPage,
    currentPage,
    sitePages,

    aboutMeCarousel,
    carouselWidth,
    carouselHeight,

    clicked,
    navDrawer
};