import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.IntegrationFields): true => {
	switch (typeof value) {
		case "object": {
			if (value === null) {
				return true;
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
expectType<prismicT.IntegrationFields>({
	foo: "bar",
});
expectType<prismicT.IntegrationFields<Record<string, unknown>, "filled">>({
	foo: "bar",
});
expectType<prismicT.IntegrationFields<Record<string, unknown>, "empty">>(
	// @ts-expect-error - Empty fields cannot contain a filled value.
	{
		foo: "bar",
	},
);

/**
 * Empty state.
 */
expectType<prismicT.IntegrationFields>(null);
expectType<prismicT.IntegrationFields<Record<string, unknown>, "empty">>(null);
expectType<prismicT.IntegrationFields<Record<string, unknown>, "filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
	null,
);

/**
 * Supports custom blob type.
 */
expectType<prismicT.IntegrationFields<{ foo: "bar" }>>({
	foo: "bar",
});
expectType<prismicT.IntegrationFields<{ foo: "bar" }>>({
	// @ts-expect-error - Blob should match the given type.
	baz: "qux",
});
