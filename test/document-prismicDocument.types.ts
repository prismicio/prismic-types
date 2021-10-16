import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.PrismicDocument): true => {
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

expectType<prismicT.PrismicDocument>({
	id: "string",
	uid: "string",
	url: "string",
	type: "string",
	href: "string",
	tags: ["string"],
	first_publication_date: "string",
	last_publication_date: "string",
	slugs: ["string"],
	linked_documents: [],
	lang: "string",
	alternate_languages: [
		{
			id: "string",
			lang: "string",
			type: "string",
			uid: "string",
		},
	],
	data: {},
});

/**
 * Supports nullable UID and URL.
 */
expectType<prismicT.PrismicDocument>({
	id: "string",
	uid: null,
	url: null,
	type: "string",
	href: "string",
	tags: [],
	first_publication_date: "string",
	last_publication_date: "string",
	slugs: [],
	linked_documents: [],
	lang: "string",
	alternate_languages: [],
	data: {},
});

/**
 * Supports custom data interface.
 */
expectType<prismicT.PrismicDocument<{ foo: prismicT.BooleanField }>>({
	id: "string",
	uid: "string",
	url: "string",
	type: "string",
	href: "string",
	tags: [],
	first_publication_date: "string",
	last_publication_date: "string",
	slugs: [],
	linked_documents: [],
	lang: "string",
	alternate_languages: [],
	data: {
		foo: true,
		// @ts-expect-error - Only given fields are valid.
		bar: false,
	},
});

/**
 * Custom data interface supports Group and Slice Zone fields.
 */
expectType<
	prismicT.PrismicDocument<{
		group: prismicT.GroupField;
		sliceZone: prismicT.SliceZone;
	}>
>({
	id: "string",
	uid: "string",
	url: "string",
	type: "string",
	href: "string",
	tags: [],
	first_publication_date: "string",
	last_publication_date: "string",
	slugs: [],
	linked_documents: [],
	lang: "string",
	alternate_languages: [],
	data: {
		group: [],
		sliceZone: [],
	},
});

/**
 * Supports custom type.
 */
expectType<prismicT.PrismicDocument<unknown, "foo">>({
	id: "string",
	uid: "string",
	url: "string",
	type: "foo",
	href: "string",
	tags: [],
	first_publication_date: "string",
	last_publication_date: "string",
	slugs: [],
	linked_documents: [],
	lang: "string",
	alternate_languages: [],
	data: {},
});
expectType<prismicT.PrismicDocument<unknown, "foo">>({
	id: "string",
	uid: "string",
	url: "string",
	// @ts-expect-error - Document type must match the given type.
	type: "string",
	href: "string",
	tags: [],
	first_publication_date: "string",
	last_publication_date: "string",
	slugs: [],
	linked_documents: [],
	lang: "string",
	alternate_languages: [],
	data: {},
});

/**
 * Supports custom language.
 */
expectType<prismicT.PrismicDocument<unknown, string, "fr-fr">>({
	id: "string",
	uid: "string",
	url: "string",
	type: "foo",
	href: "string",
	tags: [],
	first_publication_date: "string",
	last_publication_date: "string",
	slugs: [],
	linked_documents: [],
	lang: "fr-fr",
	alternate_languages: [],
	data: {},
});
expectType<prismicT.PrismicDocument<unknown, string, "fr-fr">>({
	id: "string",
	uid: "string",
	url: "string",
	type: "string",
	href: "string",
	tags: [],
	first_publication_date: "string",
	last_publication_date: "string",
	slugs: [],
	linked_documents: [],
	// @ts-expect-error - Document lang must match the given language.
	lang: "string",
	alternate_languages: [],
	data: {},
});
