import { expectType, expectNever, TypeOf } from "ts-expect";

import * as prismicTICustomTypes from "@prismicio/types-internal/lib/customtypes";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelRichTextField): true => {
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

/**
 * Supports multi block fields.
 */
expectType<
	TypeOf<
		prismicT.CustomTypeModelRichTextField,
		prismicT.CustomTypeModelRichTextMultiField
	>
>(true);
expectType<prismicT.CustomTypeModelRichTextMultiField>({
	type: prismicT.CustomTypeModelFieldType.StructuredText,
	config: {
		label: "string",
		multi: "string",
	},
});

/**
 * Supports single block fields.
 */
expectType<
	TypeOf<
		prismicT.CustomTypeModelRichTextField,
		prismicT.CustomTypeModelRichTextSingleField
	>
>(true);
expectType<prismicT.CustomTypeModelRichTextSingleField>({
	type: prismicT.CustomTypeModelFieldType.StructuredText,
	config: {
		label: "string",
		single: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelRichTextField>({
	type: prismicT.CustomTypeModelFieldType.StructuredText,
	config: {
		label: "string",
		placeholder: "string",
		multi: "string",
	},
});

/**
 * Supports optional allowTargetBlank.
 */
expectType<prismicT.CustomTypeModelRichTextField>({
	type: prismicT.CustomTypeModelFieldType.StructuredText,
	config: {
		label: "string",
		multi: "string",
		allowTargetBlank: true,
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelRichTextField>(
	{} as prismicTICustomTypes.RichText,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTICustomTypes.RichText>(
	{} as prismicT.CustomTypeModelRichTextField,
);
