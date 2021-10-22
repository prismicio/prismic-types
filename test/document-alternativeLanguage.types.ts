import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.AlternateLanguage): true => {
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

expectType<prismicT.AlternateLanguage>({
	id: "string",
	uid: "string",
	type: "string",
	lang: "string",
});

/**
 * Supports optional UID.
 */
expectType<prismicT.AlternateLanguage>({
	id: "string",
	type: "string",
	lang: "string",
});

/**
 * Supports custom type.
 */
expectType<prismicT.AlternateLanguage<"foo">>({
	id: "string",
	type: "foo",
	lang: "string",
});
expectType<prismicT.AlternateLanguage<"foo">>({
	id: "string",
	// @ts-expect-error - Document type must match the given type.
	type: "string",
	lang: "string",
});

/**
 * Supports custom language.
 */
expectType<prismicT.AlternateLanguage<string, "fr-fr">>({
	id: "string",
	type: "string",
	lang: "fr-fr",
});
expectType<prismicT.AlternateLanguage<string, "fr-fr">>({
	id: "string",
	type: "string",
	// @ts-expect-error - Document lang must match the given language.
	lang: "string",
});
