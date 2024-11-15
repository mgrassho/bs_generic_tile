// @ts-nocheck
import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

const loadThemeProperties = async (themeName) => {
	switch (themeName) {
		case "sap_fiori_3": return (await fetch(new URL("../assets/themes/sap_fiori_3/parameters-bundle.css.json", import.meta.url))).json();
		case "sap_horizon": return (await fetch(new URL("../assets/themes/sap_horizon/parameters-bundle.css.json", import.meta.url))).json();
		case "sap_horizon_dark": return (await fetch(new URL("../assets/themes/sap_horizon_dark/parameters-bundle.css.json", import.meta.url))).json();
		case "sap_horizon_hcb": return (await fetch(new URL("../assets/themes/sap_horizon_hcb/parameters-bundle.css.json", import.meta.url))).json();
		case "sap_horizon_hcw": return (await fetch(new URL("../assets/themes/sap_horizon_hcw/parameters-bundle.css.json", import.meta.url))).json();
		default: throw "unknown theme"
	}
};

const loadAndCheck = async (themeName) => {
	const data = await loadThemeProperties(themeName);
	if (typeof data === "string" && data.endsWith(".json")) {
		throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
	}
	return data;
};

["sap_fiori_3", "sap_horizon", "sap_horizon_dark", "sap_horizon_hcb", "sap_horizon_hcw"]
  .forEach(themeName => registerThemePropertiesLoader("@devbytesorcery/bs_webc_generic_tile", themeName, loadAndCheck));
