/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/* https://docs.vencord.dev/advanced/plugins/optionComponent/ */

import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

import { SettingsComponent } from "./components/index.tsx";

const settings = definePluginSettings({
    component: {
        type: OptionType.COMPONENT,
        description: "",
        component: () => {
            return (<> <SettingsComponent /> </>);
        }
    }
});

export default definePlugin({
    name: "SettingsComponent",
    description: "Made for Vencord Docs",
    authors: [Devs.Bluejutzu],
    settings: settings
});
