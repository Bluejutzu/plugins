/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Margins } from "@utils/margins";
import { Button, Card, Forms, showToast } from "@webpack/common";

export function SettingsComponent() {
    let text: string;
    return (
        <>
            <Card>
                <Forms.FormTitle>Form Title</Forms.FormTitle>
                <Button color={Button.Colors.LINK} onClick={() => showToast("Toggled Button", 1)} className={Margins.bottom16}>
                    Link
                </Button>
                <Button color={Button.Colors.RED} onClick={() => showToast("Toggled Button", 1)} className={Margins.bottom16}>
                    Red
                </Button>
                <Button color={Button.Colors.BRAND_NEW} onClick={() => showToast("Toggled Button", 1)} className={Margins.bottom16}>
                    Brand New
                </Button>
                <Button color={Button.Colors.TRANSPARENT} onClick={() => showToast("Toggled Button", 1)} className={Margins.bottom16}>
                    Transparent
                </Button>
            </Card >
        </>
    );
}
