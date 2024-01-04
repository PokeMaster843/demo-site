import colors from "vuetify/lib/util/colors";

function mixLight() {
    return {
        dark: false,
        colors: {
            primary: "#607d8b",
            secondary: "#9e9e9e",
            surface: "#ffffff",
            "surface-variant": "#d1d1d1",
            invert: "#121212",

            // accent colors
            default: "#000000",
            amber: colors.amber.darken3,
            teal: colors.teal.darken3,
            indigo: colors.indigo.darken3,

            highlight: "#555555"
        }
    };
}

function mixDark() {
    return {
        dark: true,
        colors: {
            "surface-variant": "#2e2e2e",
            invert: "#ededed",

            // accent colors
            default: "#ffffff",
            amber: colors.amber.lighten2,
            teal: colors.teal.lighten2,
            indigo: colors.indigo.lighten2,

            highlight: "#aaaaaa"
        }
    };
}

const defaultLight = mixLight();
const defaultDark = mixDark();

const accentColors = [
    "default",
    "amber",
    "teal",
    "indigo"
];

export {
    defaultLight,
    defaultDark,
    accentColors
};