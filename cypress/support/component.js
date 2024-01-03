// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import vuetify from "@/plugins/vuetify";

// VueRouter
import { createMemoryHistory, createRouter } from "vue-router";

// Pinia
import { createPinia } from "pinia";

import { mount } from "cypress/vue";
import { h } from "vue";
import { VLayout } from "vuetify/components/VLayout";

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: null
        },

        {
            path: "/a",
            name: "a",
            component: null,
            children: [
                {
                    path: "b",
                    name: "b",
                    component: null
                }
            ]
        }
    ]
});

const pinia = createPinia();

Cypress.Commands.add('mount', (component, options = {}) => {
    return mount(() => h(VLayout, {}, [h(component, options.props || {}, options.slots || {})]), {
        global: {
            stubs: {
                transition: false
            },
            plugins: [
                vuetify,
                router,
                pinia
            ]
        }
    });
});
// Example use:
// cy.mount(MyComponent)