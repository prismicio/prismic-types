import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.LinkToMediaField): true => {
	switch (typeof value) {
		case "object": {
			if (value === null) {
				return expectNever(value);
			}

			return true;
		}

		default: {
			return expectNever(value);
		}
	}
};

/**
 * Filled state.
 */
expectType<prismicT.LinkToMediaField>({
	link_type: prismicT.LinkType.Media,
	id: "string",
	name: "string",
	kind: "string",
	url: "string",
	size: "string",
	height: "string",
	width: "string",
});
expectType<prismicT.LinkToMediaField<"filled">>({
	link_type: prismicT.LinkType.Media,
	id: "string",
	name: "string",
	kind: "string",
	url: "string",
	size: "string",
	height: "string",
	width: "string",
});
expectType<prismicT.LinkToMediaField<"empty">>({
	link_type: prismicT.LinkType.Media,
	// @ts-expect-error - Empty fields cannot contain a filled value.
	id: "string",
	name: "string",
	kind: "string",
	url: "string",
	size: "string",
	height: "string",
	width: "string",
});

/**
 * Empty state.
 */
expectType<prismicT.LinkToMediaField>({
	link_type: prismicT.LinkType.Media,
});
expectType<prismicT.LinkToMediaField<"empty">>({
	link_type: prismicT.LinkType.Media,
});
expectType<prismicT.LinkToMediaField<"filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
	{
		link_type: prismicT.LinkType.Media,
	},
);
