import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelTimestampField): true => {
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

expectType<prismicT.CustomTypeModelTimestampField>({
	type: prismicT.CustomTypeModelFieldType.Timestamp,
	config: {
		label: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelTimestampField>({
	type: prismicT.CustomTypeModelFieldType.Timestamp,
	config: {
		label: "string",
		placeholder: "string",
	},
});