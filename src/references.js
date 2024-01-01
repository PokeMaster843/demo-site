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
    createChildPage("Demo 1", "demoA"),
    createChildPage("Demo 2", "demoB"),
    createChildPage("Demo 3", "demoC")
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

const aspectRatio = 16 / 9;

function carouselHeight(width) {
    // if xs or sm screen, only adjust by scrollbar; on larger screens, also adjust by 56px sidebar
    let adjustedWidth = width < 960 ? (width - 10) : (width - 66);
    let occupiedCols = width < 600 ? 1 : (width < 960 ? (7 / 12) : (5 / 12));
    return adjustedWidth * occupiedCols / aspectRatio;
}

function createInfoSection(name, title) {
    return {
        name: name,
        title: title
    };
}

const demoA = ref([
    createInfoSection("detailsA", "Details A"),
    createInfoSection("detailsB", "Details B"),
    createInfoSection("detailsC", "Details C"),
    createInfoSection("detailsD", "Details D"),
    createInfoSection("detailsE", "Details E")
]);

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
    carouselHeight,

    demoA,

    aspectRatio,
    clicked,
    navDrawer
};