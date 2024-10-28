/* eslint no-unused-vars: 0 */
import { html, svg, repeat, classMap, styleMap, ifDefined, unsafeHTML, scopeTag } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import type UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type MgGenericTile from "../../MgGenericTile.js";
import type { ClassMapValue } from "@ui5/webcomponents-base/dist/types.js";
	
function block0 (this: MgGenericTile, context: UI5Element, tags: string[], suffix: string | undefined) { return html`<div class="root" @click="${this.onClick}">${ifDefined(this.counterText)} :: ${ifDefined(this.count)}</div>`;}


export default block0;