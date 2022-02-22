# [@prismicio/types](README.md) / webhook

## Interfaces

### WebhookBodyAPIUpdate

• **WebhookBodyAPIUpdate**: `Object`

Webhook payload sent when a Prismic repository content is updated.

**`see`** More details: [https://prismic.io/docs/core-concepts/webhooks](https://prismic.io/docs/core-concepts/webhooks)

**Defined in**

[webhook.ts:25](https://github.com/prismicio/prismic-types/blob/5270069/src/webhook.ts#L25)

**Properties**

| Name | Type |
| :------ | :------ |
| `apiUrl` | `string` |
| `documents` | `string`[] |
| `domain` | `string` |
| `experiments?` | `WebhookBodyAPIUpdateOperations`<`unknown`\> |
| `masks` | `WebhookBodyAPIUpdateOperations`<`WebhookBodyAPIUpdateMask`\> |
| `masterRef?` | `string` |
| `releases` | `WebhookBodyAPIUpdateOperations`<`WebhookBodyAPIUpdateRelease`\> |
| `secret` | `string` |
| `tags` | `WebhookBodyAPIUpdateOperations`<`WebhookBodyAPIUpdateTag`\> |
| `type` | ``"api-update"`` |

</details>

___

### WebhookBodyTestTrigger

• **WebhookBodyTestTrigger**: `Object`

Webhook payload sent when a test webhook action is triggered.

**`see`** More details: [https://prismic.io/docs/core-concepts/webhooks](https://prismic.io/docs/core-concepts/webhooks)

**Defined in**

[webhook.ts:43](https://github.com/prismicio/prismic-types/blob/5270069/src/webhook.ts#L43)

**Properties**

| Name | Type |
| :------ | :------ |
| `apiUrl` | `string` |
| `domain` | `string` |
| `secret` | `string` |
| `type` | ``"test-trigger"`` |

</details>

## Type aliases

### WebhookBody

Ƭ **WebhookBody**: [`WebhookBodyAPIUpdate`](#webhookbodyapiupdate) \| [`WebhookBodyTestTrigger`](#webhookbodytesttrigger)

**Defined in**

[webhook.ts:1](https://github.com/prismicio/prismic-types/blob/5270069/src/webhook.ts#L1)

## Variables

### WebhookType

• `Const` **WebhookType**: `Object`

Types of Prismic Webhooks.

**`see`** More details: [https://prismic.io/docs/core-concepts/webhooks](https://prismic.io/docs/core-concepts/webhooks)

**Type declaration**

| Name | Type |
| :------ | :------ |
| `APIUpdate` | ``"api-update"`` |
| `TestTrigger` | ``"test-trigger"`` |

**Defined in**

[webhook.ts:8](https://github.com/prismicio/prismic-types/blob/5270069/src/webhook.ts#L8)
