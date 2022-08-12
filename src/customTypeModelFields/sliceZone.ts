import type {
	CustomTypeModelFieldType,
	CustomTypeModelFieldForGroup,
} from "./types";
import type { CustomTypeModelGroupField } from "./group";

/**
 * A Slice Zone Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export interface CustomTypeModelSliceZoneField<
	Slices extends Record<
		string,
		| CustomTypeModelSlice
		| CustomTypeModelSharedSlice
		| CustomTypeModelLegacySlice
	> = Record<
		string,
		| CustomTypeModelSlice
		| CustomTypeModelSharedSlice
		| CustomTypeModelLegacySlice
	>,
> {
	type:
		| typeof CustomTypeModelFieldType.Slices
		| typeof CustomTypeModelFieldType.LegacySlices;
	fieldset?: string | null;
	config?: {
		labels?: Record<string, readonly CustomTypeModelSliceLabel[]> | null;
		choices?: Slices;
	};
}

/**
 * Label for a Slice.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export interface CustomTypeModelSliceLabel {
	name: string;
	display?: string;
}

/**
 * Display type for a Slice.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export const CustomTypeModelSliceDisplay = {
	List: "list",
	Grid: "grid",
} as const;

/**
 * Type identifier for a Slice.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export const CustomTypeModelSliceType = {
	Slice: "Slice",
	SharedSlice: "SharedSlice",
} as const;

/**
 * A Slice for a Custom Type.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 *
 * @typeParam NonRepeatFields - A record of fields that cannnot be repeated.
 * @typeParam RepeatFields - A record of fields that can be repeated.
 */
export interface CustomTypeModelSlice<
	NonRepeatFields extends Record<string, CustomTypeModelFieldForGroup> = Record<
		string,
		CustomTypeModelFieldForGroup
	>,
	RepeatFields extends Record<string, CustomTypeModelFieldForGroup> = Record<
		string,
		CustomTypeModelFieldForGroup
	>,
> {
	type: typeof CustomTypeModelSliceType.Slice;
	fieldset?: string | null;
	description?: string;
	icon?: string;
	display?:
		| typeof CustomTypeModelSliceDisplay[keyof typeof CustomTypeModelSliceDisplay]
		| string;
	"non-repeat"?: NonRepeatFields;
	repeat?: RepeatFields;
}

/**
 * A Shared Slice for a Custom Type.
 *
 * More details:
 *
 * - {@link https://prismic.io/docs/core-concepts/slices}
 * - {@link https://prismic.io/docs/core-concepts/reusing-slices}
 */
export interface CustomTypeModelSharedSlice {
	type: typeof CustomTypeModelSliceType.SharedSlice;
}

/**
 * A Prismic Shared Slice model.
 *
 * More details:
 *
 * - {@link https://prismic.io/docs/core-concepts/slices}
 * - {@link https://prismic.io/docs/core-concepts/reusing-slices}
 *
 * @typeParam Variation - A variation for the Shared Slice.
 */
export interface SharedSliceModel<
	ID extends string = string,
	Variation extends SharedSliceModelVariation = SharedSliceModelVariation,
> {
	type: typeof CustomTypeModelSliceType.SharedSlice;
	id: ID;
	name: string;
	description?: string;
	variations: readonly Variation[];
}

/**
 * A Shared Slice variation.
 *
 * More details:
 *
 * - {@link https://prismic.io/docs/core-concepts/slices}
 * - {@link https://prismic.io/docs/core-concepts/reusing-slices}
 *
 * @typeParam PrimaryFields - A record of fields that cannnot be repeated.
 * @typeParam ItemFields - A record of fields that can be repeated.
 */
export interface SharedSliceModelVariation<
	ID extends string = string,
	PrimaryFields extends Record<string, CustomTypeModelFieldForGroup> = Record<
		string,
		CustomTypeModelFieldForGroup
	>,
	ItemFields extends Record<string, CustomTypeModelFieldForGroup> = Record<
		string,
		CustomTypeModelFieldForGroup
	>,
> {
	id: ID;
	name: string;
	docURL: string;
	version: string;
	description: string;
	primary?: PrimaryFields;
	items?: ItemFields;
	imageUrl: string;
}

/**
 * @deprecated - Legacy slice type. Do not use.
 */
export type CustomTypeModelLegacySlice =
	| CustomTypeModelGroupField
	| CustomTypeModelFieldForGroup;
