export type {
	PrismicDocumentHeader,
	PrismicDocument,
	PrismicDocumentWithUID,
	PrismicDocumentWithoutUID,
	AlternateLanguage,
} from "./document";

export { RichTextNodeType, LinkType, OEmbedType } from "./fields";

// Deprecations
import { OEmbedType } from "./fields";
/**
 * @deprecated Use {@link OEmbedType} instead.
 */
export const EmbedType = OEmbedType;

export type {
	// Rich Text & Title
	TitleField,
	RichTextField,
	// Rich Text & Title (block nodes)
	RTTextNodeBase,
	RTHeading1Node,
	RTHeading2Node,
	RTHeading3Node,
	RTHeading4Node,
	RTHeading5Node,
	RTHeading6Node,
	RTParagraphNode,
	RTPreformattedNode,
	RTListItemNode,
	RTOListItemNode,
	// Rich Text & Title (span nodes)
	RTSpanNodeBase,
	RTStrongNode,
	RTEmNode,
	RTLabelNode,
	// Rich Text & Title (media nodes)
	RTImageNode,
	RTEmbedNode,
	// Rich Text & Title (link nodes)
	RTLinkNode,
	// Rich Text & Title (serialization related nodes)
	RTListNode,
	RTOListNode,
	RTSpanNode,
	// Rich Text & Title (helpers)
	RTNode,
	RTTextNode,
	RTBlockNode,
	RTInlineNode,
	RTAnyNode,
	// Image
	ImageField,
	ImageFieldImage,
	FilledImageFieldImage,
	EmptyImageFieldImage,
	// Links
	EmptyLinkField,
	FilledLinkToDocumentField,
	FilledLinkToWebField,
	FilledLinkToMediaField,
	RelationField,
	LinkField,
	LinkToMediaField,
	// Embed
	OEmbedExtra,
	PhotoOEmbed,
	VideoOEmbed,
	LinkOEmbed,
	RichOEmbed,
	AnyOEmbed,
	EmbedField,
	// Simple
	DateField,
	TimestampField,
	ColorField,
	NumberField,
	KeyTextField,
	SelectField,
	BooleanField,
	GeoPointField,
	// Complex
	IntegrationFields,
	GroupField,
	Slice,
	SharedSlice,
	SharedSliceVariation,
	SliceZone,
	// Misc
	AnyRegularField,
	// Meta
	FieldState,
} from "./fields";

// Deprecations (unused import for @link references)
import type {
	OEmbedExtra,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	PhotoOEmbed,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	VideoOEmbed,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	LinkOEmbed,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	RichOEmbed,
	AnyOEmbed,
} from "./fields";
/**
 * @deprecated Use {@link PhotoOEmbed}, {@link VideoOEmbed}, {@link LinkOEmbed},
 *   {@link RichOEmbed}, or {@link AnyOEmbed} instead.
 */
export type CommonEmbedData = AnyOEmbed & OEmbedExtra;

export type {
	CustomTypeModel,
	CustomTypeModelDefinition,
	CustomTypeModelTab,
} from "./customType";

export {
	CustomTypeModelFieldType,
	CustomTypeModelLinkSelectType,
	CustomTypeModelSliceDisplay,
	CustomTypeModelSliceType,
} from "./customTypeModelFields";

export type {
	// Rich Text & Title
	CustomTypeModelRichTextField,
	CustomTypeModelTitleField,
	CustomTypeModelRichTextMultiField,
	CustomTypeModelRichTextSingleField,
	// Image
	CustomTypeModelImageField,
	CustomTypeModelImageConstraint,
	CustomTypeModelImageThumbnail,
	// Links
	CustomTypeModelContentRelationshipField,
	CustomTypeModelLinkField,
	CustomTypeModelLinkToMediaField,
	// Embed
	CustomTypeModelEmbedField,
	// Simple
	CustomTypeModelBooleanField,
	CustomTypeModelColorField,
	CustomTypeModelDateField,
	CustomTypeModelKeyTextField,
	CustomTypeModelNumberField,
	CustomTypeModelSelectField,
	CustomTypeModelTimestampField,
	CustomTypeModelGeoPointField,
	// Complex
	CustomTypeModelGroupField,
	CustomTypeModelIntegrationFieldsField,
	// Slices
	CustomTypeModelSliceZoneField,
	CustomTypeModelSlice,
	CustomTypeModelSliceLabel,
	CustomTypeModelSharedSlice,
	CustomTypeModelLegacySlice,
	// SharedSlices
	SharedSliceModel,
	SharedSliceModelVariation,
	// Depracated
	CustomTypeModelRangeField,
	CustomTypeModelSeparatorField,
	// Misc
	CustomTypeModelUIDField,
	CustomTypeModelField,
	CustomTypeModelFieldForGroup,
} from "./customTypeModelFields";

export type {
	Repository,
	Ref,
	Release,
	Language,
	Query,
	Form,
	FormField,
	Tags,
} from "./api";

export { WebhookType } from "./webhook";

export type {
	WebhookBody,
	WebhookBodyAPIUpdate,
	WebhookBodyTestTrigger,
} from "./webhook";
