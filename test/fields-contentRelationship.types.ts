import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.RelationField): true => {
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
expectType<prismicT.RelationField>({
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
expectType<prismicT.RelationField<string, string, never, "filled">>({
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
expectType<prismicT.RelationField<string, string, never, "empty">>({
	link_type: prismicT.LinkType.Document,
	// @ts-expect-error - Empty fields cannot contain a filled value.
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

/**
 * Empty state.
 */
expectType<prismicT.RelationField>({
	link_type: prismicT.LinkType.Document,
});
expectType<prismicT.RelationField<string, string, never, "empty">>({
	link_type: prismicT.LinkType.Document,
});
expectType<prismicT.RelationField<string, string, never, "filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
	{
		link_type: prismicT.LinkType.Document,
	},
);

/**
 * Supports custom document type.
 */
expectType<prismicT.RelationField<"foo">>({
	link_type: prismicT.LinkType.Document,
	id: "string",
	type: "foo",
	tags: [],
	lang: "string",
});
expectType<prismicT.RelationField<"foo">>({
	link_type: prismicT.LinkType.Document,
	id: "string",
	// @ts-expect-error - Document type must match the given type.
	type: "string",
	tags: [],
	lang: "string",
});

/**
 * Supports custom document language.
 */
expectType<prismicT.RelationField<string, "fr-fr">>({
	link_type: prismicT.LinkType.Document,
	id: "string",
	type: "string",
	tags: [],
	lang: "fr-fr",
});
expectType<prismicT.RelationField<string, "fr-fr">>({
	link_type: prismicT.LinkType.Document,
	id: "string",
	type: "string",
	tags: [],
	// @ts-expect-error - Document language must match the given type.
	lang: "string",
});

/**
 * Supports custom document data.
 */
expectType<
	prismicT.RelationField<string, string, { foo: prismicT.BooleanField }>
>({
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
