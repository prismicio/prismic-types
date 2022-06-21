import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

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
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelImageField>({
	type: prismicT.CustomTypeModelFieldType.Image,
	config: {
		label: "string",
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

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelImageField>(
	{} as prismicTI.CustomTypes.Widgets.Nestable.Image,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 *
 * @remarks
 * `type` is omitted because implemented as an enum on `@prismicio/types-internal`.
 */
expectType<Omit<prismicTI.CustomTypes.Widgets.Nestable.Image, "type">>(
	{} as prismicT.CustomTypeModelImageField,
);
