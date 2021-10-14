import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.DateField): true => {
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
expectType<prismicT.DateField>("1984-01-24");
expectType<prismicT.DateField<"filled">>("1984-01-24");
expectType<prismicT.DateField<"empty">>(
	// @ts-expect-error
	"1984-01-24",
);

/**
 * Empty state.
 */
expectType<prismicT.DateField>(null);
expectType<prismicT.DateField<"empty">>(null);
expectType<prismicT.DateField<"filled">>(
	// @ts-expect-error
	null,
);

/**
 * Must be in YYYY-MM-DD format.
 */
expectType<prismicT.DateField>(
	// @ts-expect-error
	"Jan 24, 1984",
);
