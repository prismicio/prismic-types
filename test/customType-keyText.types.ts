import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelKeyTextField): true => {
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

expectType<prismicT.CustomTypeModelKeyTextField>({
	type: prismicT.CustomTypeModelFieldType.Text,
	config: {
		label: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelKeyTextField>({
	type: prismicT.CustomTypeModelFieldType.Text,
	config: {
		label: "string",
		placeholder: "string",
	},
});