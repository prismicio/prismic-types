import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.KeyTextField): true => {
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
expectType<prismicT.KeyTextField>("foo");
expectType<prismicT.KeyTextField<"filled">>("foo");
expectType<prismicT.KeyTextField<"empty">>(
	// @ts-expect-error
	"foo",
);

/**
 * Empty state.
 */
expectType<prismicT.KeyTextField>(null);
expectType<prismicT.KeyTextField<"empty">>(null);
expectType<prismicT.KeyTextField<"filled">>(
	// @ts-expect-error
	null,
);
