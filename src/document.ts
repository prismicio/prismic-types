import { AnyRegularField, GroupField, SliceZone } from "./fields";

interface AlternateLanguage {
	id: string;
	uid?: string;
	type: string;
	lang: string;
}

export interface PrismicDocumentHeader<TypeEnum = string, LangEnum = string> {
	id: string;
	uid: string | null;
	url: string | null;
	type: TypeEnum;
	href: string;
	tags: string[];
	first_publication_date: string;
	last_publication_date: string;
	slugs: string[];
	linked_documents: unknown[]; // TODO: Not sure of the type for this one
	lang: LangEnum;
	alternate_languages: AlternateLanguage[];
}

export interface PrismicDocument<
	DataInterface = Record<string, AnyRegularField | GroupField | SliceZone>,
	TypeEnum = string,
	LangEnum = string
> extends PrismicDocumentHeader<TypeEnum, LangEnum> {
	data: DataInterface;
}
