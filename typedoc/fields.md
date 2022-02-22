# [@prismicio/types](README.md) / fields

## Interfaces

### RTTextNodeBase

• **RTTextNodeBase**: `Object`

Base to be extended by other RT Nodes.

**Defined in**

[fields.ts:40](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L40)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |

</details>

___

### RTHeading1Node

• **RTHeading1Node**: `Object`

Rich Text `heading1` node

**Defined in**

[fields.ts:48](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L48)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |
| `type` | ``"heading1"`` |

</details>

___

### RTHeading2Node

• **RTHeading2Node**: `Object`

Rich Text `heading2` node

**Defined in**

[fields.ts:55](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L55)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |
| `type` | ``"heading2"`` |

</details>

___

### RTHeading3Node

• **RTHeading3Node**: `Object`

Rich Text `heading3` node

**Defined in**

[fields.ts:62](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L62)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |
| `type` | ``"heading3"`` |

</details>

___

### RTHeading4Node

• **RTHeading4Node**: `Object`

Rich Text `heading4` node

**Defined in**

[fields.ts:69](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L69)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |
| `type` | ``"heading4"`` |

</details>

___

### RTHeading5Node

• **RTHeading5Node**: `Object`

Rich Text `heading5` node

**Defined in**

[fields.ts:76](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L76)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |
| `type` | ``"heading5"`` |

</details>

___

### RTHeading6Node

• **RTHeading6Node**: `Object`

Rich Text `heading6` node

**Defined in**

[fields.ts:83](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L83)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |
| `type` | ``"heading6"`` |

</details>

___

### RTParagraphNode

• **RTParagraphNode**: `Object`

Rich Text `paragraph` node

**Defined in**

[fields.ts:90](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L90)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |
| `type` | ``"paragraph"`` |

</details>

___

### RTPreformattedNode

• **RTPreformattedNode**: `Object`

Rich Text `preformatted` node

**Defined in**

[fields.ts:97](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L97)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |
| `type` | ``"preformatted"`` |

</details>

___

### RTListItemNode

• **RTListItemNode**: `Object`

Rich Text `list-item` node

**Defined in**

[fields.ts:104](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L104)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |
| `type` | ``"list-item"`` |

</details>

___

### RTOListItemNode

• **RTOListItemNode**: `Object`

Rich Text `o-list-item` node for ordered lists

**Defined in**

[fields.ts:111](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L111)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |
| `type` | ``"o-list-item"`` |

</details>

___

### RTSpanNodeBase

• **RTSpanNodeBase**: `Object`

**`internal`** Span Node base to be extended for other Span nodes

**Defined in**

[fields.ts:120](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L120)

**Properties**

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

</details>

___

### RTStrongNode

• **RTStrongNode**: `Object`

Rich Text `strong` node

**Defined in**

[fields.ts:127](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L127)

**Properties**

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `type` | ``"strong"`` |

</details>

___

### RTEmNode

• **RTEmNode**: `Object`

Rich Text `embed` node

**Defined in**

[fields.ts:134](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L134)

**Properties**

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `type` | ``"em"`` |

</details>

___

### RTLabelNode

• **RTLabelNode**: `Object`

Rich Text `label` node

**Defined in**

[fields.ts:141](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L141)

**Properties**

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `type` | ``"label"`` |
| `data` | { `label`: `string`  } |
| `data.label` | `string` |

</details>

___

### RTLinkNode

• **RTLinkNode**: `Object`

Rich Text `a` node

**`see`** More details: [https://prismic.io/docs/core-concepts/edit-rich-text#add-links](https://prismic.io/docs/core-concepts/edit-rich-text#add-links)

**Defined in**

[fields.ts:184](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L184)

**Properties**

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `type` | ``"hyperlink"`` |
| `data` | [`FilledLinkToDocumentField`](#filledlinktodocumentfield)<`string`, `string`, `never`\> \| [`FilledLinkToWebField`](#filledlinktowebfield) \| [`FilledLinkToMediaField`](#filledlinktomediafield) |

</details>

___

### RTListNode

• **RTListNode**: `Object`

Rich Text `list` node

**Defined in**

[fields.ts:197](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L197)

**Properties**

| Name | Type |
| :------ | :------ |
| `type` | ``"group-list-item"`` |
| `items` | [`RTListItemNode`](#rtlistitemnode)[] |

</details>

___

### RTOListNode

• **RTOListNode**: `Object`

Rich Text o-lost node

**Defined in**

[fields.ts:205](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L205)

**Properties**

| Name | Type |
| :------ | :------ |
| `type` | ``"group-o-list-item"`` |
| `items` | [`RTOListItemNode`](#rtolistitemnode)[] |

</details>

___

### RTSpanNode

• **RTSpanNode**: `Object`

Rich Text `span` node

**Defined in**

[fields.ts:214](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L214)

**Properties**

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `spans` | [`RTInlineNode`](#rtinlinenode)[] |
| `type` | ``"span"`` |

</details>

___

### FilledImageFieldImage

• **FilledImageFieldImage**: `Object`

**Defined in**

[fields.ts:318](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L318)

**Properties**

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `dimensions` | { `width`: `number` ; `height`: `number`  } |
| `dimensions.width` | `number` |
| `dimensions.height` | `number` |
| `alt` | `string` |
| `copyright` | `string` |

</details>

___

### EmptyImageFieldImage

• **EmptyImageFieldImage**: `Object`

**Defined in**

[fields.ts:328](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L328)

**Properties**

| Name | Type |
| :------ | :------ |
| `url?` | ``null`` |
| `dimensions?` | ``null`` |
| `alt?` | ``null`` |
| `copyright?` | ``null`` |

</details>

___

### FilledLinkToDocumentField

• **FilledLinkToDocumentField**<`TypeEnum`, `LangEnum`, `DataInterface`\>: `Object`

Links that refer to Documents

**Type parameters**

| Name | Type |
| :------ | :------ |
| `TypeEnum` | `string` |
| `LangEnum` | `string` |
| `DataInterface` | extends `Record`<`string`, [`AnyRegularField`](#anyregularfield) \| [`GroupField`](#groupfield) \| [`SliceZone`](#slicezone)\> = `never` |

**Defined in**

[fields.ts:380](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L380)

**Properties**

| Name | Type |
| :------ | :------ |
| `link_type` | ``"Document"`` |
| `id` | `string` |
| `uid?` | `string` |
| `type` | `TypeEnum` |
| `tags` | `string`[] |
| `lang` | `LangEnum` |
| `url?` | `string` |
| `slug?` | `string` |
| `isBroken?` | `boolean` |
| `data?` | `DataInterface` |

</details>

___

### FilledLinkToWebField

• **FilledLinkToWebField**: `Object`

Link that points to external website

**Defined in**

[fields.ts:403](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L403)

**Properties**

| Name | Type |
| :------ | :------ |
| `link_type` | ``"Web"`` |
| `url` | `string` |
| `target?` | `string` |

</details>

___

### FilledLinkToMediaField

• **FilledLinkToMediaField**: `Object`

Link that points to media

**Defined in**

[fields.ts:412](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L412)

**Properties**

| Name | Type |
| :------ | :------ |
| `link_type` | ``"Media"`` |
| `name` | `string` |
| `kind` | `string` |
| `url` | `string` |
| `size` | `string` |
| `height?` | `string` |
| `width?` | `string` |

</details>

___

### Slice

• **Slice**<`SliceType`, `PrimaryFields`, `ItemsFields`\>: `Object`

Slice - Sections of your website

**`see`** More details: [https://prismic.io/docs/core-concepts/slices](https://prismic.io/docs/core-concepts/slices)

**Type parameters**

| Name | Type |
| :------ | :------ |
| `SliceType` | `string` |
| `PrimaryFields` | extends `Record`<`string`, [`AnyRegularField`](#anyregularfield)\> = `Record`<`string`, [`AnyRegularField`](#anyregularfield)\> |
| `ItemsFields` | extends `Record`<`string`, [`AnyRegularField`](#anyregularfield)\> = `Record`<`string`, [`AnyRegularField`](#anyregularfield)\> |

**Defined in**

[fields.ts:794](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L794)

**Properties**

| Name | Type |
| :------ | :------ |
| `slice_type` | `SliceType` |
| `slice_label` | `string` |
| `primary` | `PrimaryFields` |
| `items` | `ItemsFields`[] |

</details>

___

### SharedSliceVariation

• **SharedSliceVariation**<`Variation`, `PrimaryFields`, `ItemsFields`\>: `Object`

**Type parameters**

| Name | Type |
| :------ | :------ |
| `Variation` | `string` |
| `PrimaryFields` | extends `Record`<`string`, [`AnyRegularField`](#anyregularfield)\> = `Record`<`string`, [`AnyRegularField`](#anyregularfield)\> |
| `ItemsFields` | extends `Record`<`string`, [`AnyRegularField`](#anyregularfield)\> = `Record`<`string`, [`AnyRegularField`](#anyregularfield)\> |

**Defined in**

[fields.ts:824](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L824)

**Properties**

| Name | Type |
| :------ | :------ |
| `variation` | `Variation` |
| `version` | `string` |
| `primary` | `PrimaryFields` |
| `items` | `ItemsFields`[] |

</details>

## Type aliases

### FieldState

Ƭ **FieldState**: ``"empty"`` \| ``"filled"``

Valid states for fields. Not all fields use this type (e.g. BooleanField).

**Defined in**

[fields.ts:6](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L6)

___

### RTImageNode

Ƭ **RTImageNode**: `Object`

Rich Text `image` nodes. They could link to other documents, external web
links and media fields

**Type declaration**

| Name | Type |
| :------ | :------ |
| `type` | typeof [`image`](#image) |
| `url` | `string` |
| `alt` | `string` \| ``null`` |
| `copyright` | `string` \| ``null`` |
| `dimensions` | { `width`: `number` ; `height`: `number`  } |
| `dimensions.width` | `number` |
| `dimensions.height` | `number` |
| `linkTo?` | [`FilledLinkToDocumentField`](#filledlinktodocumentfield) \| [`FilledLinkToWebField`](#filledlinktowebfield) \| [`FilledLinkToMediaField`](#filledlinktomediafield) |

**Defined in**

[fields.ts:154](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L154)

___

### RTEmbedNode

Ƭ **RTEmbedNode**: `Object`

Rich Text `embed` node

**Type declaration**

| Name | Type |
| :------ | :------ |
| `type` | typeof [`embed`](#embed) |
| `oembed` | [`EmbedField`](#embedfield) |

**Defined in**

[fields.ts:172](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L172)

___

### RTNode

Ƭ **RTNode**: [`RTHeading1Node`](#rtheading1node) \| [`RTHeading2Node`](#rtheading2node) \| [`RTHeading3Node`](#rtheading3node) \| [`RTHeading4Node`](#rtheading4node) \| [`RTHeading5Node`](#rtheading5node) \| [`RTHeading6Node`](#rtheading6node) \| [`RTParagraphNode`](#rtparagraphnode) \| [`RTPreformattedNode`](#rtpreformattednode) \| [`RTListItemNode`](#rtlistitemnode) \| [`RTOListItemNode`](#rtolistitemnode) \| [`RTImageNode`](#rtimagenode) \| [`RTEmbedNode`](#rtembednode)

Nodes from a Rich Text Field

**Defined in**

[fields.ts:223](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L223)

___

### RTTextNode

Ƭ **RTTextNode**: [`RTHeading1Node`](#rtheading1node) \| [`RTHeading2Node`](#rtheading2node) \| [`RTHeading3Node`](#rtheading3node) \| [`RTHeading4Node`](#rtheading4node) \| [`RTHeading5Node`](#rtheading5node) \| [`RTHeading6Node`](#rtheading6node) \| [`RTParagraphNode`](#rtparagraphnode) \| [`RTPreformattedNode`](#rtpreformattednode) \| [`RTListItemNode`](#rtlistitemnode) \| [`RTOListItemNode`](#rtolistitemnode)

Rich text nodes with text

**Defined in**

[fields.ts:240](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L240)

___

### RTBlockNode

Ƭ **RTBlockNode**: [`RTHeading1Node`](#rtheading1node) \| [`RTHeading2Node`](#rtheading2node) \| [`RTHeading3Node`](#rtheading3node) \| [`RTHeading4Node`](#rtheading4node) \| [`RTHeading5Node`](#rtheading5node) \| [`RTHeading6Node`](#rtheading6node) \| [`RTParagraphNode`](#rtparagraphnode) \| [`RTPreformattedNode`](#rtpreformattednode) \| [`RTListItemNode`](#rtlistitemnode) \| [`RTOListItemNode`](#rtolistitemnode) \| [`RTListNode`](#rtlistnode) \| [`RTOListNode`](#rtolistnode) \| [`RTImageNode`](#rtimagenode) \| [`RTEmbedNode`](#rtembednode)

Rich Text block nodes

**Defined in**

[fields.ts:255](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L255)

___

### RTInlineNode

Ƭ **RTInlineNode**: [`RTStrongNode`](#rtstrongnode) \| [`RTEmNode`](#rtemnode) \| [`RTLabelNode`](#rtlabelnode) \| [`RTLinkNode`](#rtlinknode)

Inline Rich Text Nodes

**Defined in**

[fields.ts:274](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L274)

___

### RTAnyNode

Ƭ **RTAnyNode**: [`RTBlockNode`](#rtblocknode) \| [`RTInlineNode`](#rtinlinenode) \| [`RTSpanNode`](#rtspannode)

All Rich Text nodes

**Defined in**

[fields.ts:279](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L279)

___

### TitleField

Ƭ **TitleField**<`State`\>: `State` extends ``"empty"`` ? [] : [`Omit`<[`RTHeading1Node`](#rtheading1node) \| [`RTHeading2Node`](#rtheading2node) \| [`RTHeading3Node`](#rtheading3node) \| [`RTHeading4Node`](#rtheading4node) \| [`RTHeading5Node`](#rtheading5node) \| [`RTHeading6Node`](#rtheading6node), ``"spans"``\> & { `spans`: []  }]

All Rich Text Title Nodes

**`see`** Title field documentation: [https://prismic.io/docs/core-concepts/rich-text-title](https://prismic.io/docs/core-concepts/rich-text-title)

**Type parameters**

| Name | Type |
| :------ | :------ |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) |

**Defined in**

[fields.ts:286](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L286)

___

### RichTextField

Ƭ **RichTextField**<`State`\>: `State` extends ``"empty"`` ? [] : [[`RTNode`](#rtnode), ...RTNode[]]

**Type parameters**

| Name | Type |
| :------ | :------ |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) |

**Defined in**

[fields.ts:303](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L303)

___

### ImageFieldImage

Ƭ **ImageFieldImage**<`State`\>: `State` extends ``"empty"`` ? [`EmptyImageFieldImage`](#emptyimagefieldimage) : [`FilledImageFieldImage`](#filledimagefieldimage)

An individual image within an Image field. The base image and each thumbnail
uses this type.

**`see`** [ImageField](#imagefield) for a full Image field type.

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:315](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L315)

___

### ImageField

Ƭ **ImageField**<`ThumbnailNames`, `State`\>: `ThumbnailNames` extends `string` ? [`ImageFieldImage`](#imagefieldimage)<`State`\> & `Record`<`Exclude`<`ThumbnailNames`, keyof [`ImageFieldImage`](#imagefieldimage)\>, [`ImageFieldImage`](#imagefieldimage)<`State`\>\> : [`ImageFieldImage`](#imagefieldimage)<`State`\>

Image Field

**`see`** Image field documentation: [https://prismic.io/docs/core-concepts/image](https://prismic.io/docs/core-concepts/image)

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `ThumbnailNames` | extends `string` \| ``null`` = ``null`` | Names of thumbnails. If the field does not   contain thumbnails, `null` can be used to "disable" thumbnail fields. |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:343](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L343)

___

### EmptyLinkField

Ƭ **EmptyLinkField**<`Type`\>: `Object`

For link fields that haven't been filled

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `Type` | extends typeof [`LinkType`](#linktype)[keyof typeof [`LinkType`](#linktype)] = typeof [`Any`](#any) | The type of link. |

**Type declaration**

| Name | Type |
| :------ | :------ |
| `link_type` | `Type` \| `string` |

**Defined in**

[fields.ts:371](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L371)

___

### RelationField

Ƭ **RelationField**<`TypeEnum`, `LangEnum`, `DataInterface`, `State`\>: `State` extends ``"empty"`` ? [`EmptyLinkField`](#emptylinkfield)<typeof [`Document`](#document)\> : [`FilledLinkToDocumentField`](#filledlinktodocumentfield)<`TypeEnum`, `LangEnum`, `DataInterface`\>

Field for related documents

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `TypeEnum` | `string` | Type API ID of the document. |
| `LangEnum` | `string` | Language API ID of the document. |
| `DataInterface` | extends `Record`<`string`, [`AnyRegularField`](#anyregularfield) \| [`GroupField`](#groupfield) \| [`SliceZone`](#slicezone)\> = `never` | Data fields for the document (filled in via   GraphQuery of `fetchLinks`). |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:431](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L431)

___

### LinkField

Ƭ **LinkField**<`TypeEnum`, `LangEnum`, `DataInterface`, `State`\>: `State` extends ``"empty"`` ? [`EmptyLinkField`](#emptylinkfield)<typeof [`Any`](#any)\> : [`RelationField`](#relationfield)<`TypeEnum`, `LangEnum`, `DataInterface`, `State`\> \| [`FilledLinkToWebField`](#filledlinktowebfield) \| [`LinkToMediaField`](#linktomediafield)<`State`\>

Link Field

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `TypeEnum` | `string` | Type API ID of the document. |
| `LangEnum` | `string` | Language API ID of the document. |
| `DataInterface` | extends `Record`<`string`, [`AnyRegularField`](#anyregularfield) \| [`GroupField`](#groupfield) \| [`SliceZone`](#slicezone)\> = `never` | Data fields for the document (filled in via   GraphQuery of `fetchLinks`). |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:452](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L452)

___

### LinkToMediaField

Ƭ **LinkToMediaField**<`State`\>: `State` extends ``"empty"`` ? [`EmptyLinkField`](#emptylinkfield)<typeof [`Media`](#media)\> : [`FilledLinkToMediaField`](#filledlinktomediafield)

Link field that points to media

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:472](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L472)

___

### OEmbedExtra

Ƭ **OEmbedExtra**: `Object`

oEmbed response extra fields. Those are every non-mandatory and unknown
fields an oEmbed response can feature.

**`see`** oEmbed specification: [https://oembed.com](https://oembed.com)

**Index signature**

▪ [key: `string`]: `unknown` \| ``null``

Providers may optionally include any parameters not specified in this
document (so long as they use the same key-value format) and consumers may
choose to ignore these. Consumers must ignore parameters they do not understand.

**`see`** oEmbed specification: [https://oembed.com](https://oembed.com)

**Type declaration**

| Name | Type | Description |
| :------ | :------ | :------ |
| `title?` | `string` \| ``null`` | oEmbed text title, describing the resource. |
| `author_name?` | `string` \| ``null`` | oEmbed resource author/owner name. |
| `author_url?` | `string` \| ``null`` | oEmbed resource author/owner URL. |
| `provider_name?` | `string` \| ``null`` | oEmbed resource provider name. |
| `provider_url?` | `string` \| ``null`` | oEmbed resource provider URL. |
| `cache_age?` | `number` \| ``null`` | oEmbed suggested cache lifetime for the resource, in seconds. |
| `thumbnail_url?` | `string` \| ``null`` | oEmbed resource thumbnail URL. |
| `thumbnail_width?` | `number` \| ``null`` | oEmbed resource thumbnail width. |
| `thumbnail_height?` | `number` \| ``null`` | oEmbed resource thumbnail height. |

**Defined in**

[fields.ts:515](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L515)

___

### PhotoOEmbed

Ƭ **PhotoOEmbed**: `OEmbedBase`<typeof [`Photo`](#photo)\> & { `url`: `string` ; `width`: `number` ; `height`: `number`  }

oEmbed photo type. Those are every mandatory fields an oEmbed photo response
must feature.

**`see`** oEmbed specification: [https://oembed.com](https://oembed.com)

**Defined in**

[fields.ts:577](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L577)

___

### VideoOEmbed

Ƭ **VideoOEmbed**: `OEmbedBase`<typeof [`Video`](#video)\> & { `html`: `string` ; `width`: `number` ; `height`: `number`  }

oEmbed video type. Those are every mandatory fields an oEmbed video response
must feature.

**`see`** oEmbed specification: [https://oembed.com](https://oembed.com)

**Defined in**

[fields.ts:600](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L600)

___

### LinkOEmbed

Ƭ **LinkOEmbed**: `OEmbedBase`<typeof [`Link`](#link)\>

oEmbed link type. Those are every mandatory fields an oEmbed link response
must feature.

**`see`** oEmbed specification: [https://oembed.com](https://oembed.com)

**Defined in**

[fields.ts:623](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L623)

___

### RichOEmbed

Ƭ **RichOEmbed**: `OEmbedBase`<typeof [`Rich`](#rich)\> & { `html`: `string` ; `width`: `number` ; `height`: `number`  }

oEmbed rich type. Those are every mandatory fields an oEmbed rich response
must feature.

**`see`** oEmbed specification: [https://oembed.com](https://oembed.com)

**Defined in**

[fields.ts:631](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L631)

___

### AnyOEmbed

Ƭ **AnyOEmbed**: [`PhotoOEmbed`](#photooembed) \| [`VideoOEmbed`](#videooembed) \| [`LinkOEmbed`](#linkoembed) \| [`RichOEmbed`](#richoembed)

Any of the possible types of oEmbed response. Those contains only mandatory
fields their respective oEmbed response type must feature.

**`see`** oEmbed specification: [https://oembed.com](https://oembed.com)

**Defined in**

[fields.ts:654](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L654)

___

### EmbedField

Ƭ **EmbedField**<`Data`, `State`\>: `State` extends ``"empty"`` ? `EmptyObjectField` : `Data` & { `embed_url`: `string` ; `html`: `string` \| ``null``  }

An Embed field.

**`see`** More details: [https://prismic.io/docs/core-concepts/embed](https://prismic.io/docs/core-concepts/embed)

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `Data` | extends [`AnyOEmbed`](#anyoembed) = [`AnyOEmbed`](#anyoembed) & [`OEmbedExtra`](#oembedextra) | Data provided by the URL's oEmbed provider. |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:663](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L663)

___

### DateField

Ƭ **DateField**<`State`\>: `State` extends ``"empty"`` ? ``null`` : \`${number}-${number}-${number}\`

A Date field.

**`see`** More details: [https://prismic.io/docs/core-concepts/date](https://prismic.io/docs/core-concepts/date)

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:681](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L681)

___

### TimestampField

Ƭ **TimestampField**<`State`\>: `State` extends ``"empty"`` ? ``null`` : \`${DateField<"filled"\>}T${number}:${number}:${number}+${number}\`

Simple Timestamp Field

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:689](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L689)

___

### ColorField

Ƭ **ColorField**<`State`\>: `State` extends ``"empty"`` ? ``null`` : \`#${string}\`

A Color field.

**`see`** More details: [https://prismic.io/docs/core-concepts/color](https://prismic.io/docs/core-concepts/color)

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:700](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L700)

___

### NumberField

Ƭ **NumberField**<`State`\>: `State` extends ``"empty"`` ? ``null`` : `number`

A Number field

**`see`** More details: [https://prismic.io/docs/core-concepts/number](https://prismic.io/docs/core-concepts/number)

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:709](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L709)

___

### KeyTextField

Ƭ **KeyTextField**<`State`\>: `State` extends ``"empty"`` ? ``null`` \| ``""`` : `string`

A Key text field

**`see`** More details: [https://prismic.io/docs/core-concepts/key-text](https://prismic.io/docs/core-concepts/key-text)

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:718](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L718)

___

### SelectField

Ƭ **SelectField**<`Enum`, `State`\>: `State` extends ``"empty"`` ? ``null`` : `Enum`

A Select field

**`see`** More details: [https://prismic.io/docs/core-concepts/select](https://prismic.io/docs/core-concepts/select)

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `Enum` | extends `string` = `string` | Selectable options for the field. |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:728](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L728)

___

### BooleanField

Ƭ **BooleanField**: `boolean`

A Boolean field.

**`see`** More details: [https://prismic.io/docs/core-concepts/boolean](https://prismic.io/docs/core-concepts/boolean)

**Defined in**

[fields.ts:738](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L738)

___

### GeoPointField

Ƭ **GeoPointField**<`State`\>: `State` extends ``"empty"`` ? `EmptyObjectField` : { `latitude`: `number` ; `longitude`: `number`  }

A Geopoint field.

**`see`** More details: [https://prismic.io/docs/core-concepts/geopoint](https://prismic.io/docs/core-concepts/geopoint)

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:746](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L746)

___

### GroupField

Ƭ **GroupField**<`Fields`, `State`\>: `State` extends ``"empty"`` ? [] : [`Fields`, ...Fields[]]

A Group field.

More details: [https://prismic.io/docs/core-concepts/group](https://prismic.io/docs/core-concepts/group)

**Type parameters**

| Name | Type |
| :------ | :------ |
| `Fields` | extends `Record`<`string`, [`AnyRegularField`](#anyregularfield)\> = `Record`<`string`, [`AnyRegularField`](#anyregularfield)\> |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) |

**Defined in**

[fields.ts:760](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L760)

___

### IntegrationFields

Ƭ **IntegrationFields**<`Blob`, `State`\>: `State` extends ``"empty"`` ? ``null`` : { `id`: `string` ; `title?`: `string` ; `description?`: `string` ; `image_url?`: `string` ; `last_update`: `number` ; `blob`: `Blob`  }

Integration Fields for Custom APIs

**`see`** More details: [https://prismic.io/docs/core-concepts/integration-fields-setup](https://prismic.io/docs/core-concepts/integration-fields-setup)

**Type parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `Blob` | `unknown` | Data from the integrated API. |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) | State of the field which determines its shape. |

**Defined in**

[fields.ts:775](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L775)

___

### SharedSlice

Ƭ **SharedSlice**<`SliceType`, `Variations`\>: { `slice_type`: `SliceType` ; `slice_label`: ``null``  } & `Variations`

Shared Slice

**`see`** More details: [https://prismic.io/docs/core-concepts/reusing-slices#shared-slices](https://prismic.io/docs/core-concepts/reusing-slices#shared-slices)

**Type parameters**

| Name | Type |
| :------ | :------ |
| `SliceType` | `string` |
| `Variations` | extends [`SharedSliceVariation`](#sharedslicevariation) = [`SharedSliceVariation`](#sharedslicevariation) |

**Defined in**

[fields.ts:816](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L816)

___

### SliceZone

Ƭ **SliceZone**<`Slices`, `State`\>: `State` extends ``"empty"`` ? [] : [`Slices`, ...Slices[]]

Prismic Slices are sections of your website. Prismic documents contain a
dynamic "Slice Zone" that allows content creators to add, edit, and rearrange
Slices to compose dynamic layouts for any page design, such as blog posts,
landing pages, case studies, and tutorials.

**`see`** More details: [https://prismic.io/docs/technologies/adding-the-slicezone-component-nextjs](https://prismic.io/docs/technologies/adding-the-slicezone-component-nextjs)

**Type parameters**

| Name | Type |
| :------ | :------ |
| `Slices` | extends [`Slice`](#slice) \| [`SharedSlice`](#sharedslice) = [`Slice`](#slice) \| [`SharedSlice`](#sharedslice) |
| `State` | extends [`FieldState`](#fieldstate) = [`FieldState`](#fieldstate) |

**Defined in**

[fields.ts:848](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L848)

___

### AnyRegularField

Ƭ **AnyRegularField**: [`TitleField`](#titlefield) \| [`RichTextField`](#richtextfield) \| [`ImageField`](#imagefield) \| [`RelationField`](#relationfield) \| [`LinkField`](#linkfield) \| [`LinkToMediaField`](#linktomediafield) \| [`DateField`](#datefield) \| [`TimestampField`](#timestampfield) \| [`ColorField`](#colorfield) \| [`NumberField`](#numberfield) \| [`KeyTextField`](#keytextfield) \| [`SelectField`](#selectfield) \| [`BooleanField`](#booleanfield) \| [`EmbedField`](#embedfield) \| [`GeoPointField`](#geopointfield) \| [`IntegrationFields`](#integrationfields)

**Defined in**

[fields.ts:855](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L855)

## Variables

### RichTextNodeType

• `Const` **RichTextNodeType**: `Object`

Types for RichTextNodes

**`see`** More details: [https://prismic.io/docs/core-concepts/rich-text-title](https://prismic.io/docs/core-concepts/rich-text-title)

**Type declaration**

| Name | Type |
| :------ | :------ |
| `heading1` | ``"heading1"`` |
| `heading2` | ``"heading2"`` |
| `heading3` | ``"heading3"`` |
| `heading4` | ``"heading4"`` |
| `heading5` | ``"heading5"`` |
| `heading6` | ``"heading6"`` |
| `paragraph` | ``"paragraph"`` |
| `preformatted` | ``"preformatted"`` |
| `strong` | ``"strong"`` |
| `em` | ``"em"`` |
| `listItem` | ``"list-item"`` |
| `oListItem` | ``"o-list-item"`` |
| `list` | ``"group-list-item"`` |
| `oList` | ``"group-o-list-item"`` |
| `image` | ``"image"`` |
| `embed` | ``"embed"`` |
| `hyperlink` | ``"hyperlink"`` |
| `label` | ``"label"`` |
| `span` | ``"span"`` |

**Defined in**

[fields.ts:13](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L13)

___

### LinkType

• `Const` **LinkType**: `Object`

Link Types

**Type declaration**

| Name | Type |
| :------ | :------ |
| `Any` | ``"Any"`` |
| `Document` | ``"Document"`` |
| `Media` | ``"Media"`` |
| `Web` | ``"Web"`` |

**Defined in**

[fields.ts:359](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L359)

___

### OEmbedType

• `Const` **OEmbedType**: `Object`

oEmbed 1.0 possible types.

**`see`** oEmbed specification: [https://oembed.com](https://oembed.com)

**Type declaration**

| Name | Type |
| :------ | :------ |
| `Photo` | ``"photo"`` |
| `Video` | ``"video"`` |
| `Link` | ``"link"`` |
| `Rich` | ``"rich"`` |

**Defined in**

[fields.ts:484](https://github.com/prismicio/prismic-types/blob/d15dccd/src/fields.ts#L484)
