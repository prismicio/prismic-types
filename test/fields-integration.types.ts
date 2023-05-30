import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.IntegrationField): true => {
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
expectType<prismicT.IntegrationField>({
	foo: "bar",
});
expectType<prismicT.IntegrationField<Record<string, unknown>, "filled">>({
	foo: "bar",
});
expectType<prismicT.IntegrationField<Record<string, unknown>, "empty">>(
	// @ts-expect-error - Empty fields cannot contain a filled value.
	{
		foo: "bar",
	},
);

/**
 * Empty state.
 */
expectType<prismicT.IntegrationField>(null);
expectType<prismicT.IntegrationField<Record<string, unknown>, "empty">>(null);
expectType<prismicT.IntegrationField<Record<string, unknown>, "filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
	null,
);

/**
 * Supports custom blob type.
 */
expectType<prismicT.IntegrationField<{ foo: "bar" }>>({
	foo: "bar",
});
expectType<prismicT.IntegrationField<{ foo: "bar" }>>({
	// @ts-expect-error - Blob should match the given type.
	baz: "qux",
});
