import { expectType, expectNever } from "ts-expect";

import * as prismicT from "../src";

(value: prismicT.GeoPointField): true => {
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

/**
 * Filled state.
 */
expectType<prismicT.GeoPointField>({
	longitude: 0,
	latitude: 0,
});
expectType<prismicT.GeoPointField<"filled">>({
	longitude: 0,
	latitude: 0,
});
expectType<prismicT.GeoPointField<"empty">>({
	// @ts-expect-error
	longitude: 0,
	// @ts-expect-error
	latitude: 0,
});

/**
 * Empty state.
 */
expectType<prismicT.GeoPointField>({});
expectType<prismicT.GeoPointField<"empty">>({});
expectType<prismicT.GeoPointField<"filled">>(
	// @ts-expect-error
	{},
);
