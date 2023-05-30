import type { CustomTypeModelFieldType } from "./types";

/**
 * An Integration Fields Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/integration-fields}
 */
export interface CustomTypeModelIntegrationField {
	type: typeof CustomTypeModelFieldType.Integration;
	config?: {
		label?: string | null;
		placeholder?: string;
		catalog?: string;
	};
}
