/**
 * Returns a union of element types in an Iterable.
 *
 * @typeParam T Type from which to extract element types.
 */
type IterableElement<T> = T extends Iterable<infer U> ? U : never;

/**
 * A Prismic Custom Type model expressed in JSON.
 *
 * @typeParam TabName Names of Custom Type tabs.
 */
export type CustomType<TabName extends string = string> = Record<
	TabName,
	CustomTypeTab
>;

/**
 * A Custom Type's tab. Each tab can contain any number of fields but is limited to one Slice Zone.
 *
 * @typeParam FieldName API IDs of the fields.
 */
export type CustomTypeTab<FieldName extends string = string> = Record<
	FieldName,
	CustomTypeField
>;

/**
 * A Custom Type field.
 */
export type CustomTypeField =
	| CustomTypeUIDField
	| CustomTypeGroupField
	| CustomTypeSliceZoneField
	| CustomTypeFieldForGroup;

/**
 * Any Custom Type field that is valid for a Group field.
 */
export type CustomTypeFieldForGroup =
	| CustomTypeBooleanField
	| CustomTypeColorField
	| CustomTypeDateField
	| CustomTypeEmbedField
	| CustomTypeGeoPointField
	| CustomTypeImageField
	| CustomTypeIntegrationField
	| CustomTypeContentRelationshipField
	| CustomTypeLinkField
	| CustomTypeLinkToMediaField
	| CustomTypeNumberField
	| CustomTypeSelectField
	| CustomTypeRichTextField
	| CustomTypeTitleField
	| CustomTypeKeyTextField
	| CustomTypeTimestampField;

/**
 * Type identifier for a Custom Type field.
 */
export enum CustomTypeFieldType {
	Boolean = "Boolean",
	Color = "Color",
	Date = "Date",
	Embed = "Embed",
	GeoPoint = "GeoPoint",
	Group = "Group",
	Image = "Image",
	IntegrationFields = "IntegrationFields",
	Link = "Link",
	Number = "Number",
	Select = "Select",
	Slices = "Slices",
	StructuredText = "StructuredText",
	Text = "Text",
	Timestamp = "Timestamp",
	UID = "UID",
}

/**
 * A Boolean Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/boolean}
 */
export interface CustomTypeBooleanField {
	type: CustomTypeFieldType.Boolean;
	config: {
		label: string;
	};
}

/**
 * A Color Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/color}
 */
export interface CustomTypeColorField {
	type: CustomTypeFieldType.Color;
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
export interface CustomTypeDateField {
	type: CustomTypeFieldType.Date;
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
export interface CustomTypeEmbedField {
	type: CustomTypeFieldType.Embed;
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
export interface CustomTypeGeoPointField {
	type: CustomTypeFieldType.GeoPoint;
	config: {
		label: string;
	};
}

/**
 * A Group Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/group}
 *
 * @typeParam Fields A record of fields that can be repeated.
 */
export interface CustomTypeGroupField<
	Fields extends Record<string, CustomTypeFieldForGroup> = Record<
		string,
		CustomTypeFieldForGroup
	>,
> {
	type: CustomTypeFieldType.Group;
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
export interface CustomTypeImageField {
	type: CustomTypeFieldType.Image;
	config: {
		label: string;
		constraint: CustomTypeImageConstraint | Record<string, never>;
		thumbnails: readonly CustomTypeImageThumbnail[];
	};
}

/**
 * Dimension constraints for an Image Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/image}
 */
export interface CustomTypeImageConstraint {
	width: number | null;
	height: number | null;
}

/**
 * A thumbnail for an Image Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/image}
 */
export interface CustomTypeImageThumbnail extends CustomTypeImageConstraint {
	name: string;
}

/**
 * An Integration Fields Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/integration-fields}
 */
export interface CustomTypeIntegrationField {
	type: CustomTypeFieldType.IntegrationFields;
	config: {
		label: string;
		catalog: string;
	};
}

/**
 * Type of a Link Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/link-content-relationship}
 */
export enum CustomTypeLinkSelectType {
	Document = "document",
	Media = "media",
}

/**
 * A Content Relationship Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/link-content-relationship}
 */
export interface CustomTypeContentRelationshipField {
	type: CustomTypeFieldType.Link;
	config: {
		label: string;
		placeholder?: string;
		select: CustomTypeLinkSelectType.Document;
	};
}

/**
 * A Link Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/link-content-relationship}
 */
export interface CustomTypeLinkField {
	type: CustomTypeFieldType.Link;
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
export interface CustomTypeLinkToMediaField {
	type: CustomTypeFieldType.Link;
	config: {
		label: string;
		placeholder?: string;
		select: CustomTypeLinkSelectType.Media;
	};
}

/**
 * A Number Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/number}
 */
export interface CustomTypeNumberField {
	type: CustomTypeFieldType.Number;
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
 * @typeParam Options Options for the field.
 * @typeParam DefaultValue Default value for the field.
 */
export interface CustomTypeSelectField<
	Options extends readonly string[] = readonly string[],
	DefaultValue extends IterableElement<Options> = IterableElement<Options>,
> {
	type: CustomTypeFieldType.Select;
	config: {
		label: string;
		placeholder?: string;
		options: Options;
		default_value?: DefaultValue;
	};
}

/**
 * A Rich Text Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/rich-text-title}
 */
export type CustomTypeRichTextField =
	| CustomTypeRichTextMultiField
	| CustomTypeRichTextSingleField;

/**
 * A Rich Text Custom Type field which supports multiple blocks of content.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/rich-text-title}
 */
export interface CustomTypeRichTextMultiField {
	type: CustomTypeFieldType.StructuredText;
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
export interface CustomTypeRichTextSingleField {
	type: CustomTypeFieldType.StructuredText;
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
export type CustomTypeTitleField = CustomTypeRichTextSingleField;

/**
 * A Key Text Custom Type field.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/key-text}
 */
export interface CustomTypeKeyTextField {
	type: CustomTypeFieldType.Text;
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
export interface CustomTypeTimestampField {
	type: CustomTypeFieldType.Timestamp;
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
export interface CustomTypeUIDField {
	type: CustomTypeFieldType.UID;
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
export interface CustomTypeSliceZoneField<
	Slices extends Record<
		string,
		CustomTypeSlice | CustomTypeSharedSlice
	> = Record<string, CustomTypeSlice | CustomTypeSharedSlice>,
> {
	type: CustomTypeFieldType.Slices;
	fieldset: "Slice zone";
	config: {
		labels: Record<keyof Slices, readonly CustomTypeSliceLabel[]>;
		choices: Slices;
	};
}

/**
 * Label for a Slice.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export interface CustomTypeSliceLabel {
	name: string;
	display: string;
}

/**
 * Display type for a Slice.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export enum CustomTypeSliceDisplay {
	List = "list",
	Grid = "grid",
}

/**
 * Type identifier for a Slice.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export enum CustomTypeSliceType {
	Slice = "Slice",
	SharedSlice = "SharedSlice",
}

/**
 * A Slice for a Custom Type.
 *
 * More details: {@link https://prismic.io/docs/core-concepts/slices}
 */
export interface CustomTypeSlice<
	NonRepeatFields extends Record<string, CustomTypeFieldForGroup> = Record<
		string,
		CustomTypeFieldForGroup
	>,
	RepeatFields extends Record<string, CustomTypeFieldForGroup> = Record<
		string,
		CustomTypeFieldForGroup
	>,
> {
	type: CustomTypeSliceType.Slice;
	fieldset: string;
	description: string;
	icon: string;
	display: CustomTypeSliceDisplay;
	"non-repeat": NonRepeatFields;
	repeat: RepeatFields;
}

/**
 * A Shared Slice for a Custom Type.
 *
 * More details:
 * - {@link https://prismic.io/docs/core-concepts/slices}
 * - {@link https://prismic.io/docs/core-concepts/reusing-slices}
 */
export interface CustomTypeSharedSlice {
	type: CustomTypeSliceType.SharedSlice;
}
