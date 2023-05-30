import { test, expect } from "vitest";

import * as prismicT from "../src";

test("rich text node type mapping", () => {
	expect(prismicT.RichTextNodeType).toMatchObject({
		heading1: "heading1",
		heading2: "heading2",
		heading3: "heading3",
		heading4: "heading4",
		heading5: "heading5",
		heading6: "heading6",
		paragraph: "paragraph",
		preformatted: "preformatted",
		strong: "strong",
		em: "em",
		listItem: "list-item",
		oListItem: "o-list-item",
		list: "group-list-item",
		oList: "group-o-list-item",
		image: "image",
		embed: "embed",
		hyperlink: "hyperlink",
		label: "label",
		span: "span",
	});
});

test("link type mapping", () => {
	expect(prismicT.LinkType).toMatchObject({
		Any: "Any",
		Web: "Web",
		Media: "Media",
		Document: "Document",
	});
});

test("embed type mapping", () => {
	expect(prismicT.OEmbedType).toMatchObject({
		Photo: "photo",
		Video: "video",
		Link: "link",
		Rich: "rich",
	});
});

test("custom type field type mapping", () => {
	expect(prismicT.CustomTypeModelFieldType).toMatchObject({
		Boolean: "Boolean",
		Color: "Color",
		Date: "Date",
		Embed: "Embed",
		GeoPoint: "GeoPoint",
		Group: "Group",
		Image: "Image",
		Integration: "IntegrationFields",
		IntegrationFields: "IntegrationFields",
		Link: "Link",
		Number: "Number",
		Select: "Select",
		Slices: "Slices",
		StructuredText: "StructuredText",
		Text: "Text",
		Timestamp: "Timestamp",
		UID: "UID",
	});
});

test("custom type link select mapping", () => {
	expect(prismicT.CustomTypeModelLinkSelectType).toMatchObject({
		Document: "document",
		Media: "media",
	});
});

test("custom type slice display mapping", () => {
	expect(prismicT.CustomTypeModelSliceDisplay).toMatchObject({
		Grid: "grid",
		List: "list",
	});
});

test("custom type slice type mapping", () => {
	expect(prismicT.CustomTypeModelSliceType).toMatchObject({
		Slice: "Slice",
		SharedSlice: "SharedSlice",
	});
});

test("webhook type mapping", () => {
	expect(prismicT.WebhookType).toMatchObject({
		APIUpdate: "api-update",
		TestTrigger: "test-trigger",
	});
});
