import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelImageField): true => {
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

expectType<prismicT.CustomTypeModelImageField>({
	type: prismicT.CustomTypeModelFieldType.Image,
	config: {
		label: "string",
		constraint: {},
		thumbnails: [
			{
				name: "string",
				width: 1,
				height: 1,
			},
		],
	},
});

/**
 * Does not support a placeholder.
 */
expectType<prismicT.CustomTypeModelImageField>({
	type: prismicT.CustomTypeModelFieldType.Image,
	config: {
		label: "string",
		// @ts-expect-error - Does not support a placeholder.
		placeholder: "string",
		constraint: {
			width: 1,
			height: 1,
		},
		thumbnails: [
			{
				name: "string",
				width: 1,
				height: 1,
			},
		],
	},
});

/**
 * Supports optional constraint.
 */
expectType<prismicT.CustomTypeModelImageField>({
	type: prismicT.CustomTypeModelFieldType.Image,
	config: {
		label: "string",
		constraint: {
			width: 1,
			height: 1,
		},
		thumbnails: [],
	},
});

/**
 * Supports custom thumbnail names.
 */
expectType<prismicT.CustomTypeModelImageField<"Foo">>({
	type: prismicT.CustomTypeModelFieldType.Image,
	config: {
		label: "string",
		constraint: {},
		thumbnails: [
			{
				name: "Foo",
				width: 1,
				height: 1,
			},
			{
				// @ts-expect-error - Only given thumbnail names are valid.
				name: "string",
				width: 1,
				height: 1,
			},
		],
	},
});

/**
 * Constraint supports nullable width and height to represent no constraint.
 */
expectType<prismicT.CustomTypeModelImageConstraint>({
	width: null,
	height: null,
});
expectType<prismicT.CustomTypeModelImageConstraint>({
	width: 1,
	height: null,
});
expectType<prismicT.CustomTypeModelImageConstraint>({
	width: null,
	height: 1,
});

/**
 * Thumbnail supports configurable name.
 */
expectType<prismicT.CustomTypeModelImageThumbnail<"Foo">>({
	name: "Foo",
	width: null,
	height: null,
});
expectType<prismicT.CustomTypeModelImageThumbnail<"Foo">>({
	// @ts-expect-error - Name must match the given name.
	name: "string",
	width: null,
	height: null,
});