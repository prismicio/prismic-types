import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.FormField): true => {
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

expectType<prismicT.FormField>({
	type: "String",
	multiple: true,
	default: "string",
});
expectType<prismicT.FormField>({
	type: "Integer",
	multiple: true,
	default: "string",
});

/**
 * `type` must be "String" or "Integer".
 */
expectType<prismicT.FormField>({
	// @ts-expect-error - `type` must be "String" or "Integer".
	type: "string",
	multiple: true,
	default: "string",
});

/**
 * Supports optional `default` property.
 */
expectType<prismicT.FormField>({
	type: "String",
	multiple: true,
});
