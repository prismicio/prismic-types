import { expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.BooleanField): true => {
	switch (typeof value) {
		case "boolean": {
			return true;
		}

		default: {
			return expectNever(value);
		}
	}
};
