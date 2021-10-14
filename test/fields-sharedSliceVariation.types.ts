import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.SharedSliceVariation): true => {
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

expectType<prismicT.SharedSliceVariation>({
	variation: "string",
	version: "string",
	primary: {},
	items: [],
});

/**
 * Supports custom API ID.
 */
expectType<prismicT.SharedSliceVariation<"foo">>({
	variation: "foo",
	version: "string",
	primary: {},
	items: [],
});
expectType<prismicT.SharedSliceVariation<"foo">>({
	// @ts-expect-error
	variation: "string",
	version: "string",
	primary: {},
	items: [],
});

/**
 * Supports custom primary fields type.
 */
expectType<
	prismicT.SharedSliceVariation<string, { foo: prismicT.BooleanField }>
>({
	variation: "string",
	version: "string",
	primary: {
		foo: true,
		// @ts-expect-error
		bar: false,
	},
	items: [],
});

/**
 * Supports custom items fields type.
 */
expectType<
	prismicT.SharedSliceVariation<
		string,
		{ foo: prismicT.BooleanField },
		{ bar: prismicT.KeyTextField }
	>
>({
	variation: "string",
	version: "string",
	primary: {
		foo: true,
	},
	items: [
		{
			bar: "string",
			// @ts-expect-error
			baz: false,
		},
	],
});
