import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.ColorField): true => {
	switch (typeof value) {
		case "string": {
			return true;
		}

		default: {
			if (value === null) {
				return true;
			}

			return expectNever(value);
		}
	}
};

/**
 * Filled state.
 */
expectType<prismicT.ColorField>("#FF00FF");
expectType<prismicT.ColorField<"filled">>("#FF00FF");
expectType<prismicT.ColorField<"empty">>(
	// @ts-expect-error - Empty fields cannot contain a filled value.
	"#FF00FF",
);

/**
 * Empty state.
 */
expectType<prismicT.ColorField>(null);
expectType<prismicT.ColorField<"empty">>(null);
expectType<prismicT.ColorField<"filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
	null,
);

/**
 * Must be in hex triplet format.
 */
expectType<prismicT.ColorField>(
	// @ts-expect-error - Arbitrary strings are invalid.
	"yellow",
);
expectType<prismicT.ColorField>(
	// @ts-expect-error - Non-hex-triplet color formats are invalid.
	"rgb(255, 0, 255)",
);
