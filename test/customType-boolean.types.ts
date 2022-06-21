import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelBooleanField): true => {
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

expectType<prismicT.CustomTypeModelBooleanField>({
	type: prismicT.CustomTypeModelFieldType.Boolean,
	config: {
		label: "string",
	},
});

/**
 * Does not support a placeholder.
 */
expectType<prismicT.CustomTypeModelBooleanField>({
	type: prismicT.CustomTypeModelFieldType.Boolean,
	config: {
		label: "string",
		// @ts-expect-error - Does not support a placeholder.
		placeholder: "string",
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelBooleanField>(
	{} as prismicTI.CustomTypes.Widgets.Nestable.BooleanField,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 *
 * @remarks
 * `type` is omitted because implemented as an enum on `@prismicio/types-internal`.
 */
expectType<Omit<prismicTI.CustomTypes.Widgets.Nestable.BooleanField, "type">>(
	{} as prismicT.CustomTypeModelBooleanField,
);
