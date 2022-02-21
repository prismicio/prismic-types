# [@prismicio/types](README.md) / api

## Interfaces

### Form

• **Form**: `Object`

A Prismic REST API V2 feature supported by the repository. It contains
metadata about the feature and how to interact with it via the API.

**`internal`**

#### Defined in

[api.ts:191](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/api.ts#L191)

#### Properties

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `enctype` | `string` |
| `fields` | `Record`<`string`, [`FormField`](#formfield)\> |
| `method` | ``"GET"`` |
| `name?` | `string` |
| `rel?` | `string` |

</details>

___

### FormField

• **FormField**: `Object`

A field for a feature of the Prismic REST API V2. It contains metadata about
the feature's field and how to interact with it via the API.

**`internal`**

#### Defined in

[api.ts:206](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/api.ts#L206)

#### Properties

| Name | Type |
| :------ | :------ |
| `default?` | `string` |
| `multiple` | `boolean` |
| `type` | ``"String"`` \| ``"Integer"`` |

</details>

___

### Language

• **Language**: `Object`

Metadata for a language that has been configured for a repository.

#### Defined in

[api.ts:124](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/api.ts#L124)

#### Properties

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | A unique identifier for the language. |
| `name` | `string` | The name of the language. |

</details>

___

### Query

• **Query**<`Document`\>: `Object`

A query response from the Prismic REST API V2. The response contains
paginated metadata and a list of matching results for the query.

**`see`** More details on querying: [https://prismic.io/docs/technologies/introduction-to-the-content-query-api](https://prismic.io/docs/technologies/introduction-to-the-content-query-api)

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Document` | extends [`PrismicDocument`](#prismicdocument) = [`PrismicDocument`](#prismicdocument) | The type(s) of Prismic document that can be returned. |

#### Defined in

[api.ts:143](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/api.ts#L143)

#### Properties

| Name | Type | Description |
| :------ | :------ | :------ |
| `next_page` | `string` | The Prismic REST API V2 URL to the next page, if one exists. |
| `page` | `number` | The page number for this page of results. |
| `prev_page` | `string` | The Prismic REST API V2 URL to the previous page, if one exists. |
| `results` | `Document`[] | A paginated list of documents matching the query. |
| `results_per_page` | `number` | Maximum number of results per page. |
| `results_size` | `number` | Number of results in this page. |
| `total_pages` | `number` | Total number of pages. |
| `total_results_size` | `number` | Total number of results within all pages. |

</details>

___

### Ref

• **Ref**: `Object`

Metadata for a reference to a version of a repository's content.

**`see`** More details on refs: [https://prismic.io/docs/technologies/introduction-to-the-content-query-api#prismic-api-ref](https://prismic.io/docs/technologies/introduction-to-the-content-query-api#prismic-api-ref)

#### Defined in

[api.ts:80](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/api.ts#L80)

#### Properties

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The unique identifier for the ref. |
| `isMasterRef` | `boolean` | Determines if the ref is the master ref. The master ref contains the latest published content. |
| `label` | `string` | A human-readable name for the ref. The master ref is always named "Master". |
| `ref` | `string` | The identifier that should be provided to the API to select a content version. |
| `scheduledAt?` | `string` | If the ref is associated with a Release, this field contains the timestamp at which the Release will be automatically published, if set.  **`see`** More details on Releases: [https://prismic.io/docs/core-concepts/draft-plan-and-schedule-content#releases](https://prismic.io/docs/core-concepts/draft-plan-and-schedule-content#releases) |

</details>

___

### Repository

• **Repository**: `Object`

Repository metadata returned from the Prismic REST API V2. This data can be
fetched by sending a `GET` a request to a repository's `/api/v2` endpoint.

**`see`** More details on the `/api/v2` endpoint: [https://prismic.io/docs/technologies/introduction-to-the-content-query-api#the-api-endpoint-2](https://prismic.io/docs/technologies/introduction-to-the-content-query-api#the-api-endpoint-2)

#### Defined in

[api.ts:9](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/api.ts#L9)

#### Properties

| Name | Type | Description |
| :------ | :------ | :------ |
| `bookmarks` | `Record`<`string`, `string`\> | **`deprecated`** Bookmarks are not longer part of Prismic. |
| `experiments` | `unknown` | **`deprecated`** Experiments are no longer part of Prismic. |
| `forms` | `Record`<`string`, [`Form`](#form)\> | An internally-used list of REST API features for the repository.  **`internal`** |
| `integrationFieldsRef` | `string` | An identifier used to query content with the latest Integration Fields data. |
| `languages` | [`Language`](#language)[] | A list of languages for the repository.  **`see`** [Language](#language) |
| `license` | `string` | Licensing information for the repository content. |
| `oauth_initiate` | `string` | The URL used to begin the OAuth process for the repository. |
| `oauth_token` | `string` | - |
| `refs` | [`Ref`](#ref)[] | A list of refs for the repository.  **`see`** [Ref](#ref) |
| `tags` | `string`[] | A list of tags for the repository. |
| `types` | `Record`<`string`, `string`\> | A list of the repository's Custom Type API IDs mapped to their human-readable name. |
| `version` | `string` | The version of the API. |

</details>

## Type aliases

### Release

Ƭ **Release**: [`Ref`](#ref)

Metadata for a Release.

**`remarks`**
This is an alias for `Ref`.

**`see`** [Ref](#ref)

**`see`** More details on Releases: [https://prismic.io/docs/core-concepts/draft-plan-and-schedule-content#releases](https://prismic.io/docs/core-concepts/draft-plan-and-schedule-content#releases)

#### Defined in

[api.ts:119](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/api.ts#L119)

___

### Tags

Ƭ **Tags**<`Tag`\>: `Tag`[]

List of tags returned from the Prismic Tags API. This data can be fetched by
sending a `GET` request to a repository's `/api/tags` endpoint.

**`see`** More details on the Tags API: [https://prismic.io/docs/technologies/tags-api-technical-reference](https://prismic.io/docs/technologies/tags-api-technical-reference)

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Tag` | extends `string` = `string` | Tags that are returned by the Tags API. |

#### Defined in

[api.ts:219](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/api.ts#L219)
