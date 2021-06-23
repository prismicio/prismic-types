export enum LinkType {
	Document = "Link.document",
	File = "Link.file",
	Image = "Link.image",
	Web = "Link.web",
}

export type EmptyLinkField = null;

export interface FilledMinimalLinkToDocumentField {
	_linkType: LinkType.Document | string;
}

export interface FilledMinimalLinkToWebField {
	_linkType: LinkType.Web | string;
	url: string;
}

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
