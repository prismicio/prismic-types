import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.SharedSlice): true => {
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

expectType<prismicT.SharedSlice>({
	slice_type: "string",
	slice_label: null,
	variation: "string",
	version: "string",
	primary: {},
	items: [],
});

/**
 * Supports custom Shared Slice type API ID.
 */
expectType<prismicT.SharedSlice<"foo">>({
	slice_type: "foo",
	slice_label: null,
	variation: "string",
	version: "string",
	primary: {},
	items: [],
});
expectType<prismicT.SharedSlice<"foo">>({
	// @ts-expect-error
	slice_type: "string",
	slice_label: null,
	variation: "string",
	version: "string",
	primary: {},
	items: [],
});

/**
 * Supports custom variation types.
 */
expectType<prismicT.SharedSlice<string, prismicT.SharedSliceVariation<"foo">>>({
	slice_type: "string",
	slice_label: null,
	variation: "foo",
	version: "string",
	primary: {},
	items: [],
});
expectType<prismicT.SharedSlice<string, prismicT.SharedSliceVariation<"foo">>>({
	slice_type: "string",
	slice_label: null,
	// @ts-expect-error
	variation: "string",
	version: "string",
	primary: {},
	items: [],
});
