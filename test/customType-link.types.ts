import { expectType, expectNever } from "ts-expect";

import * as prismicTICustomTypes from "@prismicio/types-internal/lib/customtypes";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelLinkField): true => {
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

expectType<prismicT.CustomTypeModelLinkField>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
	},
});

/**
 * Supports optional placeholder.
 */
expectType<prismicT.CustomTypeModelLinkField>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
		placeholder: "string",
	},
});

/**
 * Supports optional null `select` option.
 */
expectType<prismicT.CustomTypeModelLinkField>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
		select: null,
	},
});

/**
 * Supports optional allowTargetBlank.
 */
expectType<prismicT.CustomTypeModelLinkField>({
	type: prismicT.CustomTypeModelFieldType.Link,
	config: {
		label: "string",
		allowTargetBlank: true,
	},
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelLinkField>({} as prismicTICustomTypes.Link);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTICustomTypes.Link>({} as prismicT.CustomTypeModelLinkField);
