export enum LinkType {
	Document = "Link.document",
	File = "Link.file",
	Image = "Link.image",
	Web = "Link.web",
}

/**
 * For link fields that haven't been filled
 */
export type EmptyLinkField = null;

/**
 * Links that point to Documents
 */
export interface FilledMinimalLinkToDocumentField {
	_linkType: LinkType.Document | string;
}

/**
 * Link that points to external website
 */
export interface FilledMinimalLinkToWebField {
	_linkType: LinkType.Web | string;
	url: string;
}

/**
 * Link that points to  media
 */
export interface FilledMinimalLinkToMediaField {
	_linkType: LinkType.File | LinkType.Image | string;
	url: string;
}

export type RelationField<
	ExtendedLinkToDocumentField extends FilledMinimalLinkToWebField = FilledMinimalLinkToWebField,
> = ExtendedLinkToDocumentField | EmptyLinkField;

export type LinkField<
	ExtendedLinkToDocumentField extends FilledMinimalLinkToDocumentField = FilledMinimalLinkToDocumentField,
	ExtendedLinkToWebField extends FilledMinimalLinkToWebField = FilledMinimalLinkToWebField,
	ExtendedLinkToMediaField extends FilledMinimalLinkToMediaField = FilledMinimalLinkToMediaField,
> =
	| ExtendedLinkToDocumentField
	| ExtendedLinkToWebField
	| ExtendedLinkToMediaField
	| EmptyLinkField;

export type LinkToMediaField<
	ExtendedLinkToMediaField extends FilledMinimalLinkToMediaField = FilledMinimalLinkToMediaField,
> = ExtendedLinkToMediaField | EmptyLinkField;
