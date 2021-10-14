import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.TimestampField): true => {
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
expectType<prismicT.TimestampField>("1984-01-24T05:00:00+0000");
expectType<prismicT.TimestampField<"filled">>("1984-01-24T05:00:00+0000");
expectType<prismicT.TimestampField<"empty">>(
	// @ts-expect-error - Empty fields cannot contain a filled value.
	"1984-01-24T05:00:00+0000",
);

/**
 * Empty state.
 */
expectType<prismicT.TimestampField>(null);
expectType<prismicT.TimestampField<"empty">>(null);
expectType<prismicT.TimestampField<"filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
	null,
);

/**
 * Must be in YYYY-MM-DDTHH:MM:SS+ZZZZ format.
 */
expectType<prismicT.TimestampField>(
	// @ts-expect-error - Arbitrary strings are invalid.
	"1984-01-24",
);
