import { expectType, expectNever } from "ts-expect";

import * as prismicTICustomTypes from "@prismicio/types-internal/lib/customtypes";

import * as prismicT from "../src";

(value: prismicT.CustomTypeModelSharedSlice): true => {
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

expectType<prismicT.CustomTypeModelSharedSlice>({
	type: prismicT.CustomTypeModelSliceType.SharedSlice,
});

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModelSharedSlice>(
	{} as prismicTICustomTypes.SharedSliceRef,
);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTICustomTypes.SharedSliceRef>(
	{} as prismicT.CustomTypeModelSharedSlice,
);
