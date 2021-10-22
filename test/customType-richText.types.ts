import { expectType, expectNever, TypeOf } from "ts-expect";

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
expectType<prismicT.CustomTypeModelRichTextField>({
	type: prismicT.CustomTypeModelFieldType.StructuredText,
	config: {
		label: "string",
		multi: "string",
		// @ts-expect-error - Property must be `true` or `undefined`.
		allowTargetBlank: false,
	},
});
