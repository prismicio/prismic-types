import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.PrismicDocumentWithoutUID): true => {
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

expectType<prismicT.PrismicDocumentWithoutUID>({
	id: "string",
	uid: null,
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
 * Does not support string UID value.
 */
expectType<prismicT.PrismicDocumentWithoutUID>({
	id: "string",
	// @ts-expect-error - Does not support string URL value.
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
	data: {},
});

/**
 * Supports nullable URL.
 */
expectType<prismicT.PrismicDocumentWithoutUID>({
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
expectType<prismicT.PrismicDocumentWithoutUID<{ foo: prismicT.BooleanField }>>({
	id: "string",
	uid: null,
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
	prismicT.PrismicDocumentWithoutUID<{
		group: prismicT.GroupField;
		sliceZone: prismicT.SliceZone;
	}>
>({
	id: "string",
	uid: null,
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
expectType<prismicT.PrismicDocumentWithoutUID<Record<string, never>, "foo">>({
	id: "string",
	uid: null,
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
expectType<prismicT.PrismicDocumentWithoutUID<Record<string, never>, "foo">>({
	id: "string",
	uid: null,
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
expectType<
	prismicT.PrismicDocumentWithoutUID<Record<string, never>, string, "fr-fr">
>({
	id: "string",
	uid: null,
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
expectType<
	prismicT.PrismicDocumentWithoutUID<Record<string, never>, string, "fr-fr">
>({
	id: "string",
	uid: null,
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
