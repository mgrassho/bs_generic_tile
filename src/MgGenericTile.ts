import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";

// Template
import MgGenericTileTemplate from "./generated/templates/MgGenericTileTemplate.lit.js";

// Styles
import MgGenericTileCss from "./generated/themes/MgGenericTile.css.js";

import { COUNT } from "./generated/i18n/i18n-defaults.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>mg-generic-tile</code> component is a demo component that displays some text.
 *
 * @constructor
 * @extends UI5Element
 * @public
 */
@customElement({
	tag: "mg-generic-tile",
	renderer: litRender,
	styles: MgGenericTileCss,
	template: MgGenericTileTemplate,
})
class MgGenericTile extends UI5Element {
	static i18nBundle: I18nBundle;

	static async onDefine() {
		MgGenericTile.i18nBundle = await getI18nBundle("mg_webc_generic_tile");
	}

	/**
	 * Defines the component count.
	 * @default 0
	 * @public
	 */
	@property({ type: Number })
	count = 0;

	onClick() {
		this.count++;
	}

	get counterText() {
		return MgGenericTile.i18nBundle.getText(COUNT);
	}
}

MgGenericTile.define();

export default MgGenericTile;
