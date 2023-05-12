import { expectType, expectNever } from "ts-expect";

import * as prismicTICustomTypes from "@prismicio/types-internal/lib/customtypes";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelTimestampField): true => {
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

expectType<prismicT.CustomTypeModelTimestampField>({
	type: prismicT.CustomTypeModelFieldType.Timestamp,
	config: {
		label: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelTimestampField>({
	type: prismicT.CustomTypeModelFieldType.Timestamp,
	config: {
		label: "string",
		placeholder: "string",
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelTimestampField>(
	{} as prismicTICustomTypes.Timestamp,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTICustomTypes.Timestamp>(
	{} as prismicT.CustomTypeModelTimestampField,
);
