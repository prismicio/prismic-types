import { expectType, expectNever } from "ts-expect";

import * as prismicTI from "@prismicio/types-internal";

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

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelLinkToMediaField>(
	{} as prismicTI.CustomTypes.Widgets.Nestable.Link & {
		// We must manually narrow `@prismicio/types-internal`'s type
		// to match a Link to Media field; `@prismicio/types-internal`
		// does not contain a Link to Media-specific type.
		config?: { select: "media" };
	},
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTI.CustomTypes.Widgets.Nestable.Link>(
	{} as prismicT.CustomTypeModelLinkToMediaField,
);
