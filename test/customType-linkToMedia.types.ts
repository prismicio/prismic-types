import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelLinkToMediaField): true => {
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

expectType<prismicT.CustomTypeModelLinkToMediaField>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
		select: prismicT.CustomTypeModelLinkSelectType.Media,
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelLinkToMediaField>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
		placeholder: "string",
		select: prismicT.CustomTypeModelLinkSelectType.Media,
	},
});
