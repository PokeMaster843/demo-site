import colors from "vuetify/lib/util/colors";

function mixLight(accentColor="#000000") {
    return {
        dark: false,
        colors: {
            primary: "#607d8b",
            secondary: "#9e9e9e",
            surface: "#ffffff",
            "surface-variant": "#d1d1d1",
            invert: "#121212",
            "icon-color": accentColor,
            "highlight": "#555555"
        }
    };
}

function mixDark(accentColor="#ffffff") {
    return {
        dark: true,
        colors: {
            "surface-variant": "#2e2e2e",
            invert: "#ededed",
            "icon-color": accentColor,
            "highlight": "#aaaaaa"
        }
    };
}

const defaultLight = mixLight();
const redLight = mixLight(colors.red.darken2);
const blueLight = mixLight(colors.blue.darken2);
const greenLight = mixLight(colors.green.darken2);
const defaultDark = mixDark();
const redDark = mixDark(colors.red.lighten2);
const blueDark = mixDark(colors.blue.lighten2);
const greenDark = mixDark(colors.green.lighten2);

const colorThemes = {
    "default": {
        name: "default",
        light: "#000000",
        dark: "#ffffff",
        selected: true
    },
    "red": {
        name: "red",
        light: colors.red.darken2,
        dark: colors.red.lighten2,
        selected: false
    },
    "green": {
        name: "green",
        light: colors.green.darken2,
        dark: colors.green.lighten2,
        selected: false
    },
    "blue": {
        name: "blue",
        light: colors.blue.darken2,
        dark: colors.blue.lighten2,
        selected: false
    },
};

export {
    colorThemes,
    defaultLight,
    redLight,
    greenLight,
    blueLight,
    defaultDark,
    redDark,
    greenDark,
    blueDark
};