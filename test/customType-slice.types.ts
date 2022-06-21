import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelSlice): true => {
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

expectType<prismicT.CustomTypeModelSlice>({
	type: prismicT.CustomTypeModelSliceType.Slice,
	fieldset: "string",
	description: "string",
	icon: "string",
	display: prismicT.CustomTypeModelSliceDisplay.List,
	"non-repeat": {
		foo: {
			type: prismicT.CustomTypeModelFieldType.Boolean,
			config: {
				label: "string",
			},
		},
	},
	repeat: {
		foo: {
			type: prismicT.CustomTypeModelFieldType.Boolean,
			config: {
				label: "string",
			},
		},
	},
});

/**
 * Supports custom non-repeat fields.
 */
expectType<
	prismicT.CustomTypeModelSlice<{ foo: prismicT.CustomTypeModelBooleanField }>
>({
	type: prismicT.CustomTypeModelSliceType.Slice,
	fieldset: "string",
	display: prismicT.CustomTypeModelSliceDisplay.List,
	description: "string",
	icon: "string",
	"non-repeat": {
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
	repeat: {},
});

/**
 * Supports custom repeat fields.
 */
expectType<
	prismicT.CustomTypeModelSlice<
		Record<string, never>,
		{ foo: prismicT.CustomTypeModelBooleanField }
	>
>({
	type: prismicT.CustomTypeModelSliceType.Slice,
	fieldset: "string",
	display: prismicT.CustomTypeModelSliceDisplay.List,
	description: "string",
	icon: "string",
	"non-repeat": {},
	repeat: {
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
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelSlice>(
	{} as prismicTI.CustomTypes.Widgets.Slices.CompositeSlice,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 *
 * @remarks
 * `type` is omitted because implemented as an enum on `@prismicio/types-internal`.
 */
expectType<
	Omit<
		prismicTI.CustomTypes.Widgets.Slices.CompositeSlice,
		"type" | "non-repeat" | "repeat"
	> & {
		"non-repeat"?: Record<
			string,
			Omit<prismicTI.CustomTypes.Widgets.Nestable.NestableWidget, "type">
		>;
		repeat?: Record<
			string,
			Omit<prismicTI.CustomTypes.Widgets.Nestable.NestableWidget, "type">
		>;
	}
>({} as prismicT.CustomTypeModelSlice);
