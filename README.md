# Generic Tile Webcomponent Based on UI5 Webcomponents

 This webcomponent based is based on UI5 Webcomponents and should be a minimal implementation of the Generic Launch Tile described in the [UI5 Documentation - Generic Launch Tile](<https://ui5.sap.com/#/entity/sap.m.GenericTile/sample/sap.m.sample.GenericTileAsLaunchTile>).

 Goal is to have a theme-able, i18n-aware and easy to use component adhering to the Fiori Design guidelines, therefore it is based on the UI5 webcomponent framework.

 ![Tile example](./docs/assets/tile_example.png)

## Usage

1. Import the component from npm into your project

```bash
 npm i @devbytesorcery/bs_webc_generic_tile
```

1. Import the component into your website as a dependency

```javascript
<script type="module">

import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/employee.js";
import "@ui5/webcomponents-icons/dist/account.js";
import "@ui5/webcomponents-icons/dist/cart.js";
import "@ui5/webcomponents-icons/dist/retail-store.js";

import "@devbytesorcery/bs_webc_generic_tile/dist/BSGenericTile.js";

</script>
```

1. use the new webcomponent anywhere in your app

```html
    <bs-generic-tile id="myFirstComponent" title="Title 1" subtitle="Subtitle" footer="EUR">
        <ui5-icon slot="displayicon" type="Decorative"  name="retail-store"></ui5-icon>
	</bs-generic-tile>
```

## Open Tasks

- [X] Write tests
- [X] Add hover effect
- [ ] Add loading state behavior?
- [X] Fix icon position
- [X] Add focusable
- [ ] Clean up css

## Project Setup Notes

When creating a new webcomponent using

```bash
    npm init @ui5/webcomponents-package
```

and providing the neccessary input the project will not start initially.
You need to add two changes to the generated code:

1. Create a ".npsrc.json" file with the folling content:

```json
{
    "config": "./package-scripts.cjs"
}
````

1. Add the folloging config to the package.json

```json
    "type": "module"
````

at the root level.
