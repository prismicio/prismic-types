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
	/** The unique identifier for the document. */
	id: string;
	/** The unique identifier for the document. */
	uid: string | null;
	/** url that refers to document. */
	url: string | null;
	/** type of the document. */
	type: TypeEnum;
	/** href for document. */
	href: string;
	/** tags associated with document. */
	tags: string[];
	/** The timestamp at which the document was first published. */
	first_publication_date: string;
	/** The timestamp at which the document was last published. */
	last_publication_date: string;
	/** slugs associated with document. */
	slugs: string[];
	/** documents that are related to this document. */
	linked_documents: unknown[]; // TODO: Not sure of the type for this one
	/** language of document. */
	lang: LangEnum;
	/** array to access alternate language versions for document. */
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
