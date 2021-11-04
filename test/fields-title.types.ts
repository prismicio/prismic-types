import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.TitleField): true => {
	if (!Array.isArray(value)) {
		return expectNever(value);
	}

	switch (typeof value[0]) {
		case "object": {
			if (value[0] === null) {
				expectNever(value[0]);
			}

			return true;
		}

		// When the field is empty, value[0] is undefined.
		case "undefined": {
			return true;
		}

		default: {
			return expectNever(value[0]);
		}
	}
};

/**
 * Filled state.
 */
expectType<prismicT.TitleField>([
	{
		type: prismicT.RichTextNodeType.heading1,
		text: "string",
		spans: [],
	},
]);
expectType<prismicT.TitleField<"filled">>([
	{
		type: prismicT.RichTextNodeType.heading1,
		text: "string",
		spans: [],
	},
]);
expectType<prismicT.TitleField<"empty">>(
	// @ts-expect-error - Empty fields cannot contain a filled value.
	[
		{
			type: prismicT.RichTextNodeType.heading1,
			text: "string",
			spans: [],
		},
	],
);

/**
 * Empty state.
 */
expectType<prismicT.TitleField>([]);
expectType<prismicT.TitleField<"empty">>([]);
expectType<prismicT.TitleField<"filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
	[],
);

/**
 * Supports all heading Structured Text block types.
 */
expectType<prismicT.TitleField>([
	{ type: prismicT.RichTextNodeType.heading1, text: "string", spans: [] },
]);
expectType<prismicT.TitleField>([
	{ type: prismicT.RichTextNodeType.heading2, text: "string", spans: [] },
]);
expectType<prismicT.TitleField>([
	{ type: prismicT.RichTextNodeType.heading3, text: "string", spans: [] },
]);
expectType<prismicT.TitleField>([
	{ type: prismicT.RichTextNodeType.heading4, text: "string", spans: [] },
]);
expectType<prismicT.TitleField>([
	{ type: prismicT.RichTextNodeType.heading5, text: "string", spans: [] },
]);
expectType<prismicT.TitleField>([
	{ type: prismicT.RichTextNodeType.heading5, text: "string", spans: [] },
]);

/**
 * Does not allow non-heading Structured Text block types.
 */
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error Not a heading block type.
		type: prismicT.RichTextNodeType.paragraph,
	},
]);
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error Not a heading block type.
		type: prismicT.RichTextNodeType.preformatted,
	},
]);
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error Not a heading block type.
		type: prismicT.RichTextNodeType.listItem,
	},
]);
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error Not a heading block type.
		type: prismicT.RichTextNodeType.oListItem,
	},
]);
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error Not a heading block type.
		type: prismicT.RichTextNodeType.image,
	},
]);
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error Not a heading block type.
		type: prismicT.RichTextNodeType.embed,
	},
]);
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error Not a heading block type.
		type: prismicT.RichTextNodeType.strong,
	},
]);
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error Not a heading block type.
		type: prismicT.RichTextNodeType.em,
	},
]);
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error Not a heading block type.
		type: prismicT.RichTextNodeType.label,
	},
]);
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error Not a heading block type.
		type: prismicT.RichTextNodeType.hyperlink,
	},
]);
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error - Not a root-label block type (meta block for internal use only).
		type: prismicT.RichTextNodeType.list,
	},
]);
expectType<prismicT.TitleField>([
	{
		// @ts-expect-error - Not a root-label block type (meta block for internal use only).
		type: prismicT.RichTextNodeType.oList,
	},
]);

/**
 * Does not allow spans elements.
 */
expectType<prismicT.TitleField>([
	{
		type: prismicT.RichTextNodeType.heading1,
		text: "string",
		// @ts-expect-error - Does not allow span elements.
		spans: [
			{
				type: prismicT.RichTextNodeType.strong,
				start: 0,
				end: 1,
			},
		],
	},
]);
