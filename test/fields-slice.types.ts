import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.Slice): true => {
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

expectType<prismicT.Slice>({
	slice_type: "string",
	slice_label: null,
	primary: {},
	items: [],
});

/**
 * Supports Slice labels.
 */
expectType<prismicT.Slice>({
	slice_type: "string",
	slice_label: "string",
	primary: {},
	items: [],
});

/**
 * Supports custom Slice type API ID.
 */
expectType<prismicT.Slice<"foo">>({
	slice_type: "foo",
	slice_label: "string",
	primary: {},
	items: [],
});
expectType<prismicT.Slice<"foo">>({
	// @ts-expect-error
	slice_type: "string",
	slice_label: "string",
	primary: {},
	items: [],
});

/**
 * Supports custom primary fields type.
 */
expectType<prismicT.Slice<string, { foo: prismicT.BooleanField }>>({
	slice_type: "string",
	slice_label: "string",
	primary: {
		foo: true,
		// @ts-expect-error
		bar: false,
	},
	items: [],
});

/**
 * Custom primary fields may only contain group-compatible fields.
 */
expectType<
	prismicT.Slice<
		string,
		// @ts-expect-error
		{
			group: prismicT.GroupField;
		}
	>
>({
	slice_type: "string",
	slice_label: "string",
	primary: {
		group: [],
	},
	items: [],
});
expectType<
	prismicT.Slice<
		string,
		// @ts-expect-error
		{
			sliceZone: prismicT.SliceZone;
		}
	>
>({
	slice_type: "string",
	slice_label: "string",
	primary: {
		sliceZone: [],
	},
	items: [],
});

/**
 * Supports custom items fields type.
 */
expectType<
	prismicT.Slice<
		string,
		{ foo: prismicT.BooleanField },
		{ bar: prismicT.KeyTextField }
	>
>({
	slice_type: "string",
	slice_label: "string",
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

/**
 * Custom item fields may only contain group-compatible fields.
 */
expectType<
	prismicT.Slice<
		string,
		{ foo: prismicT.BooleanField },
		// @ts-expect-error
		{
			group: prismicT.GroupField;
		}
	>
>({
	slice_type: "string",
	slice_label: "string",
	primary: {
		foo: true,
	},
	items: [],
});
expectType<
	prismicT.Slice<
		string,
		{ foo: prismicT.BooleanField },
		// @ts-expect-error
		{
			sliceZone: prismicT.SliceZone;
		}
	>
>({
	slice_type: "string",
	slice_label: "string",
	primary: {
		foo: true,
	},
	items: [],
});
