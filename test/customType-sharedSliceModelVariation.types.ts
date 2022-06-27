import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

import * as prismicT from "../src";

(value: prismicT.SharedSliceModelVariation): true => {
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

expectType<prismicT.SharedSliceModelVariation>({
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
	imageUrl: "string",
});

/**
 * Supports custom ID.
 */
expectType<prismicT.SharedSliceModelVariation<"foo">>({
	id: "foo",
	name: "string",
	docURL: "string",
	version: "string",
	description: "string",
	primary: {},
	items: {},
	imageUrl: "string",
});
expectType<prismicT.SharedSliceModelVariation<"foo">>({
	// @ts-expect-error - Slice ID must match the given ID.
	id: "string",
	name: "string",
	docURL: "string",
	version: "string",
	description: "string",
	primary: {},
	items: {},
	imageUrl: "string",
});

/**
 * Supports custom primary fields.
 */
expectType<
	prismicT.SharedSliceModelVariation<
		string,
		{ foo: prismicT.CustomTypeModelBooleanField }
	>
>({
	id: "foo",
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
		// @ts-expect-error - Only given fields are valid.
		bar: {
			type: prismicT.CustomTypeModelFieldType.Boolean,
			config: {
				label: "string",
			},
		},
	},
	items: {},
	imageUrl: "string",
});

/**
 * Supports custom items fields.
 */
expectType<
	prismicT.SharedSliceModelVariation<
		string,
		Record<string, never>,
		{ foo: prismicT.CustomTypeModelBooleanField }
	>
>({
	id: "foo",
	name: "string",
	docURL: "string",
	version: "string",
	description: "string",
	primary: {},
	items: {
		foo: {
			type: prismicT.CustomTypeModelFieldType.Boolean,
			config: {
				label: "string",
			},
		},
		// @ts-expect-error - Only given fields are valid.
		bar: {
			type: prismicT.CustomTypeModelFieldType.Boolean,
			config: {
				label: "string",
			},
		},
	},
	imageUrl: "string",
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.SharedSliceModelVariation>(
	{} as prismicTI.CustomTypes.Widgets.Slices.Variation,
);
