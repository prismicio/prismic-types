import type { FieldState, AnyRegularField } from "./types";
import { GroupField } from "./group";
import { SliceZone } from "./sliceZone";

/**
 * Link Types
 */
export const LinkType = {
	Any: "Any",
	Document: "Document",
	Media: "Media",
	Web: "Web",
} as const;

/**
 * For link fields that haven't been filled
 *
 * @typeParam Type - The type of link.
 */
export type EmptyLinkField<
	Type extends typeof LinkType[keyof typeof LinkType] = typeof LinkType.Any,
> = {
	link_type: Type | string;
};

/**
 * Links that refer to Documents
 */
export interface FilledLinkToDocumentField<
	TypeEnum = string,
	LangEnum = string,
	DataInterface extends Record<
		string,
		AnyRegularField | GroupField | SliceZone
	> = never,
> {
	link_type: typeof LinkType.Document;
	id: string;
	uid?: string;
	type: TypeEnum;
	tags: string[];
	lang: LangEnum;
	url?: string;
	slug?: string;
	isBroken?: boolean;
	data?: DataInterface;
}

/**
 * Link that points to external website
 */
export interface FilledLinkToWebField {
	link_type: typeof LinkType.Web;
	url: string;
	target?: string;
}

/**
 * Link that points to media
 */
export interface FilledLinkToMediaField {
	link_type: typeof LinkType.Media;
	name: string;
	kind: string;
	url: string;
	size: string;
	height?: string | null;
	width?: string | null;
}

/**
 * Field for related documents
 *
 * @typeParam TypeEnum - Type API ID of the document.
 * @typeParam LangEnum - Language API ID of the document.
 * @typeParam DataInterface - Data fields for the document (filled in via
 *   GraphQuery of `fetchLinks`).
 * @typeParam State - State of the field which determines its shape.
 */
export type RelationField<
	TypeEnum = string,
	LangEnum = string,
	DataInterface extends Record<
		string,
		AnyRegularField | GroupField | SliceZone
	> = never,
	State extends FieldState = FieldState,
> = State extends "empty"
	? EmptyLinkField<typeof LinkType.Document>
	: FilledLinkToDocumentField<TypeEnum, LangEnum, DataInterface>;

/**
 * Link Field
 *
 * @typeParam TypeEnum - Type API ID of the document.
 * @typeParam LangEnum - Language API ID of the document.
 * @typeParam DataInterface - Data fields for the document (filled in via
 *   GraphQuery of `fetchLinks`).
 * @typeParam State - State of the field which determines its shape.
 */
export type LinkField<
	TypeEnum = string,
	LangEnum = string,
	DataInterface extends Record<
		string,
		AnyRegularField | GroupField | SliceZone
	> = never,
	State extends FieldState = FieldState,
> = State extends "empty"
	? EmptyLinkField<typeof LinkType.Any>
	:
			| RelationField<TypeEnum, LangEnum, DataInterface, State>
			| FilledLinkToWebField
			| LinkToMediaField<State>;

/**
 * Link field that points to media
 *
 * @typeParam State - State of the field which determines its shape.
 */
export type LinkToMediaField<State extends FieldState = FieldState> =
	State extends "empty"
		? EmptyLinkField<typeof LinkType.Media>
		: FilledLinkToMediaField;
