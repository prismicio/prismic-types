// NOTE: The GraphQL exports are purposely not included in the root-level API.
// Instead, they are provided under their own `/graphql` entry.

//=============================================================================
// Value - Types representing Prismic document and field values.
//=============================================================================

export { RichTextNodeType } from "./value/richText";
export { LinkType } from "./value/link";
export { OEmbedType } from "./value/embed";

export type {
	PrismicDocument,
	PrismicDocumentWithUID,
	PrismicDocumentWithoutUID,
	PrismicDocumentHeader,
	AlternateLanguage,
} from "./value/document";

export type {
	// RichText & Title
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
} from "./value/richText";
export type { TitleField } from "./value/title";

export type {
	ImageField,
	ImageFieldImage,
	FilledImageFieldImage,
	EmptyImageFieldImage,
} from "./value/image";

export type {
	EmptyLinkField,
	LinkField,
	FilledLinkToWebField,
} from "./value/link";
export type {
	ContentRelationshipField,
	// TODO: Remove in v1
	ContentRelationshipField as RelationField,
	FilledContentRelationshipField,
	// TODO: Remove in v1
	FilledContentRelationshipField as FilledLinkToDocumentField,
} from "./value/contentRelationship";
export type {
	LinkToMediaField,
	FilledLinkToMediaField,
} from "./value/linkToMedia";

export type {
	OEmbedExtra,
	PhotoOEmbed,
	VideoOEmbed,
	LinkOEmbed,
	RichOEmbed,
	AnyOEmbed,
	EmbedField,
} from "./value/embed";

export type { BooleanField } from "./value/boolean";
export type { ColorField } from "./value/color";
export type { DateField } from "./value/date";
export type { KeyTextField } from "./value/keyText";
export type { NumberField } from "./value/number";
export type { SelectField } from "./value/select";
export type { TimestampField } from "./value/timestamp";
export type { GeoPointField } from "./value/geoPoint";

export type { IntegrationFields } from "./value/integrationFields";

export type { GroupField } from "./value/group";

export type { SliceZone } from "./value/sliceZone";
export type { Slice } from "./value/slice";
export type { SharedSlice } from "./value/sharedSlice";
export type { SharedSliceVariation } from "./value/sharedSliceVariation";

export type { FieldState, AnyRegularField } from "./value/types";

//=============================================================================
// Model - Types representing Prismic Custom Type and Shared Slice models.
//=============================================================================

export { CustomTypeModelFieldType } from "./model/types";
export { CustomTypeModelLinkSelectType } from "./model/link";
export { CustomTypeModelSliceType } from "./model/sliceZone";
export { CustomTypeModelSliceDisplay } from "./model/slice";

export type {
	CustomTypeModel,
	CustomTypeModelDefinition,
	CustomTypeModelTab,
} from "./model/customType";

export type {
	CustomTypeModelRichTextField,
	CustomTypeModelRichTextMultiField,
	CustomTypeModelRichTextSingleField,
} from "./model/richText";
export type { CustomTypeModelTitleField } from "./model/title";

export type {
	CustomTypeModelImageField,
	CustomTypeModelImageConstraint,
	CustomTypeModelImageThumbnail,
} from "./model/image";

export type { CustomTypeModelContentRelationshipField } from "./model/contentRelationship";
export type { CustomTypeModelLinkField } from "./model/link";
export type { CustomTypeModelLinkToMediaField } from "./model/linkToMedia";

export type { CustomTypeModelEmbedField } from "./model/embed";

export type { CustomTypeModelBooleanField } from "./model/boolean";
export type { CustomTypeModelColorField } from "./model/color";
export type { CustomTypeModelDateField } from "./model/date";
export type { CustomTypeModelKeyTextField } from "./model/keyText";
export type { CustomTypeModelNumberField } from "./model/number";
export type { CustomTypeModelSelectField } from "./model/select";
export type { CustomTypeModelTimestampField } from "./model/timestamp";
export type { CustomTypeModelGeoPointField } from "./model/geoPoint";

export type { CustomTypeModelIntegrationFieldsField } from "./model/integrationFields";
export type { CustomTypeModelGroupField } from "./model/group";
export type {
	CustomTypeModelSliceZoneField,
	CustomTypeModelSliceLabel,
	CustomTypeModelSharedSlice,
} from "./model/sliceZone";
export type {
	CustomTypeModelSlice,
	CustomTypeModelLegacySlice,
} from "./model/slice";
export type { SharedSliceModel } from "./model/sharedSlice";
export type { SharedSliceModelVariation } from "./model/sharedSliceVariation";

export type { CustomTypeModelUIDField } from "./model/uid";

export type { CustomTypeModelRangeField } from "./model/range";
export type { CustomTypeModelSeparatorField } from "./model/separator";

export type {
	CustomTypeModelField,
	CustomTypeModelFieldForGroup,
} from "./model/types";

//=============================================================================
// API - Types representing Prismic Rest API V2 responses.
//=============================================================================

export type { Query } from "./api/query";

export type { Ref } from "./api/ref";

export type { Release } from "./api/release";

export type { Repository, Language, Form, FormField } from "./api/repository";

export type { Tags } from "./api/tags";

//=============================================================================
// Webhook - Types representing Prismic webhooks.
//=============================================================================

export { WebhookType } from "./webhook/types";

export type { WebhookBody } from "./webhook/types";

export type { WebhookBodyAPIUpdate } from "./webhook/apiUpdate";

export type { WebhookBodyTestTrigger } from "./webhook/testTrigger";
