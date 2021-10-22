import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.IntegrationFields): true => {
	switch (typeof value) {
		case "object": {
			if (value === null) {
				return true;
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
expectType<prismicT.IntegrationFields>({
	id: "string",
	title: "string",
	description: "string",
	image_url: "string",
	last_update: 0,
	blob: null,
});
expectType<prismicT.IntegrationFields<unknown, "filled">>({
	id: "string",
	title: "string",
	description: "string",
	image_url: "string",
	last_update: 0,
	blob: null,
});
expectType<prismicT.IntegrationFields<unknown, "empty">>(
	// @ts-expect-error - Empty fields cannot contain a filled value.
	{
		id: "string",
		title: "string",
		description: "string",
		image_url: "string",
		last_update: 0,
		blob: null,
	},
);

/**
 * Empty state.
 */
expectType<prismicT.IntegrationFields>(null);
expectType<prismicT.IntegrationFields<unknown, "empty">>(null);
expectType<prismicT.IntegrationFields<unknown, "filled">>(
	// @ts-expect-error - Filled fields cannot contain an empty value.
	null,
);

/**
 * Supports custom blob type.
 */
expectType<prismicT.IntegrationFields<{ foo: "bar" }>>({
	id: "string",
	title: "string",
	description: "string",
	image_url: "string",
	last_update: 0,
	blob: {
		foo: "bar",
	},
});
expectType<prismicT.IntegrationFields<{ foo: "bar" }>>({
	id: "string",
	title: "string",
	description: "string",
	image_url: "string",
	last_update: 0,
	// @ts-expect-error - Blob should match the given type.
	blob: null,
});
