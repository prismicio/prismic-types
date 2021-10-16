import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelDateField): true => {
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

expectType<prismicT.CustomTypeModelDateField>({
	type: prismicT.CustomTypeModelFieldType.Date,
	config: {
		label: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelDateField>({
	type: prismicT.CustomTypeModelFieldType.Date,
	config: {
		label: "string",
		placeholder: "string",
	},
});
