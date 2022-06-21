import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelSliceZoneField): true => {
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

expectType<prismicT.CustomTypeModelSliceZoneField>({
	type: prismicT.CustomTypeModelFieldType.Slices,
	fieldset: "Slice zone",
	config: {
		labels: {
			foo: [
				{
					name: "string",
					display: "string",
				},
			],
		},
		choices: {
			foo: {
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
			},
		},
	},
});

/**
 * Supports custom Slice types.
 */
expectType<
	prismicT.CustomTypeModelSliceZoneField<{
		foo: prismicT.CustomTypeModelSlice;
		bar: prismicT.CustomTypeModelSharedSlice;
	}>
>({
	type: prismicT.CustomTypeModelFieldType.Slices,
	fieldset: "Slice zone",
	config: {
		labels: {},
		choices: {
			foo: {
				type: prismicT.CustomTypeModelSliceType.Slice,
				fieldset: "string",
				display: prismicT.CustomTypeModelSliceDisplay.List,
				description: "string",
				icon: "string",
				repeat: {},
				"non-repeat": {},
			},
			bar: {
				type: prismicT.CustomTypeModelSliceType.SharedSlice,
			},
		},
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 *
 * @remarks
 * `type` is omitted because implemented as an enum on `@prismicio/types-internal`.
 */
expectType<
	Omit<prismicT.CustomTypeModelSliceZoneField, "type" | "config"> & {
		config?: Omit<prismicT.CustomTypeModelSliceZoneField["config"], "choices">;
	}
>({} as prismicTI.CustomTypes.Widgets.Slices.SliceZone.StaticSlices);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 *
 * @remarks
 * `type` is omitted because implemented as an enum on `@prismicio/types-internal`.
 */
expectType<
	Omit<
		prismicTI.CustomTypes.Widgets.Slices.SliceZone.StaticSlices,
		"type" | "config"
	> & {
		config?: Omit<prismicT.CustomTypeModelSliceZoneField["config"], "choices">;
	}
>({} as prismicT.CustomTypeModelSliceZoneField);
