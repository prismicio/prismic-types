import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelNumberField): true => {
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

expectType<prismicT.CustomTypeModelNumberField>({
	type: prismicT.CustomTypeModelFieldType.Number,
	config: {
		label: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelNumberField>({
	type: prismicT.CustomTypeModelFieldType.Number,
	config: {
		label: "string",
		placeholder: "string",
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelNumberField>(
	{} as prismicTI.CustomTypes.Widgets.Nestable.Number,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 *
 * @remarks
 * `type` is omitted because implemented as an enum on `@prismicio/types-internal`.
 */
expectType<Omit<prismicTI.CustomTypes.Widgets.Nestable.Number, "type">>(
	{} as prismicT.CustomTypeModelNumberField,
);
