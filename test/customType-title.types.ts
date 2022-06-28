import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelTitleField): true => {
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

expectType<prismicT.CustomTypeModelTitleField>({
	type: prismicT.CustomTypeModelFieldType.StructuredText,
	config: {
		label: "string",
		single: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelTitleField>({
	type: prismicT.CustomTypeModelFieldType.StructuredText,
	config: {
		label: "string",
		placeholder: "string",
		single: "string",
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelTitleField>(
	{} as prismicTI.CustomTypes.Widgets.Nestable.RichText,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTI.CustomTypes.Widgets.Nestable.RichText>(
	{} as prismicT.CustomTypeModelTitleField,
);
