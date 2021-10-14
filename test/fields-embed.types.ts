import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.EmbedField): true => {
	switch (typeof value) {
		case "object": {
			if (value === null) {
				expectNever(value);
			}

			return true;
		}

		default: {
			return expectNever(value);
		}
	}
};

/**
 * Filled state.
 */
expectType<prismicT.EmbedField>({
	embed_url: "url",
	type: prismicT.EmbedType.Link,
});
expectType<prismicT.EmbedField<prismicT.CommonEmbedData, "filled">>({
	embed_url: "url",
	type: prismicT.EmbedType.Link,
});
expectType<prismicT.EmbedField<prismicT.CommonEmbedData, "empty">>({
	// @ts-expect-error
	embed_url: "url",
	// @ts-expect-error
	type: prismicT.EmbedType.Link,
});

/**
 * Empty state.
 */
expectType<prismicT.EmbedField>({});
expectType<prismicT.EmbedField<prismicT.CommonEmbedData, "empty">>({});
expectType<prismicT.EmbedField<prismicT.CommonEmbedData, "filled">>(
	// @ts-expect-error
	{},
);

/**
 * Includes common oEmbed data by default.
 */
expectType<prismicT.EmbedField>({
	embed_url: "url",
	type: prismicT.EmbedType.Link,
	url: "string",
	version: "string",
	title: "string",
	html: "string",
	width: 0,
	height: 0,
	author_name: "string",
	author_url: "string",
	provider_name: "string",
	cache_age: 0,
	thumbnail_url: "string",
	thumbnail_width: 0,
	thumbnail_height: 0,
});

/**
 * Supports custom oEmbed data.
 */
expectType<prismicT.EmbedField<{ foo: "bar" }>>({
	embed_url: "url",
	type: prismicT.EmbedType.Link,
	foo: "bar",
});
