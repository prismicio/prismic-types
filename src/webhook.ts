export type WebhookBody = WebhookBodyApiUpdate | WebhookBodyTestTrigger;

/**
 * Types of Prismic Webhooks.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/webhooks}
 */
export enum WebhookType {
	APIUpdate = "api-update",
	TestTrigger = "test-trigger",
}

interface WebhookBodyBase {
	type: WebhookType;
	domain: string;
	apiUrl: string;
	secret: string | null;
}

/**
 * Webhook payload sent when a Prismic repository content is updated.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/webhooks}
 */
export interface WebhookBodyApiUpdate extends WebhookBodyBase {
	type: WebhookType.APIUpdate;
	masterRef?: string;
	releases: WebhookOperations<WebhookRelease>;
	masks: WebhookOperations<WebhookMask>;
	tags: WebhookOperations<WebhookTag>;
	documents: string[];
	/**
	 * @deprecated Experiments are no longer supported by Prismic.
	 */
	experiments?: WebhookOperations<unknown>;
}

/**
 * Webhook payload sent when a test webhook action is triggered.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/webhooks}
 */
export interface WebhookBodyTestTrigger extends WebhookBodyBase {
	type: WebhookType.TestTrigger;
}

interface WebhookOperations<T> {
	update?: T[];
	addition?: T[];
	deletion?: T[];
}

/**
 * Metadata representing a mask (also called a Custom Type).
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/custom-types}
 */
export interface WebhookMask {
	id: string;
	label: string;
}

/**
 * Metadata representing a tag.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/document-tags}
 */
export interface WebhookTag {
	id: string;
}

/**
 * Metadata representing a Release.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/draft-plan-and-schedule-content#releases}
 */
export interface WebhookRelease {
	id: string;
	ref: string;
	label: string;
	documents: string[];
}
