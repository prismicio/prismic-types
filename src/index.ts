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
	// RichText & Title
	TitleField,
	RichTextField,
	// RichText & Title (block nodes)
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
	// RichText & Title (span nodes)
	RTSpanNodeBase,
	RTStrongNode,
	RTEmNode,
	RTLabelNode,
	// RichText & Title (media nodes)
	RTImageNode,
	RTEmbedNode,
	// RichText & Title (link nodes)
	RTLinkNode,
	// RichText & Title (serialization related nodes)
	RTListNode,
	RTOListNode,
	RTSpanNode,
	// RichText & Title (helpers)
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
	GroupField,
	IntegrationFields,
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

export {
	CustomTypeModelFieldType,
	CustomTypeModelLinkSelectType,
	CustomTypeModelSliceDisplay,
	CustomTypeModelSliceType,
} from "./customType";

export type {
	CustomTypeModel,
	CustomTypeModelDefinition,
	CustomTypeModelTab,
	// Fields
	CustomTypeModelField,
	CustomTypeModelFieldForGroup,
	// Individual Fields
	CustomTypeModelBooleanField,
	CustomTypeModelColorField,
	CustomTypeModelContentRelationshipField,
	CustomTypeModelDateField,
	CustomTypeModelEmbedField,
	CustomTypeModelGeoPointField,
	CustomTypeModelGroupField,
	CustomTypeModelImageConstraint,
	CustomTypeModelImageField,
	CustomTypeModelImageThumbnail,
	CustomTypeModelIntegrationFieldsField,
	CustomTypeModelKeyTextField,
	CustomTypeModelLinkField,
	CustomTypeModelLinkToMediaField,
	CustomTypeModelNumberField,
	CustomTypeModelRichTextField,
	CustomTypeModelRichTextMultiField,
	CustomTypeModelRichTextSingleField,
	CustomTypeModelSelectField,
	CustomTypeModelTimestampField,
	CustomTypeModelTitleField,
	CustomTypeModelUIDField,
	// Slices
	CustomTypeModelSliceZoneField,
	CustomTypeModelSlice,
	CustomTypeModelSliceLabel,
	CustomTypeModelSharedSlice,
	// SharedSlices
	SharedSliceModel,
	SharedSliceModelVariation,
} from "./customType";

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
