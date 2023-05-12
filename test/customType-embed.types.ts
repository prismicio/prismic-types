import { expectType, expectNever } from "ts-expect";

import * as prismicTICustomTypes from "@prismicio/types-internal/lib/customtypes";

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
	{} as prismicTICustomTypes.Embed,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTICustomTypes.Embed>(
	{} as prismicT.CustomTypeModelEmbedField,
);
