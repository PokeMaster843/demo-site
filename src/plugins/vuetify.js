// Vuetify
import { usePreferredColorScheme } from "@vueuse/core";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// project imports
import { defaultLight, defaultDark } from "@/themes";

const pref = usePreferredColorScheme();

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            defaultLight,
            defaultDark
        },
        defaultTheme: pref.light ? "defaultLight" : "defaultDark"
    }
});

export default vuetify;