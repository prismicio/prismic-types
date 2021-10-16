import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelColorField): true => {
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

expectType<prismicT.CustomTypeModelColorField>({
	type: prismicT.CustomTypeModelFieldType.Color,
	config: {
		label: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelColorField>({
	type: prismicT.CustomTypeModelFieldType.Color,
	config: {
		label: "string",
		placeholder: "string",
	},
});
