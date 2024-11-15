// @ts-nocheck
import { registerThemePropertiesLoader } from "@ui5/webcomponents-base/dist/asset-registries/Themes.js";

const loadThemeProperties = async (themeName) => {
	switch (themeName) {
		case "sap_fiori_3": return (await import(/* webpackChunkName: "devbytesorcery-bs_webc_generic_tile-sap-fiori_3-parameters-bundle" */"../assets/themes/sap_fiori_3/parameters-bundle.css.json")).default;
		case "sap_horizon": return (await import(/* webpackChunkName: "devbytesorcery-bs_webc_generic_tile-sap-horizon-parameters-bundle" */"../assets/themes/sap_horizon/parameters-bundle.css.json")).default;
		case "sap_horizon_dark": return (await import(/* webpackChunkName: "devbytesorcery-bs_webc_generic_tile-sap-horizon_dark-parameters-bundle" */"../assets/themes/sap_horizon_dark/parameters-bundle.css.json")).default;
		case "sap_horizon_hcb": return (await import(/* webpackChunkName: "devbytesorcery-bs_webc_generic_tile-sap-horizon_hcb-parameters-bundle" */"../assets/themes/sap_horizon_hcb/parameters-bundle.css.json")).default;
		case "sap_horizon_hcw": return (await import(/* webpackChunkName: "devbytesorcery-bs_webc_generic_tile-sap-horizon_hcw-parameters-bundle" */"../assets/themes/sap_horizon_hcw/parameters-bundle.css.json")).default;
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
