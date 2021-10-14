import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.NumberField): true => {
	switch (typeof value) {
		case "number": {
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
expectType<prismicT.NumberField>(0);
expectType<prismicT.NumberField<"filled">>(0);
expectType<prismicT.NumberField<"empty">>(
	// @ts-expect-error - Empty fields cannot contain a filled value.
	0,
);

/**
 * Empty state.
 */
expectType<prismicT.NumberField>(null);
expectType<prismicT.NumberField<"empty">>(null);
expectType<prismicT.NumberField<"filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
	null,
);
