import type { StyleData } from "@ui5/webcomponents-base/dist/types.js";
import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

import defaultThemeBase from "@ui5/webcomponents-theming/dist/generated/themes/sap_horizon/parameters-bundle.css.js";
import defaultTheme from "./sap_horizon/parameters-bundle.css.js";

registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_horizon", async () => defaultThemeBase);
registerThemePropertiesLoader("mg_webc_generic_tile", "sap_horizon", async () => defaultTheme);

const styleData: StyleData = {packageName:"mg_webc_generic_tile",fileName:"themes/MgGenericTile.css.ts",content:`.root{display:inline-flex;align-items:center;justify-content:center;flex-direction:column;padding:0 2rem;color:var(--sapAvatar_6_TextColor);background-color:var(--sapAvatar_6_Background);border:2px solid var(--my-component-border-color);border-radius:.5rem;box-shadow:var(--sapContent_Shadow0);text-align:center;line-height:3rem;font-size:1.25rem;user-select:none;cursor:pointer}
`};
export default styleData;
	