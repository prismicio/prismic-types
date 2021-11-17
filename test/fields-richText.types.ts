import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.RichTextField): true => {
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
 * `RichTextNodeType` keeps compatibility with other versions.
 *
 * @see Related issue {@link https://github.com/prismicio/prismic-types/issues/16}
 */
const ForeignRichTextNodeType = {
	heading1: "heading1",
	breaking: "breaking",
} as const;
expectType<typeof prismicT.RichTextNodeType.heading1>(
	ForeignRichTextNodeType.heading1,
);
expectType<typeof prismicT.RichTextNodeType.heading1>(
	// @ts-expect-error - `RichTextNodeType` should still fail with breaking changes
	ForeignRichTextNodeType.breaking,
);

/**
 * Filled state.
 */
expectType<prismicT.RichTextField>([
	{
		type: prismicT.RichTextNodeType.paragraph,
		text: "string",
		spans: [
			{
				type: prismicT.RichTextNodeType.strong,
				start: 0,
				end: 1,
			},
		],
	},
]);
expectType<prismicT.RichTextField<"filled">>([
	{
		type: prismicT.RichTextNodeType.paragraph,
		text: "string",
		spans: [
			{
				type: prismicT.RichTextNodeType.strong,
				start: 0,
				end: 1,
			},
		],
	},
]);
expectType<prismicT.RichTextField<"empty">>(
	// @ts-expect-error - Empty fields cannot contain a filled value.
	[
		{
			type: prismicT.RichTextNodeType.paragraph,
			text: "string",
			spans: [
				{
					type: prismicT.RichTextNodeType.strong,
					start: 0,
					end: 1,
				},
			],
		},
	],
);

/**
 * Empty state.
 */
expectType<prismicT.RichTextField>([]);
expectType<prismicT.RichTextField<"empty">>([]);
expectType<prismicT.RichTextField<"filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
	[],
);

/**
 * Supports all root-level Structured Text block types.
 */
expectType<prismicT.RichTextField>([
	{ type: prismicT.RichTextNodeType.heading1, text: "string", spans: [] },
	{ type: prismicT.RichTextNodeType.heading2, text: "string", spans: [] },
	{ type: prismicT.RichTextNodeType.heading3, text: "string", spans: [] },
	{ type: prismicT.RichTextNodeType.heading4, text: "string", spans: [] },
	{ type: prismicT.RichTextNodeType.heading5, text: "string", spans: [] },
	{ type: prismicT.RichTextNodeType.heading5, text: "string", spans: [] },
	{ type: prismicT.RichTextNodeType.paragraph, text: "string", spans: [] },
	{ type: prismicT.RichTextNodeType.preformatted, text: "string", spans: [] },
	{ type: prismicT.RichTextNodeType.listItem, text: "string", spans: [] },
	{ type: prismicT.RichTextNodeType.oListItem, text: "string", spans: [] },
	{
		type: prismicT.RichTextNodeType.image,
		alt: "string",
		url: "string",
		copyright: "string",
		dimensions: {
			width: 0,
			height: 0,
		},
		linkTo: {
			link_type: prismicT.LinkType.Web,
			url: "string",
			target: "string",
		},
	},
	{
		type: prismicT.RichTextNodeType.embed,
		oembed: {
			type: prismicT.EmbedType.Rich,
			embed_url: "string",
		},
	},
]);
expectType<prismicT.RichTextField>([
	{
		// @ts-expect-error - Not a root-level block type.
		type: prismicT.RichTextNodeType.strong,
	},
]);
expectType<prismicT.RichTextField>([
	{
		// @ts-expect-error - Not a root-level block type.
		type: prismicT.RichTextNodeType.em,
	},
]);
expectType<prismicT.RichTextField>([
	{
		// @ts-expect-error - Not a root-level block type.
		type: prismicT.RichTextNodeType.label,
	},
]);
expectType<prismicT.RichTextField>([
	{
		// @ts-expect-error - Not a root-level block type.
		type: prismicT.RichTextNodeType.hyperlink,
	},
]);
expectType<prismicT.RichTextField>([
	{
		// @ts-expect-error - Not a root-label block type (meta block for internal use only).
		type: prismicT.RichTextNodeType.list,
	},
]);
expectType<prismicT.RichTextField>([
	{
		// @ts-expect-error - Not a root-label block type (meta block for internal use only).
		type: prismicT.RichTextNodeType.oList,
	},
]);

/**
 * Text blocks support spans.
 */
expectType<prismicT.RichTextField>([
	{
		type: prismicT.RichTextNodeType.paragraph,
		text: "string",
		spans: [
			{
				type: prismicT.RichTextNodeType.strong,
				start: 0,
				end: 0,
			},
			{
				type: prismicT.RichTextNodeType.em,
				start: 0,
				end: 0,
			},
			{
				type: prismicT.RichTextNodeType.label,
				start: 0,
				end: 0,
				data: {
					label: "string",
				},
			},
			{
				type: prismicT.RichTextNodeType.hyperlink,
				start: 0,
				end: 0,
				data: {
					link_type: prismicT.LinkType.Web,
					url: "string",
					target: "string",
				},
			},
		],
	},
]);
