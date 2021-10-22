import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelBooleanField): true => {
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

expectType<prismicT.CustomTypeModelBooleanField>({
	type: prismicT.CustomTypeModelFieldType.Boolean,
	config: {
		label: "string",
	},
});

/**
 * Does not support a placeholder.
 */
expectType<prismicT.CustomTypeModelBooleanField>({
	type: prismicT.CustomTypeModelFieldType.Boolean,
	config: {
		label: "string",
		// @ts-expect-error - Does not support a placeholder.
		placeholder: "string",
	},
});
