import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelContentRelationshipField): true => {
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

expectType<prismicT.CustomTypeModelContentRelationshipField>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
		select: prismicT.CustomTypeModelLinkSelectType.Document,
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelContentRelationshipField>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
		placeholder: "string",
		select: prismicT.CustomTypeModelLinkSelectType.Document,
	},
});

/**
 * Supports optional `customtypes` property.
 */
expectType<prismicT.CustomTypeModelContentRelationshipField>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
		select: prismicT.CustomTypeModelLinkSelectType.Document,
		customtypes: ["string"],
	},
});

/**
 * Supports custom `customtypes` values.
 */
expectType<prismicT.CustomTypeModelContentRelationshipField<"foo">>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
		select: prismicT.CustomTypeModelLinkSelectType.Document,
		customtypes: [
			"foo",
			// @ts-expect-error - Only given types are valid.
			"bar",
		],
	},
});

/**
 * Supports optional `tags` property.
 */
expectType<prismicT.CustomTypeModelContentRelationshipField>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
		select: prismicT.CustomTypeModelLinkSelectType.Document,
		tags: ["string"],
	},
});

/**
 * Supports custom `tags` values.
 */
expectType<prismicT.CustomTypeModelContentRelationshipField<string, "foo">>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
		select: prismicT.CustomTypeModelLinkSelectType.Document,
		tags: [
			"foo",
			// @ts-expect-error - Only given tags are valid.
			"bar",
		],
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelContentRelationshipField>(
	{} as prismicTI.CustomTypes.Widgets.Nestable.Link & {
		// We must manually narrow `@prismicio/types-internal`'s type
		// to match a Content Relationship field;
		// `@prismicio/types-internal` does not contain a Content
		// Relationship-specific type.
		config?: { select: "document" };
	},
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTI.CustomTypes.Widgets.Nestable.Link>(
	{} as prismicT.CustomTypeModelContentRelationshipField,
);
