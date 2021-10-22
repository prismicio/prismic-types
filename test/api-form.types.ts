import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.Form): true => {
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

expectType<prismicT.Form>({
	method: "GET",
	enctype: "string",
	action: "string",
	name: "string",
	rel: "string",
	fields: {
		foo: {
			type: "String",
			multiple: true,
			default: "string",
		},
	},
});

/**
 * `method` must be "GET".
 */
expectType<prismicT.Form>({
	// @ts-expect-error -`method` must be "GET".
	method: "string",
	enctype: "string",
	action: "string",
	name: "string",
	rel: "string",
	fields: {},
});

/**
 * Supports optional `name` and `rel` properties.
 */
expectType<prismicT.Form>({
	method: "GET",
	enctype: "string",
	action: "string",
	fields: {},
});
