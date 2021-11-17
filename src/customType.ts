/**
 * A Prismic Custom Type model.
 *
 * @typeParam ID - API ID of the Custom Type.
 * @typeParam Definition - The Custom Type's tabs and their fields.
 */
export interface CustomTypeModel<
	ID extends string = string,
	Definition extends CustomTypeModelDefinition = CustomTypeModelDefinition,
> {
	/**
	 * The ID of the Custom Type model.
	 */
	id: ID;

	/**
	 * The human readable name of the Custom Type Model.
	 */
	label: string;

	/**
	 * Determines if more than one document for the Custom Type can be created.
	 */
	repeatable: boolean;

	/**
	 * The Custom Type model definition.
	 */
	json: Definition;

	/**
	 * Determines if new documents for the Custom Type can be created.
	 */
	status: boolean;
}

/**
 * A Prismic Custom Type's tabs and their fields.
 *
 * @typeParam TabName - Names of Custom Type tabs.
 */
export type CustomTypeModelDefinition<TabName extends string = string> = Record<
	TabName,
	CustomTypeModelTab
>;

/**
 * A Custom Type's tab. Each tab can contain any number of fields but is limited
 * to one Slice Zone.
 *
 * @typeParam FieldName - API IDs of the fields.
 */
export type CustomTypeModelTab<
	Fields extends Record<string, CustomTypeModelField> = Record<
		string,
		CustomTypeModelField
	>,
> = Fields;

/**
 * A Custom Type field.
 */
export type CustomTypeModelField =
	| CustomTypeModelUIDField
	| CustomTypeModelGroupField
	| CustomTypeModelSliceZoneField
	| CustomTypeModelFieldForGroup;

/**
 * Any Custom Type field that is valid for a Group field.
 */
export type CustomTypeModelFieldForGroup =
	| CustomTypeModelBooleanField
	| CustomTypeModelColorField
	| CustomTypeModelDateField
	| CustomTypeModelEmbedField
	| CustomTypeModelGeoPointField
	| CustomTypeModelImageField
	| CustomTypeModelIntegrationFieldsField
	| CustomTypeModelContentRelationshipField
	| CustomTypeModelLinkField
	| CustomTypeModelLinkToMediaField
	| CustomTypeModelNumberField
	| CustomTypeModelSelectField
	| CustomTypeModelRichTextField
	| CustomTypeModelTitleField
	| CustomTypeModelKeyTextField
	| CustomTypeModelTimestampField;

/**
 * Type identifier for a Custom Type field.
 */
export const CustomTypeModelFieldType = {
	Boolean: "Boolean",
	Color: "Color",
	Date: "Date",
	Embed: "Embed",
	GeoPoint: "GeoPoint",
	Group: "Group",
	Image: "Image",
	IntegrationFields: "IntegrationFields",
	Link: "Link",
	Number: "Number",
	Select: "Select",
	Slices: "Slices",
	StructuredText: "StructuredText",
	Text: "Text",
	Timestamp: "Timestamp",
	UID: "UID",
} as const;

/**
 * A Boolean Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/boolean}
 */
export interface CustomTypeModelBooleanField {
	type: typeof CustomTypeModelFieldType.Boolean;
	config: {
		label: string;
	};
}

/**
 * A Color Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/color}
 */
export interface CustomTypeModelColorField {
	type: typeof CustomTypeModelFieldType.Color;
	config: {
		label: string;
		placeholder?: string;
	};
}

/**
 * A Date Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/date}
 */
export interface CustomTypeModelDateField {
	type: typeof CustomTypeModelFieldType.Date;
	config: {
		label: string;
		placeholder?: string;
	};
}

/**
 * An Embed Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/embed}
 */
export interface CustomTypeModelEmbedField {
	type: typeof CustomTypeModelFieldType.Embed;
	config: {
		label: string;
		placeholder?: string;
	};
}

/**
 * A GeoPoint Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/geopoint}
 */
export interface CustomTypeModelGeoPointField {
	type: typeof CustomTypeModelFieldType.GeoPoint;
	config: {
		label: string;
	};
}

/**
 * A Group Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/group}
 *
 * @typeParam Fields - A record of fields that can be repeated.
 */
export interface CustomTypeModelGroupField<
	Fields extends Record<string, CustomTypeModelFieldForGroup> = Record<
		string,
		CustomTypeModelFieldForGroup
	>,
> {
	type: typeof CustomTypeModelFieldType.Group;
	config: {
		label: string;
		fields: Fields;
	};
}

/**
 * An Image Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/image}
 */
export interface CustomTypeModelImageField<
	ThumbnailNames extends string = string,
> {
	type: typeof CustomTypeModelFieldType.Image;
	config: {
		label: string;
		constraint: CustomTypeModelImageConstraint | Record<string, never>;
		thumbnails: readonly CustomTypeModelImageThumbnail<ThumbnailNames>[];
	};
}

/**
 * Dimension constraints for an Image Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/image}
 */
export interface CustomTypeModelImageConstraint {
	width: number | null;
	height: number | null;
}

/**
 * A thumbnail for an Image Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/image}
 */
export interface CustomTypeModelImageThumbnail<Name extends string = string>
	extends CustomTypeModelImageConstraint {
	name: Name;
}

/**
 * An Integration Fields Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/integration-fields}
 */
export interface CustomTypeModelIntegrationFieldsField {
	type: typeof CustomTypeModelFieldType.IntegrationFields;
	config: {
		label: string;
		placeholder?: string;
		catalog: string;
	};
}

/**
 * Type of a Link Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/link-content-relationship}
 */
export const CustomTypeModelLinkSelectType = {
	Document: "document",
	Media: "media",
} as const;

/**
 * A Content Relationship Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/link-content-relationship}
 */
export interface CustomTypeModelContentRelationshipField<
	CustomTypeIDs extends string = string,
	Tags extends string = string,
> {
	type: typeof CustomTypeModelFieldType.Link;
	config: {
		label: string;
		placeholder?: string;
		select: typeof CustomTypeModelLinkSelectType.Document;
		customtypes?: readonly CustomTypeIDs[];
		tags?: readonly Tags[];
	};
}

/**
 * A Link Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/link-content-relationship}
 */
export interface CustomTypeModelLinkField {
	type: typeof CustomTypeModelFieldType.Link;
	config: {
		label: string;
		placeholder?: string;
		select?: null;
		allowTargetBlank?: true;
	};
}

/**
 * A Link to Media Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/link-content-relationship}
 */
export interface CustomTypeModelLinkToMediaField {
	type: typeof CustomTypeModelFieldType.Link;
	config: {
		label: string;
		placeholder?: string;
		select: typeof CustomTypeModelLinkSelectType.Media;
	};
}

/**
 * A Number Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/number}
 */
export interface CustomTypeModelNumberField {
	type: typeof CustomTypeModelFieldType.Number;
	config: {
		label: string;
		placeholder?: string;
	};
}

/**
 * A Select Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/select}
 *
 * @typeParam Options - Options for the field.
 * @typeParam DefaultValue - Default value for the field.
 */
export interface CustomTypeModelSelectField<
	Option extends string = string,
	DefaultValue extends Option = Option,
> {
	type: typeof CustomTypeModelFieldType.Select;
	config: {
		label: string;
		placeholder?: string;
		options: Option[];
		default_value?: DefaultValue;
	};
}

/**
 * A Rich Text Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/rich-text-title}
 */
export type CustomTypeModelRichTextField =
	| CustomTypeModelRichTextMultiField
	| CustomTypeModelRichTextSingleField;

/**
 * A Rich Text Custom Type field which supports multiple blocks of content.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/rich-text-title}
 */
export interface CustomTypeModelRichTextMultiField {
	type: typeof CustomTypeModelFieldType.StructuredText;
	config: {
		label: string;
		placeholder?: string;
		allowTargetBlank?: true;
		multi: string;
	};
}

/**
 * A Rich Text Custom Type field which supports one block of content.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/rich-text-title}
 */
export interface CustomTypeModelRichTextSingleField {
	type: typeof CustomTypeModelFieldType.StructuredText;
	config: {
		label: string;
		placeholder?: string;
		allowTargetBlank?: true;
		single: string;
	};
}

/**
 * A Title Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/rich-text-title}
 */
export type CustomTypeModelTitleField = CustomTypeModelRichTextSingleField;

/**
 * A Key Text Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/key-text}
 */
export interface CustomTypeModelKeyTextField {
	type: typeof CustomTypeModelFieldType.Text;
	config: {
		label: string;
		placeholder?: string;
	};
}

/**
 * A Timestamp Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/timestamp}
 */
export interface CustomTypeModelTimestampField {
	type: typeof CustomTypeModelFieldType.Timestamp;
	config: {
		label: string;
		placeholder?: string;
	};
}

/**
 * A UID Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/uid}
 */
export interface CustomTypeModelUIDField {
	type: typeof CustomTypeModelFieldType.UID;
	config: {
		label: string;
		placeholder?: string;
	};
}

/**
 * A Slice Zone Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export interface CustomTypeModelSliceZoneField<
	Slices extends Record<
		string,
		CustomTypeModelSlice | CustomTypeModelSharedSlice
	> = Record<string, CustomTypeModelSlice | CustomTypeModelSharedSlice>,
> {
	type: typeof CustomTypeModelFieldType.Slices;
	fieldset: "Slice zone";
	config: {
		labels: Record<string, readonly CustomTypeModelSliceLabel[]>;
		choices: Slices;
	};
}

/**
 * Label for a Slice.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export interface CustomTypeModelSliceLabel {
	name: string;
	display: string;
}

/**
 * Display type for a Slice.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export const CustomTypeModelSliceDisplay = {
	List: "list",
	Grid: "grid",
} as const;

/**
 * Type identifier for a Slice.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export const CustomTypeModelSliceType = {
	Slice: "Slice",
	SharedSlice: "SharedSlice",
} as const;

/**
 * A Slice for a Custom Type.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 *
 * @typeParam NonRepeatFields - A record of fields that cannnot be repeated.
 * @typeParam RepeatFields - A record of fields that can be repeated.
 */
export interface CustomTypeModelSlice<
	NonRepeatFields extends Record<string, CustomTypeModelFieldForGroup> = Record<
		string,
		CustomTypeModelFieldForGroup
	>,
	RepeatFields extends Record<string, CustomTypeModelFieldForGroup> = Record<
		string,
		CustomTypeModelFieldForGroup
	>,
> {
	type: typeof CustomTypeModelSliceType.Slice;
	fieldset: string;
	description: string;
	icon: string;
	display: typeof CustomTypeModelSliceDisplay[keyof typeof CustomTypeModelSliceDisplay];
	"non-repeat": NonRepeatFields;
	repeat: RepeatFields;
}

/**
 * A Shared Slice for a Custom Type.
 *
 * More details:
 *
 * - {@link https://prismic.io/docs/core-concepts/slices}
 * - {@link https://prismic.io/docs/core-concepts/reusing-slices}
 */
export interface CustomTypeModelSharedSlice {
	type: typeof CustomTypeModelSliceType.SharedSlice;
}

/**
 * A Prismic Shared Slice model.
 *
 * More details:
 *
 * - {@link https://prismic.io/docs/core-concepts/slices}
 * - {@link https://prismic.io/docs/core-concepts/reusing-slices}
 *
 * @typeParam Variation - A variation for the Shared Slice.
 */
export interface SharedSliceModel<
	ID extends string = string,
	Variation extends SharedSliceModelVariation = SharedSliceModelVariation,
> {
	type: typeof CustomTypeModelSliceType.SharedSlice;
	id: ID;
	name: string;
	description: string;
	variations: readonly Variation[];
}

/**
 * A Shared Slice variation.
 *
 * More details:
 *
 * - {@link https://prismic.io/docs/core-concepts/slices}
 * - {@link https://prismic.io/docs/core-concepts/reusing-slices}
 *
 * @typeParam PrimaryFields - A record of fields that cannnot be repeated.
 * @typeParam ItemFields - A record of fields that can be repeated.
 */
export interface SharedSliceModelVariation<
	ID extends string = string,
	PrimaryFields extends Record<string, CustomTypeModelFieldForGroup> = Record<
		string,
		CustomTypeModelFieldForGroup
	>,
	ItemFields extends Record<string, CustomTypeModelFieldForGroup> = Record<
		string,
		CustomTypeModelFieldForGroup
	>,
> {
	id: ID;
	name: string;
	docURL: string;
	version: string;
	description: string;
	primary: PrimaryFields;
	items: ItemFields;
}
