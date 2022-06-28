import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

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
	{} as prismicTI.CustomTypes.Widgets.Nestable.Timestamp,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTI.CustomTypes.Widgets.Nestable.Timestamp>(
	{} as prismicT.CustomTypeModelTimestampField,
);
