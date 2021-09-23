import { AnyRegularField, GroupField, SliceZone } from "./fields";

/**
 * Document metadata for a translation of a Prismic document.
 */
export interface AlternateLanguage<TypeEnum = string, LangEnum = string> {
	id: string;
	uid?: string;
	type: TypeEnum;
	lang: LangEnum;
}

/**
 * Metadata for Prismic Document
 */
export interface PrismicDocumentHeader<TypeEnum = string, LangEnum = string> {
	id: string;
	uid: string | null;
	url: string | null;
	type: TypeEnum;
	href: string;
	tags: string[];
	/** The timestamp at which the document was first published */
	first_publication_date: string;
	/** The timestamp at which the document was last published */
	last_publication_date: string;
	slugs: string[];
	linked_documents: unknown[]; // TODO: Not sure of the type for this one
	lang: LangEnum;
	alternate_languages: AlternateLanguage<TypeEnum, LangEnum>[];
}

/**
 * A Prismic document served through REST API v2.
 *
 * @see More details on Custom Types: {@link https://prismic.io/docs/technologies/introduction-to-the-content-query-api}
 */
export interface PrismicDocument<
	DataInterface = Record<string, AnyRegularField | GroupField | SliceZone>,
	TypeEnum = string,
	LangEnum = string,
> extends PrismicDocumentHeader<TypeEnum, LangEnum> {
	data: DataInterface;
}
