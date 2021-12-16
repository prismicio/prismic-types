import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.SliceZone): true => {
	if (!Array.isArray(value)) {
		return expectNever(value);
	}

	switch (typeof value[0]) {
		case "object": {
			if (value[0] === null) {
				expectNever(value[0]);
			}

			return true;
		}

		// When the field is empty, value[0] is undefined.
		case "undefined": {
			return true;
		}

		default: {
			return expectNever(value[0]);
		}
	}
};

/**
 * Filled state. It does not use FieldState like other fields; an array with
 * elements implicity signals a filled state.
 */
expectType<prismicT.SliceZone>([
	// Slice
	{
		slice_type: "string",
		slice_label: "string",
		primary: {},
		items: [],
	},
	// Shared Slice
	{
		slice_type: "string",
		slice_label: null,
		variation: "string",
		version: "string",
		primary: {},
		items: [],
	},
]);

/**
 * Empty state. It does not use FieldState like other fields; an empty array
 * implicity signals an empty state.
 */
expectType<prismicT.SliceZone>([]);

/**
 * Supports custom Slice definitions.
 */
expectType<prismicT.SliceZone<prismicT.Slice<"foo">>>([
	{
		slice_type: "foo",
		slice_label: "string",
		primary: {},
		items: [],
	},
]);
expectType<prismicT.SliceZone<prismicT.Slice<"foo">>>([
	{
		// @ts-expect-error - Slice must match the given type.
		slice_type: "string",
		slice_label: "string",
		primary: {},
		items: [],
	},
]);

/**
 * Supports custom Shared Slice definitions.
 */
expectType<prismicT.SliceZone<prismicT.SharedSlice<"foo">>>([
	{
		slice_type: "foo",
		slice_label: null,
		variation: "string",
		version: "string",
		primary: {},
		items: [],
	},
]);
expectType<prismicT.SliceZone<prismicT.SharedSlice<"foo">>>([
	{
		// @ts-expect-error - Slice must match the given type.
		slice_type: "string",
		slice_label: null,
		variation: "string",
		version: "string",
		primary: {},
		items: [],
	},
]);
