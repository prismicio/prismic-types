import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

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
	{} as prismicTI.CustomTypes.Widgets.Nestable.GeoPoint,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTI.CustomTypes.Widgets.Nestable.GeoPoint>(
	{} as prismicT.CustomTypeModelGeoPointField,
);
