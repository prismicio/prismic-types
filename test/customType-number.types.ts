import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelNumberField): true => {
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

expectType<prismicT.CustomTypeModelNumberField>({
	type: prismicT.CustomTypeModelFieldType.Number,
	config: {
		label: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelNumberField>({
	type: prismicT.CustomTypeModelFieldType.Number,
	config: {
		label: "string",
		placeholder: "string",
	},
});
