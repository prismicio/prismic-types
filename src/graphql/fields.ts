export const LinkType = {
	Document: "Link.document",
	File: "Link.file",
	Image: "Link.image",
	Web: "Link.web",
} as const;

/**
 * Represents a link field without a value.
 */
export type EmptyLinkField = null;

/**
 * Link that point to Documents
 */
export interface FilledMinimalLinkToDocumentField {
	_linkType: typeof LinkType.Document | string;
}

/**
 * Link that points to external website
 */
export interface FilledMinimalLinkToWebField {
	_linkType: typeof LinkType.Web | string;
	url: string;
}

/**
 * Link that points to media (images, PDFs, or any file in the Media Library)
 */
export interface FilledMinimalLinkToMediaField {
	_linkType: typeof LinkType.File | typeof LinkType.Image | string;
	url: string;
}

/**
 * Field for related documents
 */
export type RelationField<
	ExtendedLinkToDocumentField extends FilledMinimalLinkToWebField = FilledMinimalLinkToWebField,
	IsEmpty extends boolean = boolean,
> = IsEmpty extends true ? EmptyLinkField : ExtendedLinkToDocumentField;

/**
 * Link Field
 */
export type LinkField<
	ExtendedLinkToDocumentField extends FilledMinimalLinkToDocumentField = FilledMinimalLinkToDocumentField,
	ExtendedLinkToWebField extends FilledMinimalLinkToWebField = FilledMinimalLinkToWebField,
	ExtendedLinkToMediaField extends FilledMinimalLinkToMediaField = FilledMinimalLinkToMediaField,
	IsEmpty extends boolean = boolean,
> = IsEmpty extends true
	? EmptyLinkField
	:
			| ExtendedLinkToDocumentField
			| ExtendedLinkToWebField
			| ExtendedLinkToMediaField;

/**
 * Link field that points to media
 */
export type LinkToMediaField<
	ExtendedLinkToMediaField extends FilledMinimalLinkToMediaField = FilledMinimalLinkToMediaField,
	IsEmpty extends boolean = boolean,
> = IsEmpty extends true ? EmptyLinkField : ExtendedLinkToMediaField;
