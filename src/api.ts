import { PrismicDocument } from "./document";

/**
 * Repository metadata returned from the Prismic REST API V2. This data can be
 * fetched by sending a `GET` a request to a repository's `/api/v2` endpoint.
 *
 * @see More details on the `/api/v2` endpoint: {@link https://prismic.io/docs/technologies/introduction-to-the-content-query-api#the-api-endpoint-2}
 */
export interface Repository {
	/**
	 * A list of refs for the repository.
	 *
	 * @see {@link Ref}
	 */
	refs: Ref[];

	/**
	 * An identifier used to query content with the latest Integration Fields data.
	 */
	integrationFieldsRef: string | null;

	/**
	 * A list of languages for the repository.
	 *
	 * @see {@link Language}
	 */
	languages: Language[];

	/**
	 * A list of the repository's Custom Type API IDs mapped to their human-readable name.
	 */
	types: Record<string, string>;

	/**
	 * A list of tags for the repository.
	 */
	tags: string[];

	/**
	 * An internally-used list of REST API features for the repository.
	 *
	 * @internal
	 */
	forms: Record<string, Form>;

	/**
	 * The URL used to begin the OAuth process for the repository.
	 */
	oauth_initiate: string;

	// TODO: Describe this field
	oauth_token: string;

	/**
	 * The version of the API.
	 */
	version: string;

	/**
	 * Licensing information for the repository content.
	 */
	license: string;

	/**
	 * @deprecated Experiments are no longer part of Prismic.
	 */
	experiments: unknown;

	/**
	 * @deprecated Bookmarks are not longer part of Prismic.
	 */
	bookmarks: Record<string, string>;
}

/**
 * Metadata for a reference to a version of a repository's content.
 *
 * @see More details on refs: {@link https://prismic.io/docs/technologies/introduction-to-the-content-query-api#prismic-api-ref}
 */
export interface Ref {
	/**
	 * The unique identifier for the ref.
	 */
	id: string;

	/**
	 * The identifier that should be provided to the API to select a content version.
	 */
	ref: string;

	/**
	 * A human-readable name for the ref. The master ref is always named "Master".
	 */
	label: string;

	/**
	 * Determines if the ref is the master ref. The master ref contains the latest
	 * published content.
	 */
	isMasterRef: boolean;

	/**
	 * If the ref is associated with a Release, this field contains the timestamp
	 * at which the Release will be automatically published, if set.
	 *
	 * @see More details on Releases: {@link https://prismic.io/docs/core-concepts/draft-plan-and-schedule-content#releases}
	 */
	scheduledAt?: string;
}

/**
 * Metadata for a Release.
 *
 * @remarks
 * This is an alias for `Ref`.
 * @see {@link Ref}
 * @see More details on Releases: {@link https://prismic.io/docs/core-concepts/draft-plan-and-schedule-content#releases}
 */
export type Release = Ref;

/**
 * Metadata for a language that has been configured for a repository.
 */
export interface Language {
	/**
	 * A unique identifier for the language.
	 */
	id: string;

	/**
	 * The name of the language.
	 */
	name: string;
}

/**
 * A query response from the Prismic REST API V2. The response contains
 * paginated metadata and a list of matching results for the query.
 *
 * @typeParam Document - The type(s) of Prismic document that can be returned.
 * @see More details on querying: {@link https://prismic.io/docs/technologies/introduction-to-the-content-query-api}
 */
export interface Query<Document extends PrismicDocument = PrismicDocument> {
	/**
	 * The page number for this page of results.
	 */
	page: number;

	/**
	 * Maximum number of results per page.
	 */
	results_per_page: number;

	/**
	 * Number of results in this page.
	 */
	results_size: number;

	/**
	 * Total number of results within all pages.
	 */
	total_results_size: number;

	/**
	 * Total number of pages.
	 */
	total_pages: number;

	/**
	 * The Prismic REST API V2 URL to the next page, if one exists.
	 */
	next_page: string | null;

	/**
	 * The Prismic REST API V2 URL to the previous page, if one exists.
	 */
	prev_page: string | null;

	/**
	 * A paginated list of documents matching the query.
	 */
	results: Document[];
}

/**
 * A Prismic REST API V2 feature supported by the repository. It contains
 * metadata about the feature and how to interact with it via the API.
 *
 * @internal
 */
export interface Form {
	method: "GET";
	enctype: string;
	action: string;
	name?: string;
	rel?: string;
	fields: Record<string, FormField>;
}

/**
 * A field for a feature of the Prismic REST API V2. It contains metadata about
 * the feature's field and how to interact with it via the API.
 *
 * @internal
 */
export interface FormField {
	type: "String" | "Integer";
	multiple: boolean;
	default?: string;
}

/**
 * List of tags returned from the Prismic Tags API. This data can be fetched by
 * sending a `GET` request to a repository's `/api/tags` endpoint.
 *
 * @typeParam Tag - Tags that are returned by the Tags API.
 * @see More details on the Tags API: {@link https://prismic.io/docs/technologies/tags-api-technical-reference}
 */
export type Tags<Tag extends string = string> = Tag[];
