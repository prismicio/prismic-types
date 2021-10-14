import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.SelectField): true => {
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
expectType<prismicT.SelectField>("foo");
expectType<prismicT.SelectField<string, "filled">>("foo");
expectType<prismicT.SelectField<string, "empty">>(
	// @ts-expect-error - Empty fields cannot contain a filled value.
	"foo",
);

/**
 * Empty state.
 */
expectType<prismicT.SelectField>(null);
expectType<prismicT.SelectField<string, "empty">>(null);
expectType<prismicT.SelectField<string, "filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
	null,
);

/**
 * Supports options enum (loosely typed using string union).
 */
(value: prismicT.SelectField<"foo" | "bar", "filled">) => {
	switch (value) {
		case "foo":
		case "bar": {
			break;
		}

		default: {
			expectNever(value);
		}
	}
};
