import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelIntegrationFieldsField): true => {
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

expectType<prismicT.CustomTypeModelIntegrationFieldsField>({
	type: prismicT.CustomTypeModelFieldType.IntegrationFields,
	config: {
		label: "string",
		catalog: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelIntegrationFieldsField>({
	type: prismicT.CustomTypeModelFieldType.IntegrationFields,
	config: {
		label: "string",
		placeholder: "string",
		catalog: "string",
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelIntegrationFieldsField>(
	{} as prismicTI.CustomTypes.Widgets.Nestable.IntegrationField,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTI.CustomTypes.Widgets.Nestable.IntegrationField>(
	{} as prismicT.CustomTypeModelIntegrationFieldsField,
);
