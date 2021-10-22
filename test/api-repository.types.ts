import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.Repository): true => {
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

expectType<prismicT.Repository>({
	refs: [
		{
			id: "string",
			ref: "string",
			label: "string",
			isMasterRef: true,
			scheduledAt: "string",
		},
	],
	integrationFieldsRef: "string",
	languages: [{ id: "string", name: "string" }],
	types: { foo: "string" },
	tags: ["string"],
	forms: {
		foo: {
			method: "GET",
			action: "string",
			fields: {
				foo: {
					type: "String",
					multiple: true,
					default: "string",
				},
			},
			enctype: "string",
			name: "string",
			rel: "string",
		},
	},
	oauth_initiate: "string",
	oauth_token: "string",
	version: "string",
	license: "string",
	experiments: {},
	bookmarks: {
		foo: "string",
	},
});
