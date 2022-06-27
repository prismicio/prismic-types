import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelGroupField): true => {
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

expectType<prismicT.CustomTypeModelGroupField>({
	type: prismicT.CustomTypeModelFieldType.Group,
	config: {
		label: "string",
		fields: {
			foo: {
				type: prismicT.CustomTypeModelFieldType.Boolean,
				config: {
					label: "string",
				},
			},
		},
	},
});

/**
 * Does not support a placeholder.
 */
expectType<prismicT.CustomTypeModelGroupField>({
	type: prismicT.CustomTypeModelFieldType.Group,
	config: {
		label: "string",
		// @ts-expect-error - Does not support a placeholder.
		placeholder: "string",
		fields: {},
	},
});

/**
 * Supports custom fields.
 */
expectType<
	prismicT.CustomTypeModelGroupField<{
		foo: prismicT.CustomTypeModelBooleanField;
	}>
>({
	type: prismicT.CustomTypeModelFieldType.Group,
	config: {
		label: "string",
		fields: {
			foo: {
				type: prismicT.CustomTypeModelFieldType.Boolean,
				config: {
					label: "string",
				},
			},
			// @ts-expect-error - Only given fields are valid.
			bar: {
				type: prismicT.CustomTypeModelFieldType.Boolean,
				config: {
					label: "string",
				},
			},
		},
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelGroupField>(
	{} as prismicTI.CustomTypes.Widgets.Group,
);
