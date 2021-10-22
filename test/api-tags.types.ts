import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.Tags): true => {
	if (!Array.isArray(value)) {
		return expectNever(value);
	}

	switch (typeof value[0]) {
		case "string": {
			return true;
		}

		default: {
			return expectNever(value[0]);
		}
	}
};

expectType<prismicT.Tags>(["string"]);

/**
 * Supports empty lists.
 */
expectType<prismicT.Tags>([]);

/**
 * Supports custom tag enum-like (string union).
 */
expectType<prismicT.Tags<"foo" | "bar">>(["foo", "bar"]);
expectType<prismicT.Tags<"foo" | "bar">>([
	// @ts-expect-error - Only given tags are valid.
	"string",
]);
