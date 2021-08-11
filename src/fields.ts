type EmptyObjectField = Record<string, never>;

/**
 * Types for RichTextNodes
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/rich-text-title}
 */
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
 * Base to be extended by other RT Nodes.
 */
export interface RTTextNodeBase {
	text: string;
	spans: RTInlineNode[];
}

/**
 * Rich Text `heading1` node
 */
export interface RTHeading1Node extends RTTextNodeBase {
	type: RichTextNodeType.heading1;
}

/**
 * Rich Text `heading2` node
 */
export interface RTHeading2Node extends RTTextNodeBase {
	type: RichTextNodeType.heading2;
}

/**
 * Rich Text `heading3` node
 */
export interface RTHeading3Node extends RTTextNodeBase {
	type: RichTextNodeType.heading3;
}

/**
 * Rich Text `heading4` node
 */
export interface RTHeading4Node extends RTTextNodeBase {
	type: RichTextNodeType.heading4;
}

/**
 * Rich Text `heading5` node
 */
export interface RTHeading5Node extends RTTextNodeBase {
	type: RichTextNodeType.heading5;
}

/**
 * Rich Text `heading6` node
 */
export interface RTHeading6Node extends RTTextNodeBase {
	type: RichTextNodeType.heading6;
}

/**
 * Rich Text `paragraph` node
 */
export interface RTParagraphNode extends RTTextNodeBase {
	type: RichTextNodeType.paragraph;
}

/**
 * Rich Text `preformatted` node
 */
export interface RTPreformattedNode extends RTTextNodeBase {
	type: RichTextNodeType.preformatted;
}

/**
 * Rich Text `list-item` node
 */
export interface RTListItemNode extends RTTextNodeBase {
	type: RichTextNodeType.listItem;
}

/**
 * Rich Text `o-list-item` node for ordered lists
 */
export interface RTOListItemNode extends RTTextNodeBase {
	type: RichTextNodeType.oListItem;
}

// Span nodes

/**
 * @internal Span Node base to be extended for other Span nodes
 */
export interface RTSpanNodeBase {
	start: number;
	end: number;
}
/**
 * Rich Text `strong` node
 */
export interface RTStrongNode extends RTSpanNodeBase {
	type: RichTextNodeType.strong;
}

/**
 * Rich Text `embed` node
 */
export interface RTEmNode extends RTSpanNodeBase {
	type: RichTextNodeType.em;
}

/**
 * Rich Text `label` node
 */
export interface RTLabelNode extends RTSpanNodeBase {
	type: RichTextNodeType.label;
	data: {
		label: string;
	};
}

// Media nodes

/**
 * Rich Text `image` nodes. They could link to other documents, external web
 * links and media fields
 */
export type RTImageNode = {
	type: RichTextNodeType.image;
	url: string;
	alt: string | null;
	copyright: string | null;
	dimensions: {
		width: number;
		height: number;
	};
	linkTo?:
		| FilledLinkToDocumentField
		| FilledLinkToWebField
		| FilledLinkToMediaField;
};

/**
 * Rich Text `embed` node
 */
export type RTEmbedNode = {
	type: RichTextNodeType.embed;
	oembed: EmbedField;
};

// Link nodes

/**
 * Rich Text `a` node
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/edit-rich-text#add-links}
 */
export interface RTLinkNode extends RTSpanNodeBase {
	type: RichTextNodeType.hyperlink;
	data:
		| FilledLinkToDocumentField
		| FilledLinkToWebField
		| FilledLinkToMediaField;
}

// Serialization related nodes

/**
 * Rich Text `list` node
 */
export interface RTListNode {
	type: RichTextNodeType.list;
	items: RTListItemNode[];
}

/**
 * Rich Text o-lost node
 */
export interface RTOListNode {
	type: RichTextNodeType.oList;
	items: RTOListItemNode[];
}

// This one is confusing but it's actually the inner content of a block
/**
 * Rich Text `span` node
 */
export interface RTSpanNode extends RTTextNodeBase {
	type: RichTextNodeType.span;
}

// Helpers

/**
 * Nodes from a Rich Text Field
 */
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

/**
 * Rich text nodes with text
 */
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

/**
 * Rich Text block nodes
 */
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

/**
 * Inline Rich Text Nodes
 */
export type RTInlineNode = RTStrongNode | RTEmNode | RTLabelNode | RTLinkNode;

/**
 * All Rich Text nodes
 */
export type RTAnyNode = RTBlockNode | RTInlineNode | RTSpanNode;

/**
 * All Rich Text Title Nodes
 *
 * @see Title field documentation: {@link https://prismic.io/docs/core-concepts/rich-text-title}
 */
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

/**
 * Image Field
 *
 * @see Image field documentation: {@link https://prismic.io/docs/core-concepts/image}
 */
export interface ImageField extends Record<string, unknown> {
	dimensions: { width: number; height: number } | null;
	alt: string | null;
	copyright: string | null;
	url: string | null;
}

// Links
/**
 * Link Types
 */
export enum LinkType {
	Any = "Any",
	Document = "Document",
	Media = "Media",
	Web = "Web",
}

/**
 * For link fields that haven't been filled
 *
 * @typeParam Type - The type of link.
 */
export type EmptyLinkField<Type extends LinkType = LinkType.Any> = {
	link_type: Type | string;
};

/**
 * Links that refer to Documents
 */
export interface FilledLinkToDocumentField<
	TypeEnum = string,
	LangEnum = string,
	DataInterface = never,
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
	data?: DataInterface;
}
/**
 * Link that points to external website
 */
export interface FilledLinkToWebField {
	link_type: LinkType.Web;
	url: string;
	target?: string;
}

/**
 * Link that points to media
 */
export interface FilledLinkToMediaField {
	link_type: LinkType.Media;
	name: string;
	kind: string;
	url: string;
	size: string;
	height?: string | null;
	width?: string | null;
}

/**
 * Field for related documents
 */
export type RelationField<
	TypeEnum = string,
	LangEnum = string,
	DataInterface = never,
> =
	| FilledLinkToDocumentField<TypeEnum, LangEnum, DataInterface>
	| EmptyLinkField<LinkType.Document>;

/**
 * Link Field
 */
export type LinkField<
	TypeEnum = string,
	LangEnum = string,
	DataInterface = never,
> =
	| RelationField<TypeEnum, LangEnum, DataInterface>
	| FilledLinkToWebField
	| LinkToMediaField
	| EmptyLinkField<LinkType.Any>;

/**
 * Link field that points to media
 */
export type LinkToMediaField =
	| FilledLinkToMediaField
	| EmptyLinkField<LinkType.Media>;

// Simple Fields

/**
 * A Date field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/date}
 */
export type DateField = string | null;

/**
 * Simple Timestamp Field
 */
export type TimestampField = string | null;

/**
 * A Color field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/color}
 */
export type ColorField = `#${string}` | null;

/**
 * A Number field
 *
 * More details: {@link https://prismic.io/docs/core-concepts/number}
 */
export type NumberField = number | null;

/**
 * A Key text field
 *
 * More details: {@link https://prismic.io/docs/core-concepts/key-text}
 */
export type KeyTextField = string | null;

/**
 * A Select field
 *
 * More details: {@link https://prismic.io/docs/core-concepts/select}
 */
export type SelectField<Enum = string> = Enum | null;

/**
 * A Boolean field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/boolean}
 */
export type BooleanField = boolean;

/**
 * Embed Type - Link or RichText Field
 */
export enum EmbedType {
	Link = "link",
	Rich = "rich",
}

/**
 * An Embed field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/embed}
 */
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

/**
 * A Geopoint field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/geopoint}
 */
export type GeoPointField =
	| {
			latitude: number;
			longitude: number;
	  }
	| EmptyObjectField;

// Complex
/**
 * A Group field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/group}
 */
export type GroupField<
	Fields extends Record<string, AnyRegularField> = Record<
		string,
		AnyRegularField
	>,
> = Fields[];

/**
 * Integration Field for Custom APIs More details:
 * {@link https://prismic.io/docs/core-concepts/integration-fields-setup}
 */
export type IntegrationField<Blob = unknown> = Blob | null;

/**
 * Slice - Sections of your website
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
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

/**
 * Shared Slice
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/reusing-slices#shared-slices}
 */
export type SharedSlice<
	SliceType = string,
	Variations extends SharedSliceVariation = SharedSliceVariation,
> = {
	slice_type: SliceType;
	slice_label: string | null;
} & Variations;

export interface SharedSliceVariation<
	Variation = string,
	PrimaryFields extends Record<string, AnyRegularField> = Record<
		string,
		AnyRegularField
	>,
	ItemsFields extends Record<string, AnyRegularField> = Record<
		string,
		AnyRegularField
	>,
> {
	variation: Variation;
	version: string;
	primary: PrimaryFields;
	items: ItemsFields[];
}
/**
 * Prismic Slices are sections of your website. Prismic documents contain a
 * dynamic "Slice Zone" that allows content creators to add, edit, and rearrange
 * Slices to compose dynamic layouts for any page design, such as blog posts,
 * landing pages, case studies, and tutorials.
 *
 * @see More details: {@link https://prismic.io/docs/technologies/adding-the-slicezone-component-nextjs}
 */
export type SliceZone<
	Slices extends Slice | SharedSlice = Slice | SharedSlice,
> = Slices[];

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
	| GeoPointField
	| IntegrationField;
