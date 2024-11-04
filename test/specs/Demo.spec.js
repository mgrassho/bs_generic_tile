const assert = require("assert");

describe("bs-generic-tile rendering", async () => {
	before(async () => {
		await browser.url("test/pages/index.html");
	});

	it("tests if web component is correctly rendered", async () => {
		const innerContent = await browser.$("#myFirstComponent").shadow$("div");

		assert.ok(innerContent, "content rendered");
	});
});
