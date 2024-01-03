// library imports
import { ref } from "vue";

/**
 * Creates a Page object; used in rendering links for each page, and
 * child pages if applicable.
 * 
 * @param {String} title 
 * @param {String} icon 
 * @param {String} to 
 * @param {Boolean} hasChildren 
 * @param {Array} children 
 * @returns Page object
 */
function createPage(title="", icon="", to="", hasChildren=false, children=[]) {
    return {
        title: title,
        icon: icon,
        to: to,
        hasChildren: hasChildren,
        children: children
    };
}

/**
 * Creates a ChildPage object; used in rendering child links of a parent
 * page.
 * 
 * @param {String} title 
 * @param {String} to 
 * @returns ChildPage object
 */
function createChildPage(title="", to="") {
    return {
        title: title,
        to: to,
        icon: "mdi-circle-small"
    };
}

// individual site Pages
const   homePage = createPage(          "Home",              "mdi-home",   "home");
const  aboutPage = createPage(      "About Me",       "mdi-information",  "about");
const whyVuePage = createPage(   "Why Vue.js?",             "mdi-vuejs", "whyvue");
const resumePage = createPage(        "Resumé",      "mdi-file-account", "resume");
const  demosPage = createPage("Demonstrations", "mdi-application-array",  "demos", true, [
    createChildPage("Demo 1", "demoA"),
    createChildPage("Demo 2", "demoB"),
    createChildPage("Demo 3", "demoC")
]);
// array of all site Pages
const sitePages = ref([
    homePage,
    aboutPage,
    whyVuePage,
    resumePage,
    demosPage
]);

/**
 * Creates a CarouselItem object; used for rendering VCarouselItem components
 * and a relevant desription within the "About Me" Page.
 * @param {String} imgSrc 
 * @param {String} desc 
 * @returns CarouselItem object
 */
function createCarouselItem(imgSrc, desc) {
    return {
        src: imgSrc,
        desc: desc
    }
}

const placeholderSrc = "https://cdn.vuetifyjs.com/images/parallax/material.jpg";
// individual "About Me" CarouselItems
const bsCarousel = createCarouselItem(placeholderSrc, "Beat Saber description");
const mathCarousel = createCarouselItem(placeholderSrc, "Hobby mathematics description");
const codeCarousel = createCarouselItem(placeholderSrc, "Hobby coding description");
// array of all "About Me" CarouselItems
const aboutMeCarousel = ref([
    bsCarousel,
    mathCarousel,
    codeCarousel
]);

// aspect ratio for CarouselItems
const aspectRatio = 16 / 9;

/**
 * Returns an approximate height of the VCarousel component in the
 * "About Me" Page, given the current viewport width.
 * @param {Number} width 
 * @returns Approximate height of VCarousel
 */
function carouselHeight(width) {
    // if xs or sm screen, only adjust by scrollbar; on larger screens, also adjust by 56px sidebar
    let adjustedWidth = width < 960 ? (width - 10) : (width - 66);
    let occupiedCols = width < 600 ? 1 : (width < 960 ? (7 / 12) : (5 / 12));
    return adjustedWidth * occupiedCols / aspectRatio;
}

/**
 * Creates an InfoSection object; used for rendering detailed
 * information sections on individual DemoPages.
 * 
 * @param {String} name 
 * @param {String} title 
 * @returns InfoSection object
 */
function createInfoSection(name, title) {
    return {
        name: name,
        title: title
    };
}

// InfoSections for demoA
const demoA = ref([
    createInfoSection("detailsA", "Details A"),
    createInfoSection("detailsB", "Details B"),
    createInfoSection("detailsC", "Details C"),
    createInfoSection("detailsD", "Details D"),
    createInfoSection("detailsE", "Details E")
]);

export {
    createPage,
    createChildPage,
    homePage,
    aboutPage,
    whyVuePage,
    resumePage,
    demosPage,
    sitePages,

    createCarouselItem,
    aboutMeCarousel,
    carouselHeight,

    createInfoSection,
    demoA,

    aspectRatio
};