import { expectType, TypeOf } from "ts-expect";

import * as prismicT from "../src";

/**
 * WebhookBody supports any webhook body.
 */
expectType<TypeOf<prismicT.WebhookBody, prismicT.WebhookBodyAPIUpdate>>(true);
expectType<TypeOf<prismicT.WebhookBody, prismicT.WebhookBodyTestTrigger>>(true);
