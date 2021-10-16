import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelEmbedField): true => {
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

expectType<prismicT.CustomTypeModelEmbedField>({
	type: prismicT.CustomTypeModelFieldType.Embed,
	config: {
		label: "string",
	},
});

/**
 * Supports optional placeholder
 */
expectType<prismicT.CustomTypeModelEmbedField>({
	type: prismicT.CustomTypeModelFieldType.Embed,
	config: {
		label: "string",
		placeholder: "string",
	},
});
