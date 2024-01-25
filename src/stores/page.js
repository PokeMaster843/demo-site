// library imports
import { defineStore } from "pinia";

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
function createPage(title="", icon="", to="", finished=true, hasChildren=false, children=[]) {
    return {
        title: title,
        icon: icon,
        to: to,
        finished: finished,
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
function createChildPage(title="", to="", finished=true, sections=[]) {
    return {
        title: title,
        to: to,
        finished: finished,
        icon: "mdi-circle-small",
        sections: sections
    };
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

const   homePage = createPage(          "Home",              "mdi-home",   "home", false);
const  aboutPage = createPage(      "About Me",       "mdi-information",  "about", false);
const whyVuePage = createPage(   "Why Vue.js?",             "mdi-vuejs", "whyvue", false);
const resumePage = createPage(        "Resumé",      "mdi-file-account", "resume", false);

const demoA = createChildPage("Demo A", "demoA", false, [
    createInfoSection("detailsA", "Details A"),
    createInfoSection("detailsB", "Details B"),
    createInfoSection("detailsC", "Details C"),
    createInfoSection("detailsD", "Details D"),
    createInfoSection("detailsE", "Details E")
]);
const demoB = createChildPage("Demo B", "demoB", false, [
    createInfoSection("detailsA", "Details A"),
    createInfoSection("detailsB", "Details B"),
    createInfoSection("detailsC", "Details C"),
    createInfoSection("detailsD", "Details D"),
    createInfoSection("detailsE", "Details E")
]);
const demoC = createChildPage("Demo C", "demoC", false, [
    createInfoSection("detailsA", "Details A"),
    createInfoSection("detailsB", "Details B"),
    createInfoSection("detailsC", "Details C"),
    createInfoSection("detailsD", "Details D"),
    createInfoSection("detailsE", "Details E")
]);
const  demosPage = createPage("Demonstrations", "mdi-application-array",  "demos", false, true, [
    demoA,
    demoB,
    demoC
]);

export {
    createPage,
    createChildPage,
    createInfoSection
};

export const usePageStore = defineStore("page", {
    state: () => ({
        navDrawer: null,

        homePage: {
            ...homePage,
            models: {}
        },
        aboutPage: {
            ...aboutPage,
            models: {
                hobbyCarousel: null,
            }
        },
        whyVuePage: {
            ...whyVuePage,
            models: {}
        },
        resumePage: {
            ...resumePage,
            models: {
                appBarTabs: null
            }
        },
        demosPage: {
            ...demosPage,
            models: {}
        },

        demoA: {
            ...demoA,
            models: {}
        },
        demoB: {
            ...demoB,
            models: {}
        },
        demoC: {
            ...demoC,
            models: {}
        },

        sitePages: [
            homePage,
            aboutPage,
            whyVuePage,
            resumePage,
            demosPage
        ]
    }),

    getters: {},

    actions: {
        toggleNavDrawer() {
            this.navDrawer = !this.navDrawer;
        }
    }
});