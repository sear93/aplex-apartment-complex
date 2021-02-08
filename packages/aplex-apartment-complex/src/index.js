import React from "react";
import App from './components/App'
import menuHandler from "./components/handlers/menuHandler";
import acfOptionsHandler from "./components/handlers/acfOptionsHandler";

export default {
    name: "aplex-apartment-complex",
    roots: {
        theme: App
    },
    state: {
        theme: {
            isMenuOpen: false,
            menuUrl: 'header-menu',
            optionsPageId: 'headless-settings',

        }
    },
    actions: {
        theme: {
            beforeSSR: async ({state, actions}) => {
                await Promise.all([
                    actions.source.fetch(`/menu/${state.theme.menuUrl}/`),
                    actions.source.fetch("acf-options-page"),
                ])
            },
        }
    },
    libraries: {
        source: {
            handlers: [
                menuHandler,
                acfOptionsHandler
            ],
        },
    },
};
