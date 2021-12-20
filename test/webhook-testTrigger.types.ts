import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.WebhookBodyTestTrigger): true => {
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

expectType<prismicT.WebhookBodyTestTrigger>({
	type: "test-trigger",
	domain: "string",
	apiUrl: "string",
	secret: "string",
});

/**
 * Secret is nullable.
 */
expectType<prismicT.WebhookBodyTestTrigger["secret"]>(null);
