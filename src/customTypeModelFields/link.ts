import type { CustomTypeModelFieldType } from "./types";

/**
 * Type of a Link Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/link-content-relationship}
 */
export const CustomTypeModelLinkSelectType = {
	Document: "document",
	Media: "media",
	Web: "web",
} as const;

/**
 * A Content Relationship Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/link-content-relationship}
 */
export interface CustomTypeModelContentRelationshipField<
	CustomTypeIDs extends string = string,
	Tags extends string = string,
> {
	type: typeof CustomTypeModelFieldType.Link;
	config?: {
		label?: string | null;
		placeholder?: string;
		select: typeof CustomTypeModelLinkSelectType.Document;
		customtypes?: readonly CustomTypeIDs[];
		tags?: readonly Tags[];
	};
}

/**
 * A Link Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/link-content-relationship}
 */
export interface CustomTypeModelLinkField {
	type: typeof CustomTypeModelFieldType.Link;
	config?: {
		label?: string | null;
		placeholder?: string;
		select?:
			| null
			| typeof CustomTypeModelLinkSelectType[keyof typeof CustomTypeModelLinkSelectType];
		allowTargetBlank?: boolean;
	};
}

/**
 * A Link to Media Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/link-content-relationship}
 */
export interface CustomTypeModelLinkToMediaField {
	type: typeof CustomTypeModelFieldType.Link;
	config?: {
		label?: string | null;
		placeholder?: string;
		select: typeof CustomTypeModelLinkSelectType.Media;
	};
}
