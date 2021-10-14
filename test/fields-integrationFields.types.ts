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
	// @ts-expect-error
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
	// @ts-expect-error
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
	// @ts-expect-error
	blob: null,
});
