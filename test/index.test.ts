import test from "ava";

import * as prismicT from "../src";

test("rich text node type mapping", (t) => {
	t.deepEqual(prismicT.RichTextNodeType, {
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

test("link type mapping", (t) => {
	t.deepEqual(prismicT.LinkType, {
		Any: "Any",
		Web: "Web",
		Media: "Media",
		Document: "Document",
	});
});

test("embed type mapping", (t) => {
	t.deepEqual(prismicT.EmbedType, {
		Rich: "rich",
		Link: "link",
	});
});

test("custom type field type mapping", (t) => {
	t.deepEqual(prismicT.CustomTypeModelFieldType, {
		Boolean: "Boolean",
		Color: "Color",
		Date: "Date",
		Embed: "Embed",
		GeoPoint: "GeoPoint",
		Group: "Group",
		Image: "Image",
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

test("custom type link select mapping", (t) => {
	t.deepEqual(prismicT.CustomTypeModelLinkSelectType, {
		Document: "document",
		Media: "media",
	});
});

test("custom type slice display mapping", (t) => {
	t.deepEqual(prismicT.CustomTypeModelSliceDisplay, {
		Grid: "grid",
		List: "list",
	});
});

test("custom type slice type mapping", (t) => {
	t.deepEqual(prismicT.CustomTypeModelSliceType, {
		Slice: "Slice",
		SharedSlice: "SharedSlice",
	});
});
