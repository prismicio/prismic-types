import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.Language): true => {
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

expectType<prismicT.Language>({
	id: "string",
	name: "string",
});
