import { expectType, expectNever } from "ts-expect";

import * as prismicTICustomTypes from "@prismicio/types-internal/lib/customtypes";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelSelectField): true => {
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

expectType<prismicT.CustomTypeModelSelectField>({
	type: prismicT.CustomTypeModelFieldType.Select,
	config: {
		label: "string",
		options: ["string"],
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelSelectField>({
	type: prismicT.CustomTypeModelFieldType.Select,
	config: {
		label: "string",
		placeholder: "string",
		options: ["string"],
	},
});

/**
 * Supports optional default value.
 */
expectType<prismicT.CustomTypeModelSelectField>({
	type: prismicT.CustomTypeModelFieldType.Select,
	config: {
		label: "string",
		placeholder: "string",
		options: ["string"],
		default_value: "string",
	},
});

/**
 * Supports custom options type.
 */
expectType<prismicT.CustomTypeModelSelectField<"foo">>({
	type: prismicT.CustomTypeModelFieldType.Select,
	config: {
		label: "string",
		placeholder: "string",
		options: [
			"foo",
			// @ts-expect-error - Only given options are valid.
			"bar",
		],
	},
});

/**
 * Supports custom default value type.
 */
expectType<prismicT.CustomTypeModelSelectField<string, "foo">>({
	type: prismicT.CustomTypeModelFieldType.Select,
	config: {
		label: "string",
		placeholder: "string",
		options: ["string"],
		default_value: "foo",
	},
});

/**
 * Default value must be one of the given options.
 */
expectType<prismicT.CustomTypeModelSelectField<"foo">>({
	type: prismicT.CustomTypeModelFieldType.Select,
	config: {
		label: "string",
		placeholder: "string",
		options: ["foo"],
		default_value: "foo",
	},
});
expectType<prismicT.CustomTypeModelSelectField<"foo">>({
	type: prismicT.CustomTypeModelFieldType.Select,
	config: {
		label: "string",
		placeholder: "string",
		options: ["foo"],
		// @ts-expect-error - Default value must be one of the given options.
		default_value: "bar",
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelSelectField>(
	{} as prismicTICustomTypes.Select,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTICustomTypes.Select>(
	{} as prismicT.CustomTypeModelSelectField,
);
