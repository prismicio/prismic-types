# [@prismicio/types](README.md) / graphql / fields

## Interfaces

### FilledMinimalLinkToDocumentField

• **FilledMinimalLinkToDocumentField**: `Object`

Link that point to Documents

**Defined in**

[graphql/fields.ts:16](https://github.com/prismicio/prismic-types/blob/5270069/src/graphql/fields.ts#L16)

**Properties**

| Name | Type |
| :------ | :------ |
| `_linkType` | `string` |

</details>

___

### FilledMinimalLinkToMediaField

• **FilledMinimalLinkToMediaField**: `Object`

Link that points to media (images, PDFs, or any file in the Media Library)

**Defined in**

[graphql/fields.ts:31](https://github.com/prismicio/prismic-types/blob/5270069/src/graphql/fields.ts#L31)

**Properties**

| Name | Type |
| :------ | :------ |
| `_linkType` | `string` |
| `url` | `string` |

</details>

___

### FilledMinimalLinkToWebField

• **FilledMinimalLinkToWebField**: `Object`

Link that points to external website

**Defined in**

[graphql/fields.ts:23](https://github.com/prismicio/prismic-types/blob/5270069/src/graphql/fields.ts#L23)

**Properties**

| Name | Type |
| :------ | :------ |
| `_linkType` | `string` |
| `url` | `string` |

</details>

## Type aliases

### EmptyLinkField

Ƭ **EmptyLinkField**: ``null``

Represents a link field without a value.

**Defined in**

[graphql/fields.ts:11](https://github.com/prismicio/prismic-types/blob/5270069/src/graphql/fields.ts#L11)

___

### LinkField

Ƭ **LinkField**<`ExtendedLinkToDocumentField`, `ExtendedLinkToWebField`, `ExtendedLinkToMediaField`, `IsEmpty`\>: `IsEmpty` extends ``true`` ? [`EmptyLinkField`](#emptylinkfield) : `ExtendedLinkToDocumentField` \| `ExtendedLinkToWebField` \| `ExtendedLinkToMediaField`

Link Field

**Type parameters**

| Name | Type |
| :------ | :------ |
| `ExtendedLinkToDocumentField` | extends [`FilledMinimalLinkToDocumentField`](#filledminimallinktodocumentfield) = [`FilledMinimalLinkToDocumentField`](#filledminimallinktodocumentfield) |
| `ExtendedLinkToWebField` | extends [`FilledMinimalLinkToWebField`](#filledminimallinktowebfield) = [`FilledMinimalLinkToWebField`](#filledminimallinktowebfield) |
| `ExtendedLinkToMediaField` | extends [`FilledMinimalLinkToMediaField`](#filledminimallinktomediafield) = [`FilledMinimalLinkToMediaField`](#filledminimallinktomediafield) |
| `IsEmpty` | extends `boolean` = `boolean` |

**Defined in**

[graphql/fields.ts:47](https://github.com/prismicio/prismic-types/blob/5270069/src/graphql/fields.ts#L47)

___

### LinkToMediaField

Ƭ **LinkToMediaField**<`ExtendedLinkToMediaField`, `IsEmpty`\>: `IsEmpty` extends ``true`` ? [`EmptyLinkField`](#emptylinkfield) : `ExtendedLinkToMediaField`

Link field that points to media

**Type parameters**

| Name | Type |
| :------ | :------ |
| `ExtendedLinkToMediaField` | extends [`FilledMinimalLinkToMediaField`](#filledminimallinktomediafield) = [`FilledMinimalLinkToMediaField`](#filledminimallinktomediafield) |
| `IsEmpty` | extends `boolean` = `boolean` |

**Defined in**

[graphql/fields.ts:62](https://github.com/prismicio/prismic-types/blob/5270069/src/graphql/fields.ts#L62)

___

### RelationField

Ƭ **RelationField**<`ExtendedLinkToDocumentField`, `IsEmpty`\>: `IsEmpty` extends ``true`` ? [`EmptyLinkField`](#emptylinkfield) : `ExtendedLinkToDocumentField`

Field for related documents

**Type parameters**

| Name | Type |
| :------ | :------ |
| `ExtendedLinkToDocumentField` | extends [`FilledMinimalLinkToWebField`](#filledminimallinktowebfield) = [`FilledMinimalLinkToWebField`](#filledminimallinktowebfield) |
| `IsEmpty` | extends `boolean` = `boolean` |

**Defined in**

[graphql/fields.ts:39](https://github.com/prismicio/prismic-types/blob/5270069/src/graphql/fields.ts#L39)

## Variables

### LinkType

• `Const` **LinkType**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `Document` | ``"Link.document"`` |
| `File` | ``"Link.file"`` |
| `Image` | ``"Link.image"`` |
| `Web` | ``"Link.web"`` |

**Defined in**

[graphql/fields.ts:1](https://github.com/prismicio/prismic-types/blob/5270069/src/graphql/fields.ts#L1)
