import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.SharedSliceModel): true => {
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

expectType<prismicT.SharedSliceModel>({
	type: prismicT.CustomTypeModelSliceType.SharedSlice,
	id: "string",
	name: "string",
	description: "string",
	variations: [
		{
			id: "string",
			name: "string",
			docURL: "string",
			version: "string",
			description: "string",
			primary: {
				foo: {
					type: prismicT.CustomTypeModelFieldType.Boolean,
					config: {
						label: "string",
					},
				},
			},
			items: {
				foo: {
					type: prismicT.CustomTypeModelFieldType.Boolean,
					config: {
						label: "string",
					},
				},
			},
		},
	],
});

/**
 * Supports custom ID.
 */
expectType<prismicT.SharedSliceModel<"foo">>({
	type: prismicT.CustomTypeModelSliceType.SharedSlice,
	id: "foo",
	name: "string",
	description: "string",
	variations: [],
});
expectType<prismicT.SharedSliceModel<"foo">>({
	type: prismicT.CustomTypeModelSliceType.SharedSlice,
	// @ts-expect-error - Slice ID must match the given ID.
	id: "string",
	name: "string",
	description: "string",
	variations: [],
});

/**
 * Supports custom variations.
 */
expectType<
	prismicT.SharedSliceModel<string, prismicT.SharedSliceModelVariation<"foo">>
>({
	type: prismicT.CustomTypeModelSliceType.SharedSlice,
	id: "string",
	name: "string",
	description: "string",
	variations: [
		{
			id: "foo",
			name: "string",
			docURL: "string",
			version: "string",
			description: "string",
			primary: {},
			items: {},
		},
		{
			// @ts-expect-error - Slice must match the given type.
			id: "bar",
			name: "string",
			docURL: "string",
			version: "string",
			description: "string",
			primary: {},
			items: {},
		},
	],
});