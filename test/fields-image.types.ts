import { expectType, expectNever, TypeOf } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.ImageField): true => {
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
expectType<prismicT.ImageField>({
	id: "id",
	url: "url",
	dimensions: { width: 1, height: 1 },
	edit: { x: 0, y: 0, zoom: 1, background: "background" },
	alt: "alt",
	copyright: "copyright",
});
expectType<prismicT.ImageField<never, "filled">>({
	id: "id",
	url: "url",
	dimensions: { width: 1, height: 1 },
	edit: { x: 0, y: 0, zoom: 1, background: "background" },
	alt: "alt",
	copyright: "copyright",
});
expectType<prismicT.ImageField<never, "empty">>({
	// @ts-expect-error - Empty fields cannot contain an empty value.
	id: "id",
	// @ts-expect-error - Empty fields cannot contain a filled value.
	url: "url",
	// @ts-expect-error - Empty fields cannot contain a filled value.
	dimensions: { width: 1, height: 1 },
	// @ts-expect-error - Empty fields cannot contain a filled value.
	edit: { x: 0, y: 0, zoom: 1, background: "background" },
	// @ts-expect-error - Empty fields cannot contain a filled value.
	alt: "alt",
	// @ts-expect-error - Empty fields cannot contain a filled value.
	copyright: "copyright",
});

/**
 * Empty state.
 */
expectType<prismicT.ImageField>({
	url: null,
	dimensions: null,
	alt: null,
	copyright: null,
});
expectType<prismicT.ImageField>({});
expectType<prismicT.ImageField<never, "empty">>({
	url: null,
	dimensions: null,
	alt: null,
	copyright: null,
});
expectType<prismicT.ImageField<never, "filled">>({
	// @ts-expect-error - Filled fields cannot contain an empty value.
	id: null,
	// @ts-expect-error - Filled fields cannot contain an empty value.
	url: null,
	// @ts-expect-error - Filled fields cannot contain an empty value.
	dimensions: null,
	// @ts-expect-error - Filled fields cannot contain an empty value.
	edit: null,
	alt: null,
	copyright: null,
});

/**
 * Allows null alt and copyright.
 */
expectType<prismicT.ImageField>({
	id: "id",
	url: "url",
	dimensions: { width: 1, height: 1 },
	edit: { x: 0, y: 0, zoom: 1, background: "background" },
	alt: null,
	copyright: null,
});

/**
 * Does not contain thumbnails by default.
 */
expectType<prismicT.ImageField>({
	url: "url",
	dimensions: { width: 1, height: 1 },
	alt: "alt",
	copyright: "copyright",
	// @ts-expect-error - No thumbnails are included by default.
	Foo: {},
});

/**
 * Supports thumbnails.
 */
expectType<prismicT.ImageField<"Foo" | "Bar">>({
	id: "id",
	url: "url",
	dimensions: { width: 1, height: 1 },
	edit: { x: 0, y: 0, zoom: 1, background: "background" },
	alt: "alt",
	copyright: "copyright",
	Foo: {
		id: "id",
		url: "url",
		dimensions: { width: 1, height: 1 },
		edit: { x: 0, y: 0, zoom: 1, background: "background" },
		alt: "alt",
		copyright: "copyright",
	},
	Bar: {
		id: "id",
		url: "url",
		dimensions: { width: 1, height: 1 },
		edit: { x: 0, y: 0, zoom: 1, background: "background" },
		alt: "alt",
		copyright: "copyright",
	},
});
// See: #27
const withThumbnails = {} as prismicT.ImageField<"Foo" | "Bar">;
withThumbnails.Foo;
withThumbnails.Bar;

/**
 * Thumbnails can be disabled with `never` ThumbnailNames.
 */
expectType<prismicT.ImageField<never>>({
	url: "url",
	dimensions: { width: 1, height: 1 },
	alt: null,
	copyright: null,
	// @ts-expect-error - No thumbnails should be included when set to `never`.
	Foo: {
		url: "url",
		dimensions: { width: 1, height: 1 },
		alt: "alt",
		copyright: "copyright",
	},
});
const withoutThumbnails = {} as prismicT.ImageField<never>;
// @ts-expect-error - No thumbnails should be included when set to `never`.
withoutThumbnails.Foo;
// @ts-expect-error - No thumbnails should be included when set to `never`.
withoutThumbnails.Bar;

// TODO: Remove this group of tests when support for `null` ThumbnailNames is
// removed.
/**
 * Thumbnails can be disabled with `null` ThumbnailNames.
 */
expectType<prismicT.ImageField<null>>({
	url: "url",
	dimensions: { width: 1, height: 1 },
	alt: null,
	copyright: null,
	// @ts-expect-error - No thumbnails should be included when set to `null`.
	Foo: {
		url: "url",
		dimensions: { width: 1, height: 1 },
		alt: "alt",
		copyright: "copyright",
	},
});
const withoutThumbnailsNull = {} as prismicT.ImageField<null>;
// @ts-expect-error - No thumbnails should be included when set to `null`.
withoutThumbnailsNull.Foo;
// @ts-expect-error - No thumbnails should be included when set to `null`.
withoutThumbnailsNull.Bar;

/**
 * Thumbnail name can be `"length"` (edge case, see: #31)
 */
expectType<prismicT.ImageField>({
	url: "url",
	dimensions: { width: 1, height: 1 },
	alt: "alt",
	copyright: "copyright",
	// @ts-expect-error - `"length"` shouldn't be available as a thumbnail name by default
	length: {
		url: "url",
		dimensions: { width: 1, height: 1 },
		alt: "alt",
		copyright: "copyright",
	},
});
expectType<prismicT.ImageField<"length">>({
	id: "id",
	url: "url",
	dimensions: { width: 1, height: 1 },
	edit: { x: 0, y: 0, zoom: 1, background: "background" },
	alt: "alt",
	copyright: "copyright",
	length: {
		id: "id",
		url: "url",
		dimensions: { width: 1, height: 1 },
		edit: { x: 0, y: 0, zoom: 1, background: "background" },
		alt: "alt",
		copyright: "copyright",
	},
});

/**
 * ImageFields are valid ImageFieldImage extends.
 */
expectType<TypeOf<prismicT.ImageFieldImage, prismicT.ImageField>>(true);
expectType<TypeOf<prismicT.ImageFieldImage, prismicT.ImageField<never>>>(true);
expectType<TypeOf<prismicT.ImageFieldImage, prismicT.ImageField<"Foo">>>(true);
expectType<
	TypeOf<prismicT.ImageFieldImage, prismicT.ImageField<"Foo" | "Bar">>
>(true);
const _ImageFieldIsValidImageFieldImageExtendDebug: prismicT.ImageFieldImage =
	{} as prismicT.ImageField;

/**
 * ImageFieldImages are valid ImageField extends with no thumbnails.
 */
expectType<TypeOf<prismicT.ImageField, prismicT.ImageFieldImage>>(true);
expectType<TypeOf<prismicT.ImageField<never>, prismicT.ImageFieldImage>>(true);
expectType<TypeOf<prismicT.ImageField<"Foo">, prismicT.ImageFieldImage>>(false);
expectType<
	TypeOf<prismicT.ImageField<"Foo" | "Bar">, prismicT.ImageFieldImage>
>(false);
const _ImageFieldImageIsValidImageFieldExtendDebug: prismicT.ImageField =
	{} as prismicT.ImageFieldImage;
