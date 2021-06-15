type EmptyObjectField = { [key: string]: never };

export interface RichTextSpan {
	start: number;
	end: number;
	type: string;
	data?: LinkField | string;
}

export interface RichTextBlock {
	type: string;
	text: string;
	spans: RichTextSpan[];
}

export type TitleField = [RichTextBlock];

export type RichTextField = RichTextBlock[];

export interface ImageField {
	dimensions: { width: number; height: number } | null;
	alt: string | null;
	copyright: string | null;
	url: string | null;
	[key: string]: unknown;
}

export enum LinkType {
	Any = "Any",
	Document = "Document",
	Media = "Media",
	Web = "Web"
}

export type EmptyLinkField<Type extends LinkType = LinkType.Any> = {
	link_type: Type | string;
};

export interface FilledLinkToDocumentField<
	TypeEnum = string,
	LangEnum = string
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

export type DateField = string | null;

export type TimestampField = string | null;

export type ColorField = `#${string}` | null;

export type NumberField = number | null;

export type KeyTextField = string | null;

export type SelectField<Enum = string> = Enum | null;

export type BooleanField = boolean;

export enum EmbedType {
	Link = "link",
	Rich = "rich"
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

export type GroupField = AnyRegularField[];

// TODO: Might be prone to change really soon with variations!
export interface Slice<
	SliceType = string,
	PrimaryFields extends { [key: string]: AnyRegularField } = {
		[key: string]: AnyRegularField;
	},
	ItemsFields extends { [key: string]: AnyRegularField } = {
		[key: string]: AnyRegularField;
	}
> {
	slice_type: SliceType;
	slice_label: string | null;
	primary: PrimaryFields;
	items: ItemsFields[];
}

export type SliceZone<Slices extends Slice = Slice> = Slices[];
