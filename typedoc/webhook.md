# [@prismicio/types](README.md) / webhook

## Interfaces

### WebhookBodyAPIUpdate

• **WebhookBodyAPIUpdate**: `Object`

Webhook payload sent when a Prismic repository content is updated.

**`see`** More details: [https://prismic.io/docs/core-concepts/webhooks](https://prismic.io/docs/core-concepts/webhooks)

**Defined in**

[webhook.ts:25](https://github.com/prismicio/prismic-types/blob/d15dccd/src/webhook.ts#L25)

**Properties**

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `apiUrl` | `string` |
| `secret` | `string` |
| `type` | ``"api-update"`` |
| `masterRef?` | `string` |
| `releases` | `WebhookBodyAPIUpdateOperations`<`WebhookBodyAPIUpdateRelease`\> |
| `masks` | `WebhookBodyAPIUpdateOperations`<`WebhookBodyAPIUpdateMask`\> |
| `tags` | `WebhookBodyAPIUpdateOperations`<`WebhookBodyAPIUpdateTag`\> |
| `documents` | `string`[] |
| `experiments?` | `WebhookBodyAPIUpdateOperations`<`unknown`\> |

</details>

___

### WebhookBodyTestTrigger

• **WebhookBodyTestTrigger**: `Object`

Webhook payload sent when a test webhook action is triggered.

**`see`** More details: [https://prismic.io/docs/core-concepts/webhooks](https://prismic.io/docs/core-concepts/webhooks)

**Defined in**

[webhook.ts:43](https://github.com/prismicio/prismic-types/blob/d15dccd/src/webhook.ts#L43)

**Properties**

| Name | Type |
| :------ | :------ |
| `domain` | `string` |
| `apiUrl` | `string` |
| `secret` | `string` |
| `type` | ``"test-trigger"`` |

</details>

## Type aliases

### WebhookBody

Ƭ **WebhookBody**: [`WebhookBodyAPIUpdate`](#webhookbodyapiupdate) \| [`WebhookBodyTestTrigger`](#webhookbodytesttrigger)

**Defined in**

[webhook.ts:1](https://github.com/prismicio/prismic-types/blob/d15dccd/src/webhook.ts#L1)

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

[webhook.ts:8](https://github.com/prismicio/prismic-types/blob/d15dccd/src/webhook.ts#L8)
