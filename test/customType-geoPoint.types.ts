import { expectType, expectNever } from "ts-expect";

import * as prismicTICustomTypes from "@prismicio/types-internal/lib/customtypes";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelGeoPointField): true => {
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

expectType<prismicT.CustomTypeModelGeoPointField>({
	type: prismicT.CustomTypeModelFieldType.GeoPoint,
	config: {
		label: "string",
	},
});

/**
 * Does not support a placeholder.
 */
expectType<prismicT.CustomTypeModelGeoPointField>({
	type: prismicT.CustomTypeModelFieldType.GeoPoint,
	config: {
		label: "string",
		// @ts-expect-error - Does not support a placeholder.
		placeholder: "string",
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelGeoPointField>(
	{} as prismicTICustomTypes.GeoPoint,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTICustomTypes.GeoPoint>(
	{} as prismicT.CustomTypeModelGeoPointField,
);
