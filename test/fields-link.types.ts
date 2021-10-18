import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.LinkField): true => {
	switch (typeof value) {
		case "object": {
			if (value === null) {
				return expectNever(value);
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
// Web link
expectType<prismicT.LinkField>({
	link_type: prismicT.LinkType.Web,
	url: "string",
	target: "string",
});
// Content relationship link
expectType<prismicT.LinkField>({
	link_type: prismicT.LinkType.Document,
	id: "string",
	uid: "string",
	type: "string",
	tags: ["string"],
	lang: "string",
	url: "string",
	slug: "string",
	isBroken: true,
	data: undefined,
});
// Media link
expectType<prismicT.LinkField>({
	link_type: prismicT.LinkType.Media,
	name: "string",
	kind: "string",
	url: "string",
	size: "string",
	height: "string",
	width: "string",
});
expectType<prismicT.LinkField<string, string, never, "filled">>({
	link_type: prismicT.LinkType.Web,
	url: "string",
	target: "string",
});
expectType<prismicT.LinkField<string, string, never, "empty">>({
	link_type: prismicT.LinkType.Web,
	// @ts-expect-error - Empty fields cannot contain a filled value.
	url: "string",
	target: "string",
});

/**
 * Empty state.
 */
expectType<prismicT.LinkField>({
	link_type: prismicT.LinkType.Any,
});
expectType<prismicT.LinkField<string, string, never, "empty">>({
	link_type: prismicT.LinkType.Any,
});
expectType<prismicT.LinkField<string, string, never, "filled">>({
	// @ts-expect-error - Filled fields cannot contain an empty value.
	link_type: prismicT.LinkType.Any,
});

/**
 * Supports custom document type for document links.
 */
expectType<prismicT.LinkField<"foo">>({
	link_type: prismicT.LinkType.Document,
	id: "string",
	type: "foo",
	tags: [],
	lang: "string",
});
expectType<prismicT.LinkField<"foo">>({
	link_type: prismicT.LinkType.Document,
	id: "string",
	// @ts-expect-error - Document type must match the given type.
	type: "string",
	tags: [],
	lang: "string",
});

/**
 * Supports custom document language for document links.
 */
expectType<prismicT.LinkField<string, "fr-fr">>({
	link_type: prismicT.LinkType.Document,
	id: "string",
	type: "string",
	tags: [],
	lang: "fr-fr",
});
expectType<prismicT.LinkField<string, "fr-fr">>({
	link_type: prismicT.LinkType.Document,
	id: "string",
	type: "string",
	tags: [],
	// @ts-expect-error - Document language must match the given type.
	lang: "string",
});

/**
 * Supports custom document data for document links.
 */
expectType<prismicT.LinkField<string, string, { foo: prismicT.BooleanField }>>({
	link_type: prismicT.LinkType.Document,
	id: "string",
	type: "string",
	tags: [],
	lang: "fr-fr",
	data: {
		foo: true,
		// @ts-expect-error - Only given fields are valid.
		bar: false,
	},
});
