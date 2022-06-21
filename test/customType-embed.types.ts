import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelEmbedField): true => {
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

expectType<prismicT.CustomTypeModelEmbedField>({
	type: prismicT.CustomTypeModelFieldType.Embed,
	config: {
		label: "string",
	},
});

/**
 * Supports optional placeholder
 */
expectType<prismicT.CustomTypeModelEmbedField>({
	type: prismicT.CustomTypeModelFieldType.Embed,
	config: {
		label: "string",
		placeholder: "string",
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelEmbedField>(
	{} as prismicTI.CustomTypes.Widgets.Nestable.Embed,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 *
 * @remarks
 * `type` is omitted because implemented as an enum on `@prismicio/types-internal`.
 */
expectType<Omit<prismicTI.CustomTypes.Widgets.Nestable.Embed, "type">>(
	{} as prismicT.CustomTypeModelEmbedField,
);
