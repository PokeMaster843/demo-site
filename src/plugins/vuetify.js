// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// project imports
import { defaultLight, redLight, greenLight, blueLight, defaultDark, redDark, greenDark, blueDark } from "@/themes";

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            defaultLight,
            redLight,
            greenLight,
            blueLight,
            defaultDark,
            redDark,
            greenDark,
            blueDark
        },
        defaultTheme: "defaultDark"
    }
});

export default vuetify;