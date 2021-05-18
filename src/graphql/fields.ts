export enum LinkType {
	Document = "Link.document",
	File = "Link.file",
	Image = "Link.image",
	Web = "Link.web"
}

export type EmptyLinkField = null;

export interface FilledMinimalLinkToDocumentField {
	_linkType: "Link.document";
}

export interface FilledMinimalLinkToWebField {
	_linkType: "Link.web";
	url: string;
}

export interface FilledMinimalLinkToMediaField {
	_linkType: "Link.file" | "Link.image";
	url: string;
}

export type RelationField<
	ExtendedLinkToDocumentField extends FilledMinimalLinkToWebField = FilledMinimalLinkToWebField
> = ExtendedLinkToDocumentField | EmptyLinkField;

export type LinkField<
	ExtendedLinkToDocumentField extends FilledMinimalLinkToDocumentField = FilledMinimalLinkToDocumentField,
	ExtendedLinkToWebField extends FilledMinimalLinkToWebField = FilledMinimalLinkToWebField,
	ExtendedLinkToMediaField extends FilledMinimalLinkToMediaField = FilledMinimalLinkToMediaField
> =
	| ExtendedLinkToDocumentField
	| ExtendedLinkToWebField
	| ExtendedLinkToMediaField
	| EmptyLinkField;

export type LinkToMediaField<
	ExtendedLinkToMediaField extends FilledMinimalLinkToMediaField = FilledMinimalLinkToMediaField
> = ExtendedLinkToMediaField | EmptyLinkField;
