# [@prismicio/types](README.md) / customType

## Interfaces

### CustomTypeModel

• **CustomTypeModel**<`ID`, `Definition`\>: `Object`

A Prismic Custom Type model.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ID` | extends `string` = `string` | API ID of the Custom Type. |
| `Definition` | extends [`CustomTypeModelDefinition`](#customtypemodeldefinition) = [`CustomTypeModelDefinition`](#customtypemodeldefinition) | The Custom Type's tabs and their fields. |

#### Defined in

[customType.ts:7](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L7)

#### Properties

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `ID` | The ID of the Custom Type model. |
| `json` | `Definition` | The Custom Type model definition. |
| `label` | `string` | The human readable name of the Custom Type Model. |
| `repeatable` | `boolean` | Determines if more than one document for the Custom Type can be created. |
| `status` | `boolean` | Determines if new documents for the Custom Type can be created. |

</details>

___

### CustomTypeModelBooleanField

• **CustomTypeModelBooleanField**: `Object`

A Boolean Custom Type field.

More details: [https://prismic.io/docs/core-concepts/boolean](https://prismic.io/docs/core-concepts/boolean)

#### Defined in

[customType.ts:117](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L117)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `label`: `string`  } |
| `config.label` | `string` |
| `type` | ``"Boolean"`` |

</details>

___

### CustomTypeModelColorField

• **CustomTypeModelColorField**: `Object`

A Color Custom Type field.

More details: [https://prismic.io/docs/core-concepts/color](https://prismic.io/docs/core-concepts/color)

#### Defined in

[customType.ts:129](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L129)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `label`: `string` ; `placeholder?`: `string`  } |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `type` | ``"Color"`` |

</details>

___

### CustomTypeModelContentRelationshipField

• **CustomTypeModelContentRelationshipField**<`CustomTypeIDs`, `Tags`\>: `Object`

A Content Relationship Custom Type field.

More details: [https://prismic.io/docs/core-concepts/link-content-relationship](https://prismic.io/docs/core-concepts/link-content-relationship)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CustomTypeIDs` | extends `string` = `string` |
| `Tags` | extends `string` = `string` |

#### Defined in

[customType.ts:260](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L260)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `customtypes?`: readonly `CustomTypeIDs`[] ; `label`: `string` ; `placeholder?`: `string` ; `select`: ``"document"`` ; `tags?`: readonly `Tags`[]  } |
| `config.customtypes?` | readonly `CustomTypeIDs`[] |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `config.select` | ``"document"`` |
| `config.tags?` | readonly `Tags`[] |
| `type` | ``"Link"`` |

</details>

___

### CustomTypeModelDateField

• **CustomTypeModelDateField**: `Object`

A Date Custom Type field.

More details: [https://prismic.io/docs/core-concepts/date](https://prismic.io/docs/core-concepts/date)

#### Defined in

[customType.ts:142](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L142)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `label`: `string` ; `placeholder?`: `string`  } |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `type` | ``"Date"`` |

</details>

___

### CustomTypeModelEmbedField

• **CustomTypeModelEmbedField**: `Object`

An Embed Custom Type field.

More details: [https://prismic.io/docs/core-concepts/embed](https://prismic.io/docs/core-concepts/embed)

#### Defined in

[customType.ts:155](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L155)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `label`: `string` ; `placeholder?`: `string`  } |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `type` | ``"Embed"`` |

</details>

___

### CustomTypeModelGeoPointField

• **CustomTypeModelGeoPointField**: `Object`

A GeoPoint Custom Type field.

More details: [https://prismic.io/docs/core-concepts/geopoint](https://prismic.io/docs/core-concepts/geopoint)

#### Defined in

[customType.ts:168](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L168)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `label`: `string`  } |
| `config.label` | `string` |
| `type` | ``"GeoPoint"`` |

</details>

___

### CustomTypeModelGroupField

• **CustomTypeModelGroupField**<`Fields`\>: `Object`

A Group Custom Type field.

More details: [https://prismic.io/docs/core-concepts/group](https://prismic.io/docs/core-concepts/group)

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Fields` | extends `Record`<`string`, [`CustomTypeModelFieldForGroup`](#customtypemodelfieldforgroup)\> = `Record`<`string`, [`CustomTypeModelFieldForGroup`](#customtypemodelfieldforgroup)\> | A record of fields that can be repeated. |

#### Defined in

[customType.ts:182](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L182)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `fields`: `Fields` ; `label`: `string`  } |
| `config.fields` | `Fields` |
| `config.label` | `string` |
| `type` | ``"Group"`` |

</details>

___

### CustomTypeModelImageConstraint

• **CustomTypeModelImageConstraint**: `Object`

Dimension constraints for an Image Custom Type field.

More details: [https://prismic.io/docs/core-concepts/image](https://prismic.io/docs/core-concepts/image)

#### Defined in

[customType.ts:216](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L216)

#### Properties

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

</details>

___

### CustomTypeModelImageField

• **CustomTypeModelImageField**<`ThumbnailNames`\>: `Object`

An Image Custom Type field.

More details: [https://prismic.io/docs/core-concepts/image](https://prismic.io/docs/core-concepts/image)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ThumbnailNames` | extends `string` = `string` |

#### Defined in

[customType.ts:200](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L200)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `constraint`: [`CustomTypeModelImageConstraint`](#customtypemodelimageconstraint) \| `Record`<`string`, `never`\> ; `label`: `string` ; `thumbnails`: readonly [`CustomTypeModelImageThumbnail`](#customtypemodelimagethumbnail)<`ThumbnailNames`\>[]  } |
| `config.constraint` | [`CustomTypeModelImageConstraint`](#customtypemodelimageconstraint) \| `Record`<`string`, `never`\> |
| `config.label` | `string` |
| `config.thumbnails` | readonly [`CustomTypeModelImageThumbnail`](#customtypemodelimagethumbnail)<`ThumbnailNames`\>[] |
| `type` | ``"Image"`` |

</details>

___

### CustomTypeModelImageThumbnail

• **CustomTypeModelImageThumbnail**<`Name`\>: `Object`

A thumbnail for an Image Custom Type field.

More details: [https://prismic.io/docs/core-concepts/image](https://prismic.io/docs/core-concepts/image)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Name` | extends `string` = `string` |

#### Defined in

[customType.ts:226](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L226)

#### Properties

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `name` | `Name` |
| `width` | `number` |

</details>

___

### CustomTypeModelIntegrationFieldsField

• **CustomTypeModelIntegrationFieldsField**: `Object`

An Integration Fields Custom Type field.

More details: [https://prismic.io/docs/core-concepts/integration-fields](https://prismic.io/docs/core-concepts/integration-fields)

#### Defined in

[customType.ts:236](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L236)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `catalog`: `string` ; `label`: `string` ; `placeholder?`: `string`  } |
| `config.catalog` | `string` |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `type` | ``"IntegrationFields"`` |

</details>

___

### CustomTypeModelKeyTextField

• **CustomTypeModelKeyTextField**: `Object`

A Key Text Custom Type field.

More details: [https://prismic.io/docs/core-concepts/key-text](https://prismic.io/docs/core-concepts/key-text)

#### Defined in

[customType.ts:388](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L388)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `label`: `string` ; `placeholder?`: `string`  } |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `type` | ``"Text"`` |

</details>

___

### CustomTypeModelLinkField

• **CustomTypeModelLinkField**: `Object`

A Link Custom Type field.

More details: [https://prismic.io/docs/core-concepts/link-content-relationship](https://prismic.io/docs/core-concepts/link-content-relationship)

#### Defined in

[customType.ts:279](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L279)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `allowTargetBlank?`: ``true`` ; `label`: `string` ; `placeholder?`: `string` ; `select?`: ``null``  } |
| `config.allowTargetBlank?` | ``true`` |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `config.select?` | ``null`` |
| `type` | ``"Link"`` |

</details>

___

### CustomTypeModelLinkToMediaField

• **CustomTypeModelLinkToMediaField**: `Object`

A Link to Media Custom Type field.

More details: [https://prismic.io/docs/core-concepts/link-content-relationship](https://prismic.io/docs/core-concepts/link-content-relationship)

#### Defined in

[customType.ts:294](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L294)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `label`: `string` ; `placeholder?`: `string` ; `select`: ``"media"``  } |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `config.select` | ``"media"`` |
| `type` | ``"Link"`` |

</details>

___

### CustomTypeModelNumberField

• **CustomTypeModelNumberField**: `Object`

A Number Custom Type field.

More details: [https://prismic.io/docs/core-concepts/number](https://prismic.io/docs/core-concepts/number)

#### Defined in

[customType.ts:308](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L308)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `label`: `string` ; `placeholder?`: `string`  } |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `type` | ``"Number"`` |

</details>

___

### CustomTypeModelRichTextMultiField

• **CustomTypeModelRichTextMultiField**: `Object`

A Rich Text Custom Type field which supports multiple blocks of content.

More details: [https://prismic.io/docs/core-concepts/rich-text-title](https://prismic.io/docs/core-concepts/rich-text-title)

#### Defined in

[customType.ts:351](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L351)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `allowTargetBlank?`: ``true`` ; `label`: `string` ; `multi`: `string` ; `placeholder?`: `string`  } |
| `config.allowTargetBlank?` | ``true`` |
| `config.label` | `string` |
| `config.multi` | `string` |
| `config.placeholder?` | `string` |
| `type` | ``"StructuredText"`` |

</details>

___

### CustomTypeModelRichTextSingleField

• **CustomTypeModelRichTextSingleField**: `Object`

A Rich Text Custom Type field which supports one block of content.

More details: [https://prismic.io/docs/core-concepts/rich-text-title](https://prismic.io/docs/core-concepts/rich-text-title)

#### Defined in

[customType.ts:366](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L366)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `allowTargetBlank?`: ``true`` ; `label`: `string` ; `placeholder?`: `string` ; `single`: `string`  } |
| `config.allowTargetBlank?` | ``true`` |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `config.single` | `string` |
| `type` | ``"StructuredText"`` |

</details>

___

### CustomTypeModelSelectField

• **CustomTypeModelSelectField**<`Option`, `DefaultValue`\>: `Object`

A Select Custom Type field.

More details: [https://prismic.io/docs/core-concepts/select](https://prismic.io/docs/core-concepts/select)

**`typeparam`** Options for the field.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Option` | extends `string` = `string` | - |
| `DefaultValue` | extends `Option` = `Option` | Default value for the field. |

#### Defined in

[customType.ts:324](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L324)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `default_value?`: `DefaultValue` ; `label`: `string` ; `options`: `Option`[] ; `placeholder?`: `string`  } |
| `config.default_value?` | `DefaultValue` |
| `config.label` | `string` |
| `config.options` | `Option`[] |
| `config.placeholder?` | `string` |
| `type` | ``"Select"`` |

</details>

___

### CustomTypeModelSharedSlice

• **CustomTypeModelSharedSlice**: `Object`

A Shared Slice for a Custom Type.

More details:

- [https://prismic.io/docs/core-concepts/slices](https://prismic.io/docs/core-concepts/slices)
- [https://prismic.io/docs/core-concepts/reusing-slices](https://prismic.io/docs/core-concepts/reusing-slices)

#### Defined in

[customType.ts:506](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L506)

#### Properties

| Name | Type |
| :------ | :------ |
| `type` | ``"SharedSlice"`` |

</details>

___

### CustomTypeModelSlice

• **CustomTypeModelSlice**<`NonRepeatFields`, `RepeatFields`\>: `Object`

A Slice for a Custom Type.

More details: [https://prismic.io/docs/core-concepts/slices](https://prismic.io/docs/core-concepts/slices)

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `NonRepeatFields` | extends `Record`<`string`, [`CustomTypeModelFieldForGroup`](#customtypemodelfieldforgroup)\> = `Record`<`string`, [`CustomTypeModelFieldForGroup`](#customtypemodelfieldforgroup)\> | A record of fields that cannnot be repeated. |
| `RepeatFields` | extends `Record`<`string`, [`CustomTypeModelFieldForGroup`](#customtypemodelfieldforgroup)\> = `Record`<`string`, [`CustomTypeModelFieldForGroup`](#customtypemodelfieldforgroup)\> | A record of fields that can be repeated. |

#### Defined in

[customType.ts:479](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L479)

#### Properties

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `display` | ``"list"`` \| ``"grid"`` |
| `fieldset` | `string` |
| `icon` | `string` |
| `non-repeat` | `NonRepeatFields` |
| `repeat` | `RepeatFields` |
| `type` | ``"Slice"`` |

</details>

___

### CustomTypeModelSliceLabel

• **CustomTypeModelSliceLabel**: `Object`

Label for a Slice.

More details: [https://prismic.io/docs/core-concepts/slices](https://prismic.io/docs/core-concepts/slices)

#### Defined in

[customType.ts:446](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L446)

#### Properties

| Name | Type |
| :------ | :------ |
| `display` | `string` |
| `name` | `string` |

</details>

___

### CustomTypeModelSliceZoneField

• **CustomTypeModelSliceZoneField**<`Slices`\>: `Object`

A Slice Zone Custom Type field.

More details: [https://prismic.io/docs/core-concepts/slices](https://prismic.io/docs/core-concepts/slices)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Slices` | extends `Record`<`string`, [`CustomTypeModelSlice`](#customtypemodelslice) \| [`CustomTypeModelSharedSlice`](#customtypemodelsharedslice)\> = `Record`<`string`, [`CustomTypeModelSlice`](#customtypemodelslice) \| [`CustomTypeModelSharedSlice`](#customtypemodelsharedslice)\> |

#### Defined in

[customType.ts:427](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L427)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `choices`: `Slices` ; `labels`: `Record`<`string`, readonly [`CustomTypeModelSliceLabel`](#customtypemodelslicelabel)[]\>  } |
| `config.choices` | `Slices` |
| `config.labels` | `Record`<`string`, readonly [`CustomTypeModelSliceLabel`](#customtypemodelslicelabel)[]\> |
| `fieldset` | ``"Slice zone"`` |
| `type` | ``"Slices"`` |

</details>

___

### CustomTypeModelTimestampField

• **CustomTypeModelTimestampField**: `Object`

A Timestamp Custom Type field.

More details: [https://prismic.io/docs/core-concepts/timestamp](https://prismic.io/docs/core-concepts/timestamp)

#### Defined in

[customType.ts:401](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L401)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `label`: `string` ; `placeholder?`: `string`  } |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `type` | ``"Timestamp"`` |

</details>

___

### CustomTypeModelUIDField

• **CustomTypeModelUIDField**: `Object`

A UID Custom Type field.

More details: [https://prismic.io/docs/core-concepts/uid](https://prismic.io/docs/core-concepts/uid)

#### Defined in

[customType.ts:414](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L414)

#### Properties

| Name | Type |
| :------ | :------ |
| `config` | { `label`: `string` ; `placeholder?`: `string`  } |
| `config.label` | `string` |
| `config.placeholder?` | `string` |
| `type` | ``"UID"`` |

</details>

___

### SharedSliceModel

• **SharedSliceModel**<`ID`, `Variation`\>: `Object`

A Prismic Shared Slice model.

More details:

- [https://prismic.io/docs/core-concepts/slices](https://prismic.io/docs/core-concepts/slices)
- [https://prismic.io/docs/core-concepts/reusing-slices](https://prismic.io/docs/core-concepts/reusing-slices)

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ID` | extends `string` = `string` | - |
| `Variation` | extends [`SharedSliceModelVariation`](#sharedslicemodelvariation) = [`SharedSliceModelVariation`](#sharedslicemodelvariation) | A variation for the Shared Slice. |

#### Defined in

[customType.ts:520](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L520)

#### Properties

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `id` | `ID` |
| `name` | `string` |
| `type` | ``"SharedSlice"`` |
| `variations` | readonly `Variation`[] |

</details>

___

### SharedSliceModelVariation

• **SharedSliceModelVariation**<`ID`, `PrimaryFields`, `ItemFields`\>: `Object`

A Shared Slice variation.

More details:

- [https://prismic.io/docs/core-concepts/slices](https://prismic.io/docs/core-concepts/slices)
- [https://prismic.io/docs/core-concepts/reusing-slices](https://prismic.io/docs/core-concepts/reusing-slices)

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ID` | extends `string` = `string` | - |
| `PrimaryFields` | extends `Record`<`string`, [`CustomTypeModelFieldForGroup`](#customtypemodelfieldforgroup)\> = `Record`<`string`, [`CustomTypeModelFieldForGroup`](#customtypemodelfieldforgroup)\> | A record of fields that cannnot be repeated. |
| `ItemFields` | extends `Record`<`string`, [`CustomTypeModelFieldForGroup`](#customtypemodelfieldforgroup)\> = `Record`<`string`, [`CustomTypeModelFieldForGroup`](#customtypemodelfieldforgroup)\> | A record of fields that can be repeated. |

#### Defined in

[customType.ts:542](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L542)

#### Properties

| Name | Type |
| :------ | :------ |
| `description` | `string` |
| `docURL` | `string` |
| `id` | `ID` |
| `items` | `ItemFields` |
| `name` | `string` |
| `primary` | `PrimaryFields` |
| `version` | `string` |

</details>

## Type aliases

### CustomTypeModelDefinition

Ƭ **CustomTypeModelDefinition**<`TabName`\>: `Record`<`TabName`, [`CustomTypeModelTab`](#customtypemodeltab)\>

A Prismic Custom Type's tabs and their fields.

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `TabName` | extends `string` = `string` | Names of Custom Type tabs. |

#### Defined in

[customType.ts:42](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L42)

___

### CustomTypeModelField

Ƭ **CustomTypeModelField**: [`CustomTypeModelUIDField`](#customtypemodeluidfield) \| [`CustomTypeModelGroupField`](#customtypemodelgroupfield) \| [`CustomTypeModelSliceZoneField`](#customtypemodelslicezonefield) \| [`CustomTypeModelFieldForGroup`](#customtypemodelfieldforgroup)

A Custom Type field.

#### Defined in

[customType.ts:63](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L63)

___

### CustomTypeModelFieldForGroup

Ƭ **CustomTypeModelFieldForGroup**: [`CustomTypeModelBooleanField`](#customtypemodelbooleanfield) \| [`CustomTypeModelColorField`](#customtypemodelcolorfield) \| [`CustomTypeModelDateField`](#customtypemodeldatefield) \| [`CustomTypeModelEmbedField`](#customtypemodelembedfield) \| [`CustomTypeModelGeoPointField`](#customtypemodelgeopointfield) \| [`CustomTypeModelImageField`](#customtypemodelimagefield) \| [`CustomTypeModelIntegrationFieldsField`](#customtypemodelintegrationfieldsfield) \| [`CustomTypeModelContentRelationshipField`](#customtypemodelcontentrelationshipfield) \| [`CustomTypeModelLinkField`](#customtypemodellinkfield) \| [`CustomTypeModelLinkToMediaField`](#customtypemodellinktomediafield) \| [`CustomTypeModelNumberField`](#customtypemodelnumberfield) \| [`CustomTypeModelSelectField`](#customtypemodelselectfield) \| [`CustomTypeModelRichTextField`](#customtypemodelrichtextfield) \| [`CustomTypeModelTitleField`](#customtypemodeltitlefield) \| [`CustomTypeModelKeyTextField`](#customtypemodelkeytextfield) \| [`CustomTypeModelTimestampField`](#customtypemodeltimestampfield)

Any Custom Type field that is valid for a Group field.

#### Defined in

[customType.ts:72](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L72)

___

### CustomTypeModelRichTextField

Ƭ **CustomTypeModelRichTextField**: [`CustomTypeModelRichTextMultiField`](#customtypemodelrichtextmultifield) \| [`CustomTypeModelRichTextSingleField`](#customtypemodelrichtextsinglefield)

A Rich Text Custom Type field.

More details: [https://prismic.io/docs/core-concepts/rich-text-title](https://prismic.io/docs/core-concepts/rich-text-title)

#### Defined in

[customType.ts:342](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L342)

___

### CustomTypeModelTab

Ƭ **CustomTypeModelTab**<`Fields`\>: `Fields`

A Custom Type's tab. Each tab can contain any number of fields but is limited
to one Slice Zone.

**`typeparam`** API IDs of the fields.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Fields` | extends `Record`<`string`, [`CustomTypeModelField`](#customtypemodelfield)\> = `Record`<`string`, [`CustomTypeModelField`](#customtypemodelfield)\> |

#### Defined in

[customType.ts:53](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L53)

___

### CustomTypeModelTitleField

Ƭ **CustomTypeModelTitleField**: [`CustomTypeModelRichTextSingleField`](#customtypemodelrichtextsinglefield)

A Title Custom Type field.

More details: [https://prismic.io/docs/core-concepts/rich-text-title](https://prismic.io/docs/core-concepts/rich-text-title)

#### Defined in

[customType.ts:381](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L381)

## Variables

### CustomTypeModelFieldType

• `Const` **CustomTypeModelFieldType**: `Object`

Type identifier for a Custom Type field.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Boolean` | ``"Boolean"`` |
| `Color` | ``"Color"`` |
| `Date` | ``"Date"`` |
| `Embed` | ``"Embed"`` |
| `GeoPoint` | ``"GeoPoint"`` |
| `Group` | ``"Group"`` |
| `Image` | ``"Image"`` |
| `IntegrationFields` | ``"IntegrationFields"`` |
| `Link` | ``"Link"`` |
| `Number` | ``"Number"`` |
| `Select` | ``"Select"`` |
| `Slices` | ``"Slices"`` |
| `StructuredText` | ``"StructuredText"`` |
| `Text` | ``"Text"`` |
| `Timestamp` | ``"Timestamp"`` |
| `UID` | ``"UID"`` |

#### Defined in

[customType.ts:93](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L93)

___

### CustomTypeModelLinkSelectType

• `Const` **CustomTypeModelLinkSelectType**: `Object`

Type of a Link Custom Type field.

More details: [https://prismic.io/docs/core-concepts/link-content-relationship](https://prismic.io/docs/core-concepts/link-content-relationship)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Document` | ``"document"`` |
| `Media` | ``"media"`` |

#### Defined in

[customType.ts:250](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L250)

___

### CustomTypeModelSliceDisplay

• `Const` **CustomTypeModelSliceDisplay**: `Object`

Display type for a Slice.

More details: [https://prismic.io/docs/core-concepts/slices](https://prismic.io/docs/core-concepts/slices)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Grid` | ``"grid"`` |
| `List` | ``"list"`` |

#### Defined in

[customType.ts:456](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L456)

___

### CustomTypeModelSliceType

• `Const` **CustomTypeModelSliceType**: `Object`

Type identifier for a Slice.

More details: [https://prismic.io/docs/core-concepts/slices](https://prismic.io/docs/core-concepts/slices)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `SharedSlice` | ``"SharedSlice"`` |
| `Slice` | ``"Slice"`` |

#### Defined in

[customType.ts:466](https://github.com/prismicio/prismic-types/blob/c4fbec2/src/customType.ts#L466)
