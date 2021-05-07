type EmptyObjectField = { [key: string]: never };

export interface RichTextSpan {
	start: number;
	end: number;
	type: string;
	text: string;
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

type RawEmptyLinkField<Type extends LinkType = LinkType> = {
	link_type: Type;
};

type RawRelationField<TypeEnum = string, LangEnum = string> = {
	link_type: LinkType.Document;
	id: string;
	type: TypeEnum;
	tags: string[];
	slug: string;
	lang: LangEnum;
	uid: string;
	isBroken: boolean;
};

type RawLinkToWebField = {
	link_type: LinkType.Document;
	url: string;
};

type RawLinkToMediaField = {
	link_type: LinkType.Media;
	name: string;
	kind: string;
	url: string;
	size: string;
	height: string | null;
	width: string | null;
};

export type RelationField<TypeEnum = string, LangEnum = string> =
	| RawRelationField<TypeEnum, LangEnum>
	| RawEmptyLinkField<LinkType.Document>;

export type LinkField<TypeEnum = string, LangEnum = string> =
	| RawRelationField<TypeEnum, LangEnum>
	| RawLinkToWebField
	| RawLinkToMediaField
	| RawEmptyLinkField<LinkType.Any>;

export type LinkToMediaField =
	| RawLinkToMediaField
	| RawEmptyLinkField<LinkType.Media>;

export type DateField = `${string}-${string}-${string}` | null;

// TODO: WIP
export type TimestampField = string | null;

// TODO: WIP
export type ColorField = string | null;

// TODO: WIP
export type NumberField = number | null;

// TODO: WIP
export type KeyTextField = string | null;

// TODO: WIP
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

export type AnyField =
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

export type GroupField = AnyField[];
