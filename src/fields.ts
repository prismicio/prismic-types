type EmptyObjectField = Record<string, never>;

/**
 * Valid states for fields. Not all fields use this type (e.g. BooleanField).
 */
export type FieldState = "empty" | "filled";

/**
 * Types for RichTextNodes
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/rich-text-title}
 */
export const RichTextNodeType = {
	heading1: "heading1",
	heading2: "heading2",
	heading3: "heading3",
	heading4: "heading4",
	heading5: "heading5",
	heading6: "heading6",
	paragraph: "paragraph",
	preformatted: "preformatted",
	strong: "strong",
	em: "em",
	listItem: "list-item",
	oListItem: "o-list-item",
	list: "group-list-item",
	oList: "group-o-list-item",
	image: "image",
	embed: "embed",
	hyperlink: "hyperlink",
	label: "label",
	span: "span",
} as const;

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
	type: typeof RichTextNodeType.heading1;
}

/**
 * Rich Text `heading2` node
 */
export interface RTHeading2Node extends RTTextNodeBase {
	type: typeof RichTextNodeType.heading2;
}

/**
 * Rich Text `heading3` node
 */
export interface RTHeading3Node extends RTTextNodeBase {
	type: typeof RichTextNodeType.heading3;
}

/**
 * Rich Text `heading4` node
 */
export interface RTHeading4Node extends RTTextNodeBase {
	type: typeof RichTextNodeType.heading4;
}

/**
 * Rich Text `heading5` node
 */
export interface RTHeading5Node extends RTTextNodeBase {
	type: typeof RichTextNodeType.heading5;
}

/**
 * Rich Text `heading6` node
 */
export interface RTHeading6Node extends RTTextNodeBase {
	type: typeof RichTextNodeType.heading6;
}

/**
 * Rich Text `paragraph` node
 */
export interface RTParagraphNode extends RTTextNodeBase {
	type: typeof RichTextNodeType.paragraph;
}

/**
 * Rich Text `preformatted` node
 */
export interface RTPreformattedNode extends RTTextNodeBase {
	type: typeof RichTextNodeType.preformatted;
}

/**
 * Rich Text `list-item` node
 */
export interface RTListItemNode extends RTTextNodeBase {
	type: typeof RichTextNodeType.listItem;
}

/**
 * Rich Text `o-list-item` node for ordered lists
 */
export interface RTOListItemNode extends RTTextNodeBase {
	type: typeof RichTextNodeType.oListItem;
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
	type: typeof RichTextNodeType.strong;
}

/**
 * Rich Text `embed` node
 */
export interface RTEmNode extends RTSpanNodeBase {
	type: typeof RichTextNodeType.em;
}

/**
 * Rich Text `label` node
 */
export interface RTLabelNode extends RTSpanNodeBase {
	type: typeof RichTextNodeType.label;
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
	type: typeof RichTextNodeType.image;
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
	type: typeof RichTextNodeType.embed;
	oembed: EmbedField;
};

// Link nodes

/**
 * Rich Text `a` node
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/edit-rich-text#add-links}
 */
export interface RTLinkNode extends RTSpanNodeBase {
	type: typeof RichTextNodeType.hyperlink;
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
	type: typeof RichTextNodeType.list;
	items: RTListItemNode[];
}

/**
 * Rich Text o-lost node
 */
export interface RTOListNode {
	type: typeof RichTextNodeType.oList;
	items: RTOListItemNode[];
}

// This one is confusing but it's actually the inner content of a block
/**
 * Rich Text `span` node
 */
export interface RTSpanNode extends RTTextNodeBase {
	type: typeof RichTextNodeType.span;
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
export type TitleField<State extends FieldState = FieldState> =
	State extends "empty"
		? []
		: [
				Omit<
					| RTHeading1Node
					| RTHeading2Node
					| RTHeading3Node
					| RTHeading4Node
					| RTHeading5Node
					| RTHeading6Node,
					"spans"
				> & {
					spans: [];
				},
		  ];

export type RichTextField<State extends FieldState = FieldState> =
	State extends "empty" ? [] : [RTNode, ...RTNode[]];

// Image

/**
 * An individual image within an Image field. The base image and each thumbnail
 * uses this type.
 *
 * @typeParam State - State of the field which determines its shape.
 * @see {@link ImageField} for a full Image field type.
 */
export type ImageFieldImage<State extends FieldState = FieldState> =
	State extends "empty" ? EmptyImageFieldImage : FilledImageFieldImage;

export interface FilledImageFieldImage {
	url: string;
	dimensions: {
		width: number;
		height: number;
	};
	alt: string | null;
	copyright: string | null;
}

export interface EmptyImageFieldImage {
	url?: null;
	dimensions?: null;
	alt?: null;
	copyright?: null;
}

/**
 * Useful to flatten the type output to improve type hints shown in editors. And
 * also to transform an interface into a type to aide with assignability.
 *
 * Taken from the `type-fest` package.
 *
 * @typeParam T - The type to simplify.
 * @see https://github.com/sindresorhus/type-fest/blob/cbd7ec510bd136ac045bbc74e391ee686b8a9a2f/source/simplify.d.ts
 */
type Simplify<T> = { [P in keyof T]: T[P] };

/**
 * Image Field
 *
 * @typeParam ThumbnailNames - Names of thumbnails. If the field does not
 *   contain thumbnails, `null` can be used to "disable" thumbnail fields.
 * @typeParam State - State of the field which determines its shape.
 * @see Image field documentation: {@link https://prismic.io/docs/core-concepts/image}
 */
export type ImageField<
	ThumbnailNames extends string | null = never,
	State extends FieldState = FieldState,
> = Simplify<
	ImageFieldImage<State> &
		Record<
			ThumbnailNames extends string
				? Exclude<ThumbnailNames, keyof ImageFieldImage>
				: never,
			ImageFieldImage<State>
		>
>;

// Links

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

// Embed

/**
 * oEmbed 1.0 possible types.
 *
 * @see oEmbed specification: {@link https://oembed.com}
 */
export const OEmbedType = {
	Photo: "photo",
	Video: "video",
	Link: "link",
	Rich: "rich",
} as const;

/**
 * oEmbed response base fields. Those are every mandatory fields an oEmbed
 * response must feature.
 *
 * @see oEmbed specification: {@link https://oembed.com}
 */
type OEmbedBase<TType extends typeof OEmbedType[keyof typeof OEmbedType]> = {
	/**
	 * oEmbed resource type.
	 */
	type: TType;

	/**
	 * oEmbed version number, this must be "1.0".
	 */
	version: string;
};

/**
 * oEmbed response extra fields. Those are every non-mandatory and unknown
 * fields an oEmbed response can feature.
 *
 * @see oEmbed specification: {@link https://oembed.com}
 */
export type OEmbedExtra = {
	/**
	 * oEmbed text title, describing the resource.
	 */
	title?: string | null;

	/**
	 * oEmbed resource author/owner name.
	 */
	author_name?: string | null;

	/**
	 * oEmbed resource author/owner URL.
	 */
	author_url?: string | null;

	/**
	 * oEmbed resource provider name.
	 */
	provider_name?: string | null;

	/**
	 * oEmbed resource provider URL.
	 */
	provider_url?: string | null;

	/**
	 * oEmbed suggested cache lifetime for the resource, in seconds.
	 */
	cache_age?: number | null;

	/**
	 * oEmbed resource thumbnail URL.
	 */
	thumbnail_url?: string | null;

	/**
	 * oEmbed resource thumbnail width.
	 */
	thumbnail_width?: number | null;

	/**
	 * oEmbed resource thumbnail height.
	 */
	thumbnail_height?: number | null;

	/**
	 * Providers may optionally include any parameters not specified in this
	 * document (so long as they use the same key-value format) and consumers may
	 * choose to ignore these. Consumers must ignore parameters they do not understand.
	 *
	 * @see oEmbed specification: {@link https://oembed.com}
	 */
	[key: string]: unknown | null;
};

/**
 * oEmbed photo type. Those are every mandatory fields an oEmbed photo response
 * must feature.
 *
 * @see oEmbed specification: {@link https://oembed.com}
 */
export type PhotoOEmbed = OEmbedBase<typeof OEmbedType.Photo> & {
	/**
	 * oEmbed source URL of the image.
	 */
	url: string;

	/**
	 * oEmbed width in pixels of the image.
	 */
	width: number;

	/**
	 * oEmbed height in pixels of the image.
	 */
	height: number;
};

/**
 * oEmbed video type. Those are every mandatory fields an oEmbed video response
 * must feature.
 *
 * @see oEmbed specification: {@link https://oembed.com}
 */
export type VideoOEmbed = OEmbedBase<typeof OEmbedType.Video> & {
	/**
	 * oEmbed HTML required to embed a video player.
	 */
	html: string;

	/**
	 * oEmbed width in pixels required to display the HTML.
	 */
	width: number;

	/**
	 * oEmbed height in pixels required to display the HTML.
	 */
	height: number;
};

/**
 * oEmbed link type. Those are every mandatory fields an oEmbed link response
 * must feature.
 *
 * @see oEmbed specification: {@link https://oembed.com}
 */
export type LinkOEmbed = OEmbedBase<typeof OEmbedType.Link>;

/**
 * oEmbed rich type. Those are every mandatory fields an oEmbed rich response
 * must feature.
 *
 * @see oEmbed specification: {@link https://oembed.com}
 */
export type RichOEmbed = OEmbedBase<typeof OEmbedType.Rich> & {
	/**
	 * oEmbed HTML required to display the resource.
	 */
	html: string;

	/**
	 * oEmbed width in pixels required to display the HTML.
	 */
	width: number;

	/**
	 * oEmbed height in pixels required to display the HTML.
	 */
	height: number;
};

/**
 * Any of the possible types of oEmbed response. Those contains only mandatory
 * fields their respective oEmbed response type must feature.
 *
 * @see oEmbed specification: {@link https://oembed.com}
 */
export type AnyOEmbed = PhotoOEmbed | VideoOEmbed | LinkOEmbed | RichOEmbed;

/**
 * An Embed field.
 *
 * @typeParam Data - Data provided by the URL's oEmbed provider.
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/embed}
 */
export type EmbedField<
	Data extends AnyOEmbed = AnyOEmbed & OEmbedExtra,
	State extends FieldState = FieldState,
> = State extends "empty"
	? EmptyObjectField
	: Data & {
			embed_url: string;
			html: string | null;
	  };

// Simple Fields

/**
 * A Date field.
 *
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/date}
 */
export type DateField<State extends FieldState = FieldState> =
	State extends "empty" ? null : `${number}-${number}-${number}`;

/**
 * Simple Timestamp Field
 *
 * @typeParam State - State of the field which determines its shape.
 */
export type TimestampField<State extends FieldState = FieldState> =
	State extends "empty"
		? null
		: `${DateField<"filled">}T${number}:${number}:${number}+${number}`;

/**
 * A Color field.
 *
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/color}
 */
export type ColorField<State extends FieldState = FieldState> =
	State extends "empty" ? null : `#${string}`;

/**
 * A Number field
 *
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/number}
 */
export type NumberField<State extends FieldState = FieldState> =
	State extends "empty" ? null : number;

/**
 * A Key text field
 *
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/key-text}
 */
export type KeyTextField<State extends FieldState = FieldState> =
	State extends "empty" ? null | "" : string;

/**
 * A Select field
 *
 * @typeParam Enum - Selectable options for the field.
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/select}
 */
export type SelectField<
	Enum extends string = string,
	State extends FieldState = FieldState,
> = State extends "empty" ? null : Enum;

/**
 * A Boolean field.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/boolean}
 */
export type BooleanField = boolean;

/**
 * A Geopoint field.
 *
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/geopoint}
 */
export type GeoPointField<State extends FieldState = FieldState> =
	State extends "empty"
		? EmptyObjectField
		: {
				latitude: number;
				longitude: number;
		  };

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
	State extends FieldState = FieldState,
> = State extends "empty" ? [] : [Fields, ...Fields[]];

/**
 * Integration Fields for Custom APIs
 *
 * @typeParam Blob - Data from the integrated API.
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/integration-fields-setup}
 */
export type IntegrationFields<
	Blob = unknown,
	State extends FieldState = FieldState,
> = State extends "empty"
	? null
	: {
			id: string;
			title?: string;
			description?: string;
			image_url?: string;
			last_update: number;
			blob: Blob;
	  };

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
	slice_label: null;
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
	State extends FieldState = FieldState,
> = State extends "empty" ? [] : [Slices, ...Slices[]];

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
	| IntegrationFields;
