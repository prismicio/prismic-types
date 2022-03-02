import { expectType, expectNever } from "ts-expect";

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
	url: "url",
	dimensions: { width: 1, height: 1 },
	alt: "alt",
	copyright: "copyright",
});
expectType<prismicT.ImageField<null, "filled">>({
	url: "url",
	dimensions: { width: 1, height: 1 },
	alt: "alt",
	copyright: "copyright",
});
expectType<prismicT.ImageField<null, "empty">>({
	// @ts-expect-error - Empty fields cannot contain a filled value.
	url: "url",
	// @ts-expect-error - Empty fields cannot contain a filled value.
	dimensions: { width: 1, height: 1 },
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
expectType<prismicT.ImageField<null, "empty">>({
	url: null,
	dimensions: null,
	alt: null,
	copyright: null,
});
expectType<prismicT.ImageField<null, "filled">>({
	// @ts-expect-error - Filled fields cannot contain an empty value.
	url: null,
	// @ts-expect-error - Filled fields cannot contain an empty value.
	dimensions: null,
	alt: null,
	copyright: null,
});

/**
 * Allows null alt and copyright.
 */
expectType<prismicT.ImageField>({
	url: "url",
	dimensions: { width: 1, height: 1 },
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
	url: "url",
	dimensions: { width: 1, height: 1 },
	alt: "alt",
	copyright: "copyright",
	Foo: {
		url: "url",
		dimensions: { width: 1, height: 1 },
		alt: "alt",
		copyright: "copyright",
	},
	Bar: {
		url: "url",
		dimensions: { width: 1, height: 1 },
		alt: "alt",
		copyright: "copyright",
	},
});
// See: #27
const withThumbnails = {} as prismicT.ImageField<"Foo" | "Bar">;
withThumbnails.Foo;
withThumbnails.Bar;

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
const withoutThumbnails = {} as prismicT.ImageField<null>;
// @ts-expect-error - No thumbnails should be included when set to `null`.
withoutThumbnails.Foo;
// @ts-expect-error - No thumbnails should be included when set to `null`.
withoutThumbnails.Bar;
