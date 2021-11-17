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
 * `EmbedType` keeps compatibility with other versions.
 *
 * @see Related issue {@link https://github.com/prismicio/prismic-types/issues/16}
 */
const ForeignEmbedType = {
	Link: "link",
	Breaking: "breaking",
} as const;
expectType<typeof prismicT.EmbedType.Link>(ForeignEmbedType.Link);
expectType<typeof prismicT.EmbedType.Link>(
	// @ts-expect-error - `EmbedType` should still fail with breaking changes
	ForeignEmbedType.Breaking,
);

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
	// @ts-expect-error - Empty fields cannot contain a filled value.
	embed_url: "url",
	// @ts-expect-error - Empty fields cannot contain a filled value.
	type: prismicT.EmbedType.Link,
});

/**
 * Empty state.
 */
expectType<prismicT.EmbedField>({});
expectType<prismicT.EmbedField<prismicT.CommonEmbedData, "empty">>({});
expectType<prismicT.EmbedField<prismicT.CommonEmbedData, "filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
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
