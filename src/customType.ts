export type CustomType<TabName extends string = string> = Record<
	TabName,
	CustomTypeTab
>;

export type CustomTypeTab<FieldName extends string = string> = Record<
	FieldName,
	CustomTypeField
>;

export type CustomTypeField =
	| CustomTypeUIDField
	| CustomTypeGroupField
	| CustomTypeSliceZoneField
	| CustomTypeFieldForGroup;

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
	| CustomTypeTextField
	| CustomTypeTimestampField;

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

export interface CustomTypeBooleanField {
	type: CustomTypeFieldType.Boolean;
	config: {
		label: string;
	};
}

export interface CustomTypeColorField {
	type: CustomTypeFieldType.Color;
	config: {
		label: string;
		placeholder?: string;
	};
}

export interface CustomTypeDateField {
	type: CustomTypeFieldType.Date;
	config: {
		label: string;
		placeholder?: string;
	};
}

export interface CustomTypeEmbedField {
	type: CustomTypeFieldType.Color;
	config: {
		label: string;
		placeholder?: string;
	};
}

export interface CustomTypeGeoPointField {
	type: CustomTypeFieldType.Color;
	config: {
		label: string;
	};
}

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

export interface CustomTypeImageField {
	type: CustomTypeFieldType.Image;
	config: {
		label: string;
		constraint: CustomTypeImageConstraint;
		thumbnails: readonly CustomTypeImageThumbnail[];
	};
}

export interface CustomTypeImageConstraint {
	width: number | null;
	height: number | null;
}

export interface CustomTypeImageThumbnail extends CustomTypeImageConstraint {
	name: string;
}

export interface CustomTypeIntegrationField {
	type: CustomTypeFieldType.IntegrationFields;
	config: {
		label: string;
		catalog: string;
	};
}

export enum CustomTypeLinkSelectType {
	Document = "document",
	Media = "media",
}

export interface CustomTypeContentRelationshipField {
	type: CustomTypeFieldType.Link;
	config: {
		label: string;
		placeholder?: string;
		select: CustomTypeLinkSelectType.Document;
	};
}

export interface CustomTypeLinkField {
	type: CustomTypeFieldType.Link;
	config: {
		label: string;
		placeholder?: string;
		select?: null;
		allowTargetBlank?: true;
	};
}

export interface CustomTypeLinkToMediaField {
	type: CustomTypeFieldType.Link;
	config: {
		label: string;
		placeholder?: string;
		select: CustomTypeLinkSelectType.Media;
	};
}

export interface CustomTypeNumberField {
	type: CustomTypeFieldType.Number;
	config: {
		label: string;
		placeholder?: string;
	};
}

export interface CustomTypeSelectField<Option extends string = string> {
	type: CustomTypeFieldType.Select;
	config: {
		label: string;
		placeholder?: string;
		options: readonly Option[];
		default_value?: Option;
	};
}

export type CustomTypeRichTextField =
	| CustomTypeRichTextMultiField
	| CustomTypeRichTextSingleField;

export interface CustomTypeRichTextMultiField {
	type: CustomTypeFieldType.StructuredText;
	config: {
		label: string;
		placeholder?: string;
		allowTargetBlank?: true;
		multi: string;
	};
}

export interface CustomTypeRichTextSingleField {
	type: CustomTypeFieldType.StructuredText;
	config: {
		label: string;
		placeholder?: string;
		allowTargetBlank?: true;
		single: string;
	};
}

export type CustomTypeTitleField = CustomTypeRichTextSingleField;

export interface CustomTypeTextField {
	type: CustomTypeFieldType.Text;
	config: {
		label: string;
		placeholder?: string;
	};
}

export interface CustomTypeTimestampField {
	type: CustomTypeFieldType.Timestamp;
	config: {
		label: string;
		placeholder?: string;
	};
}

export interface CustomTypeUIDField {
	type: CustomTypeFieldType.UID;
	config: {
		label: string;
		placeholder?: string;
	};
}

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

export interface CustomTypeSliceLabel {
	name: string;
	display: string;
}

export enum CustomTypeSliceDisplay {
	List = "list",
	Grid = "grid",
}

export enum CustomTypeSliceType {
	Slice = "Slice",
	SharedSlice = "SharedSlice",
}

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

export interface CustomTypeSharedSlice {
	type: CustomTypeSliceType.SharedSlice;
}
