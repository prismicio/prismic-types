# [@prismicio/types](README.md) / document

## Interfaces

### AlternateLanguage

• **AlternateLanguage**<`TypeEnum`, `LangEnum`\>: `Object`

Document metadata for a translation of a Prismic document.

**Type parameters**

| Name | Type |
| :------ | :------ |
| `TypeEnum` | `string` |
| `LangEnum` | `string` |

**Defined in**

[document.ts:6](https://github.com/prismicio/prismic-types/blob/5270069/src/document.ts#L6)

**Properties**

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `lang` | `LangEnum` |
| `type` | `TypeEnum` |
| `uid?` | `string` |

</details>

___

### PrismicDocument

• **PrismicDocument**<`DataInterface`, `TypeEnum`, `LangEnum`\>: `Object`

A Prismic document served through REST API v2.

**`see`** More details on Custom Types: [https://prismic.io/docs/technologies/introduction-to-the-content-query-api](https://prismic.io/docs/technologies/introduction-to-the-content-query-api)

**Type parameters**

| Name | Type |
| :------ | :------ |
| `DataInterface` | extends `Record`<`string`, [`AnyRegularField`](#anyregularfield) \| [`GroupField`](#groupfield) \| [`SliceZone`](#slicezone)\> = `Record`<`string`, `any`\> |
| `TypeEnum` | `string` |
| `LangEnum` | `string` |

**Defined in**

[document.ts:74](https://github.com/prismicio/prismic-types/blob/5270069/src/document.ts#L74)

**Properties**

| Name | Type | Description |
| :------ | :------ | :------ |
| `alternate_languages` | [`AlternateLanguage`](#alternatelanguage)<`TypeEnum`, `LangEnum`\>[] | Array to access alternate language versions for document. |
| `data` | `DataInterface` | Data contained in the document. |
| `first_publication_date` | `string` | The timestamp at which the document was first published. |
| `href` | `string` | Href for document. |
| `id` | `string` | The unique identifier for the document. Guaranteed to be unique among all documents in the Prismic repository. |
| `lang` | `LangEnum` | Language of document. |
| `last_publication_date` | `string` | The timestamp at which the document was last published. |
| `linked_documents` | `unknown`[] | Documents that are related to this document. |
| `slugs` | `string`[] | Slugs associated with document. |
| `tags` | `string`[] | Tags associated with document. |
| `type` | `TypeEnum` | Type of the document. |
| `uid` | `string` | The unique identifier for the document. Guaranteed to be unique among all Prismic documents of the same type. |
| `url` | `string` | Url that refers to document. |

</details>

___

### PrismicDocumentHeader

• **PrismicDocumentHeader**<`TypeEnum`, `LangEnum`\>: `Object`

Metadata for Prismic Document

**Type parameters**

| Name | Type |
| :------ | :------ |
| `TypeEnum` | `string` |
| `LangEnum` | `string` |

**Defined in**

[document.ts:16](https://github.com/prismicio/prismic-types/blob/5270069/src/document.ts#L16)

**Properties**

| Name | Type | Description |
| :------ | :------ | :------ |
| `alternate_languages` | [`AlternateLanguage`](#alternatelanguage)<`TypeEnum`, `LangEnum`\>[] | Array to access alternate language versions for document. |
| `first_publication_date` | `string` | The timestamp at which the document was first published. |
| `href` | `string` | Href for document. |
| `id` | `string` | The unique identifier for the document. Guaranteed to be unique among all documents in the Prismic repository. |
| `lang` | `LangEnum` | Language of document. |
| `last_publication_date` | `string` | The timestamp at which the document was last published. |
| `linked_documents` | `unknown`[] | Documents that are related to this document. |
| `slugs` | `string`[] | Slugs associated with document. |
| `tags` | `string`[] | Tags associated with document. |
| `type` | `TypeEnum` | Type of the document. |
| `uid` | `string` | The unique identifier for the document. Guaranteed to be unique among all Prismic documents of the same type. |
| `url` | `string` | Url that refers to document. |

</details>

___

### PrismicDocumentWithUID

• **PrismicDocumentWithUID**<`DataInterface`, `TypeEnum`, `LangEnum`\>: `Object`

A Prismic document served through REST API v2. Contains a UID (a unique identifier).

**`see`** More details on Custom Types: [https://prismic.io/docs/technologies/introduction-to-the-content-query-api](https://prismic.io/docs/technologies/introduction-to-the-content-query-api)

**`see`** More details on the UID field: [https://prismic.io/docs/core-concepts/uid](https://prismic.io/docs/core-concepts/uid)

**Type parameters**

| Name | Type |
| :------ | :------ |
| `DataInterface` | extends `Record`<`string`, [`AnyRegularField`](#anyregularfield) \| [`GroupField`](#groupfield) \| [`SliceZone`](#slicezone)\> = `Record`<`string`, `any`\> |
| `TypeEnum` | `string` |
| `LangEnum` | `string` |

**Defined in**

[document.ts:120](https://github.com/prismicio/prismic-types/blob/5270069/src/document.ts#L120)

**Properties**

| Name | Type | Description |
| :------ | :------ | :------ |
| `alternate_languages` | [`AlternateLanguage`](#alternatelanguage)<`TypeEnum`, `LangEnum`\>[] | Array to access alternate language versions for document. |
| `data` | `DataInterface` | Data contained in the document. |
| `first_publication_date` | `string` | The timestamp at which the document was first published. |
| `href` | `string` | Href for document. |
| `id` | `string` | The unique identifier for the document. Guaranteed to be unique among all documents in the Prismic repository. |
| `lang` | `LangEnum` | Language of document. |
| `last_publication_date` | `string` | The timestamp at which the document was last published. |
| `linked_documents` | `unknown`[] | Documents that are related to this document. |
| `slugs` | `string`[] | Slugs associated with document. |
| `tags` | `string`[] | Tags associated with document. |
| `type` | `TypeEnum` | Type of the document. |
| `uid` | `string` | The unique identifier for the document. Guaranteed to be unique among all Prismic documents of the same type. |
| `url` | `string` | Url that refers to document. |

</details>

___

### PrismicDocumentWithoutUID

• **PrismicDocumentWithoutUID**<`DataInterface`, `TypeEnum`, `LangEnum`\>: `Object`

A Prismic document served through REST API v2. Does not contain a UID (a
unique identifier).

**`see`** More details on Custom Types: [https://prismic.io/docs/technologies/introduction-to-the-content-query-api](https://prismic.io/docs/technologies/introduction-to-the-content-query-api)

**`see`** More details on the UID field: [https://prismic.io/docs/core-concepts/uid](https://prismic.io/docs/core-concepts/uid)

**Type parameters**

| Name | Type |
| :------ | :------ |
| `DataInterface` | extends `Record`<`string`, [`AnyRegularField`](#anyregularfield) \| [`GroupField`](#groupfield) \| [`SliceZone`](#slicezone)\> = `Record`<`string`, `any`\> |
| `TypeEnum` | `string` |
| `LangEnum` | `string` |

**Defined in**

[document.ts:96](https://github.com/prismicio/prismic-types/blob/5270069/src/document.ts#L96)

**Properties**

| Name | Type | Description |
| :------ | :------ | :------ |
| `alternate_languages` | [`AlternateLanguage`](#alternatelanguage)<`TypeEnum`, `LangEnum`\>[] | Array to access alternate language versions for document. |
| `data` | `DataInterface` | Data contained in the document. |
| `first_publication_date` | `string` | The timestamp at which the document was first published. |
| `href` | `string` | Href for document. |
| `id` | `string` | The unique identifier for the document. Guaranteed to be unique among all documents in the Prismic repository. |
| `lang` | `LangEnum` | Language of document. |
| `last_publication_date` | `string` | The timestamp at which the document was last published. |
| `linked_documents` | `unknown`[] | Documents that are related to this document. |
| `slugs` | `string`[] | Slugs associated with document. |
| `tags` | `string`[] | Tags associated with document. |
| `type` | `TypeEnum` | Type of the document. |
| `uid` | ``null`` | This document does not have a UID field. This property will always be `null`.  The unique identifier for the document. Guaranteed to be unique among all Prismic documents of the same type. |
| `url` | `string` | Url that refers to document. |

</details>
