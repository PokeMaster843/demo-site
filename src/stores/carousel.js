import { defineStore } from "pinia";

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

export const useCarouselStore = defineStore("carousel", {
    state: () => ({
        carousel: null,
        items: [
            createCarouselItem(placeholderSrc, "Beat Saber description"),
            createCarouselItem(placeholderSrc, "Hobby mathematics description"),
            createCarouselItem(placeholderSrc, "Hobby coding description")
        ],
        aspectRatio: 16 / 9
    }),
    getters: {},
    actions: {
        carouselHeight(width) {
            // if xs or sm screen, only adjust by scrollbar; on larger screens, also adjust by 56px sidebar
            let adjustedWidth = width < 960 ? (width - 10) : (width - 66);
            let occupiedCols = width < 600 ? 1 : (width < 960 ? (7 / 12) : (5 / 12));
            return adjustedWidth * occupiedCols / this.aspectRatio;
        }
    }
});