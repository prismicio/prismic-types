type EmptyObjectField = Record<string, never>;

// RichText & Title
export const enum RichTextNodeType {
	heading1 = "heading1",
	heading2 = "heading2",
	heading3 = "heading3",
	heading4 = "heading4",
	heading5 = "heading5",
	heading6 = "heading6",
	paragraph = "paragraph",
	preformatted = "preformatted",
	strong = "strong",
	em = "em",
	listItem = "list-item",
	oListItem = "o-list-item",
	list = "group-list-item",
	oList = "group-o-list-item",
	image = "image",
	embed = "embed",
	hyperlink = "hyperlink",
	label = "label",
	span = "span",
}

// Text nodes

/**
 * @internal
 */
export interface RTTextNodeBase {
	text: string;
	spans: RTInlineNode[];
}

export interface RTHeading1Node extends RTTextNodeBase {
	type: RichTextNodeType.heading1;
}
export interface RTHeading2Node extends RTTextNodeBase {
	type: RichTextNodeType.heading2;
}
export interface RTHeading3Node extends RTTextNodeBase {
	type: RichTextNodeType.heading3;
}
export interface RTHeading4Node extends RTTextNodeBase {
	type: RichTextNodeType.heading4;
}
export interface RTHeading5Node extends RTTextNodeBase {
	type: RichTextNodeType.heading5;
}
export interface RTHeading6Node extends RTTextNodeBase {
	type: RichTextNodeType.heading6;
}
export interface RTParagraphNode extends RTTextNodeBase {
	type: RichTextNodeType.paragraph;
}
export interface RTPreformattedNode extends RTTextNodeBase {
	type: RichTextNodeType.preformatted;
}
export interface RTListItemNode extends RTTextNodeBase {
	type: RichTextNodeType.listItem;
}
export interface RTOListItemNode extends RTTextNodeBase {
	type: RichTextNodeType.oListItem;
}

// Span nodes

/**
 * @internal
 */
export interface RTSpanNodeBase {
	start: number;
	end: number;
}

export interface RTStrongNode extends RTSpanNodeBase {
	type: RichTextNodeType.strong;
}
export interface RTEmNode extends RTSpanNodeBase {
	type: RichTextNodeType.em;
}
export interface RTLabelNode extends RTSpanNodeBase {
	type: RichTextNodeType.label;
	data: {
		label: string;
	};
}

// Media nodes
export type RTImageNode = {
	type: RichTextNodeType.image;
	url: string;
	alt: string;
	copyright: string | null;
	dimensions: {
		width: number;
		height: number;
	};
};
export type RTEmbedNode = {
	type: RichTextNodeType.embed;
	oembed: Record<string, string | number | null> & {
		html: string;
	};
};

// Link nodes
export interface RTLinkNode extends RTSpanNodeBase {
	type: RichTextNodeType.hyperlink;
	data:
		| FilledLinkToDocumentField
		| FilledLinkToWebField
		| FilledLinkToMediaField;
}

// Serialization related nodes
export interface RTListNode {
	type: RichTextNodeType.list;
	items: RTListItemNode[];
}
export interface RTOListNode {
	type: RichTextNodeType.oList;
	items: RTOListItemNode[];
}
// This one is confusing but it's actually the inner content of a block
export interface RTSpanNode extends RTTextNodeBase {
	type: RichTextNodeType.span;
}

// Helpers

// Nodes from a rich text field
export type RTNode =
	| RTHeading1Node
	| RTHeading2Node
	| RTHeading3Node
	| RTHeading4Node
	| RTHeading5Node
	| RTHeading6Node
	| RTParagraphNode
	| RTPreformattedNode
	| RTListItemNode
	| RTOListItemNode
	| RTImageNode
	| RTEmbedNode;

// Nodes with text
export type RTTextNode =
	| RTHeading1Node
	| RTHeading2Node
	| RTHeading3Node
	| RTHeading4Node
	| RTHeading5Node
	| RTHeading6Node
	| RTParagraphNode
	| RTPreformattedNode
	| RTListItemNode
	| RTOListItemNode;

// Block nodes
export type RTBlockNode =
	| RTHeading1Node
	| RTHeading2Node
	| RTHeading3Node
	| RTHeading4Node
	| RTHeading5Node
	| RTHeading6Node
	| RTParagraphNode
	| RTPreformattedNode
	| RTListItemNode
	| RTOListItemNode
	| RTListNode
	| RTOListNode
	| RTImageNode
	| RTEmbedNode;

// Inline nodes
export type RTInlineNode = RTStrongNode | RTEmNode | RTLabelNode | RTLinkNode;

// All nodes
export type RTAnyNode = RTBlockNode | RTInlineNode | RTSpanNode;

// Title field nodes
export type TitleField = [
	| RTHeading1Node
	| RTHeading2Node
	| RTHeading3Node
	| RTHeading4Node
	| RTHeading5Node
	| RTHeading6Node,
];

export type RichTextField = RTNode[];

// Image

export interface ImageField extends Record<string, unknown> {
	dimensions: { width: number; height: number } | null;
	alt: string | null;
	copyright: string | null;
	url: string | null;
}

// Links

export enum LinkType {
	Any = "Any",
	Document = "Document",
	Media = "Media",
	Web = "Web",
}

export type EmptyLinkField<Type extends LinkType = LinkType.Any> = {
	link_type: Type | string;
};

export interface FilledLinkToDocumentField<
	TypeEnum = string,
	LangEnum = string,
> {
	link_type: LinkType.Document;
	id: string;
	uid?: string;
	type: TypeEnum;
	tags: string[];
	lang: LangEnum;
	url?: string;
	slug?: string;
	isBroken?: boolean;
}

export interface FilledLinkToWebField {
	link_type: LinkType.Web;
	url: string;
	target?: string;
}

export interface FilledLinkToMediaField {
	link_type: LinkType.Media;
	name: string;
	kind: string;
	url: string;
	size: string;
	height?: string | null;
	width?: string | null;
}

export type RelationField<TypeEnum = string, LangEnum = string> =
	| FilledLinkToDocumentField<TypeEnum, LangEnum>
	| EmptyLinkField<LinkType.Document>;

export type LinkField<TypeEnum = string, LangEnum = string> =
	| RelationField<TypeEnum, LangEnum>
	| FilledLinkToWebField
	| LinkToMediaField
	| EmptyLinkField<LinkType.Any>;

export type LinkToMediaField =
	| FilledLinkToMediaField
	| EmptyLinkField<LinkType.Media>;

// Simple fields

export type DateField = string | null;

export type TimestampField = string | null;

export type ColorField = `#${string}` | null;

export type NumberField = number | null;

export type KeyTextField = string | null;

export type SelectField<Enum = string> = Enum | null;

export type BooleanField = boolean;

export enum EmbedType {
	Link = "link",
	Rich = "rich",
}

export type EmbedField =
	| {
			url: string;
			width?: number | null;
			height?: number | null;
			embed_url: string;
			type: EmbedType;
			version: string;
			title: string | null;

			author_name: string | null;
			author_url: string | null;

			provider_name: string;
			cache_age: number | null;

			thumbnail_url: string | null;
			thumbnail_width: number | null;
			thumbnail_height: number | null;

			html: string | null;
	  }
	| EmptyObjectField;

export type GeoPointField =
	| {
			latitude: number;
			longitude: number;
	  }
	| EmptyObjectField;

// Complex

export type GroupField<
	Fields extends Record<string, AnyRegularField> = Record<
		string,
		AnyRegularField
	>,
> = Fields[];

// TODO: Might be prone to change really soon with variations!
export interface Slice<
	SliceType = string,
	PrimaryFields extends Record<string, AnyRegularField> = Record<
		string,
		AnyRegularField
	>,
	ItemsFields extends Record<string, AnyRegularField> = Record<
		string,
		AnyRegularField
	>,
> {
	slice_type: SliceType;
	slice_label: string | null;
	primary: PrimaryFields;
	items: ItemsFields[];
}

export type SliceZone<Slices extends Slice = Slice> = Slices[];

// Misc

export type AnyRegularField =
	| TitleField
	| RichTextField
	| ImageField
	| RelationField
	| LinkField
	| LinkToMediaField
	| DateField
	| TimestampField
	| ColorField
	| NumberField
	| KeyTextField
	| SelectField
	| BooleanField
	| EmbedField
	| GeoPointField;
