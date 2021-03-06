import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.GroupField): true => {
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
expectType<prismicT.GroupField>([
	{
		boolean: true,
	},
]);

/**
 * Empty state. It does not use FieldState like other fields; an empty array
 * implicity signals an empty state.
 */
expectType<prismicT.GroupField>([]);

/**
 * Supports custom fields definition.
 */
expectType<prismicT.GroupField<{ boolean: prismicT.BooleanField }>>([
	{
		boolean: true,
	},
]);
expectType<prismicT.GroupField<{ boolean: prismicT.BooleanField }>>([
	{
		// @ts-expect-error - Fields must match the given type definition.
		boolean: "string",
	},
]);

/**
 * Custom fields may only contain group-compatible fields.
 */
expectType<
	prismicT.GroupField<// @ts-expect-error - Groups are invalid within group fields.
	{
		group: prismicT.GroupField;
	}>
>([]);
expectType<
	prismicT.GroupField<// @ts-expect-error - Slice Zones are invalid within group fields.
	{
		sliceZone: prismicT.SliceZone;
	}>
>([]);
