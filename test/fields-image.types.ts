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
	// @ts-expect-error
	url: "url",
	// @ts-expect-error
	dimensions: { width: 1, height: 1 },
	// @ts-expect-error
	alt: "alt",
	// @ts-expect-error
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
	// @ts-expect-error
	url: null,
	// @ts-expect-error
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
	// @ts-expect-error
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

/**
 * Thumbnails can be disabled with `null` ThumbnailNames.
 */
expectType<prismicT.ImageField<null>>({
	url: "url",
	dimensions: { width: 1, height: 1 },
	alt: null,
	copyright: null,
	// @ts-expect-error
	Foo: {
		url: "url",
		dimensions: { width: 1, height: 1 },
		alt: "alt",
		copyright: "copyright",
	},
});
