/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import type UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type BSGenericTile from "../../BSGenericTile.js";
import type { ClassMapValue } from "@ui5/webcomponents-base/dist/types.js";
	
function block0 (this: BSGenericTile, context: UI5Element, tags: string[], suffix: string | undefined) { return suffix ? html`<div class="generic_tile"><div class="generic_tile_header"><div>${ifDefined(this.title)}</div><div class="gth_subtitle">${ifDefined(this.subtitle)}</div></div><div class="generic_tile_content"><div class="generic_tile_content_inner"><slot name="displayicon"></slot><!--<${scopeTag("ui5-icon", tags, suffix)} type="Decorative" class="imageContent" name="employee"></${scopeTag("ui5-icon", tags, suffix)}>--></div><div class="gt_content_ft">${ifDefined(this.footer)}</div></div></div>` : html`<div class="generic_tile"><div class="generic_tile_header"><div>${ifDefined(this.title)}</div><div class="gth_subtitle">${ifDefined(this.subtitle)}</div></div><div class="generic_tile_content"><div class="generic_tile_content_inner"><slot name="displayicon"></slot><!--<ui5-icon type="Decorative" class="imageContent" name="employee"></ui5-icon>--></div><div class="gt_content_ft">${ifDefined(this.footer)}</div></div></div>`;}


export default block0;