import type { FieldState, AnyRegularField } from "./types";

/**
 * Slice - Sections of your website
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export interface Slice<
	SliceType = string,
	PrimaryFields extends Record<string, AnyRegularField> = Record<
		string,
		AnyRegularField
	>,
	ItemsFields extends Record<string, AnyRegularField> = Record<
		string,
		AnyRegularField
	>,
> {
	slice_type: SliceType;
	slice_label: string | null;
	id?: string;
	primary: PrimaryFields;
	items: ItemsFields[];
}

/**
 * Shared Slice
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/reusing-slices#shared-slices}
 */
export type SharedSlice<
	SliceType = string,
	Variations extends SharedSliceVariation = SharedSliceVariation,
> = {
	slice_type: SliceType;
	slice_label: null;
	id?: string;
} & Variations;

export interface SharedSliceVariation<
	Variation = string,
	PrimaryFields extends Record<string, AnyRegularField> = Record<
		string,
		AnyRegularField
	>,
	ItemsFields extends Record<string, AnyRegularField> = Record<
		string,
		AnyRegularField
	>,
> {
	variation: Variation;
	version: string;
	primary: PrimaryFields;
	items: ItemsFields[];
}
/**
 * Prismic Slices are sections of your website. Prismic documents contain a
 * dynamic "Slice Zone" that allows content creators to add, edit, and rearrange
 * Slices to compose dynamic layouts for any page design, such as blog posts,
 * landing pages, case studies, and tutorials.
 *
 * @see More details: {@link https://prismic.io/docs/technologies/adding-the-slicezone-component-nextjs}
 */
export type SliceZone<
	Slices extends Slice | SharedSlice = Slice | SharedSlice,
	State extends FieldState = FieldState,
> = State extends "empty" ? [] : [Slices, ...Slices[]];
