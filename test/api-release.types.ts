import { expectType, TypeEqual } from "ts-expect";

import * as prismicT from "../src";

/**
 * Equivelant to Ref.
 */
expectType<TypeEqual<prismicT.Release, prismicT.Ref>>(true);
