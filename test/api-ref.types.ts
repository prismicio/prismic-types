import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.Ref): true => {
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

expectType<prismicT.Ref>({
	id: "string",
	ref: "string",
	label: "string",
	isMasterRef: true,
	scheduledAt: "string",
});

/**
 * Supports optional `scheduledAt` property.
 */
expectType<prismicT.Ref>({
	id: "string",
	ref: "string",
	label: "string",
	isMasterRef: true,
});
