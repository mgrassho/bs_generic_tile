import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import customElement from "@ui5/webcomponents-base/dist/decorators/customElement.js";
import property from "@ui5/webcomponents-base/dist/decorators/property.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { getI18nBundle } from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import slot from "@ui5/webcomponents-base/dist/decorators/slot.js";

// Template
import BsGenericTileTemplate from "./generated/templates/BSGenericTileTemplate.lit.js";

// Styles
import BsGenericTileCss from "./generated/themes/BSGenericTile.css.js";

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code></code> component is a demo component that displays some text.
 *
 * @constructor
 * @extends UI5Element
 * @public
 */
@customElement({
	tag: "bs-generic-tile",
	renderer: litRender,
	styles: BsGenericTileCss,
	template: BsGenericTileTemplate,
})
class BsGenericTile extends UI5Element {
	static i18nBundle: I18nBundle;

	static async onDefine() {
		BsGenericTile.i18nBundle = await getI18nBundle("bs_webc_generic_tile");
	}

	/**
	 * Defines the headline of the component
	 * @default ""
	 * @public
	 */
	@property({ type: String })
	title = ""

	/**
	 * Defines the subtitle of the component
	 * @default ""
	 * @public
	 */
	@property({ type: String })
	subtitle = ""

	/**
	 * Defines the footer text of the tile
	 * @default ""
	 * @public
	 */
	@property({ type: String })
	footer = ""

	/**
	 * Defines the icon to be discplayed
	 * e.g. <ui5-icon type="Decorative" class="imageContent" name="employee"></ui5-icon>
	 * @public
	 */
	@slot({ type: HTMLElement })
    displayicon!: Array<HTMLElement>
}

BsGenericTile.define();

export default BsGenericTile;
