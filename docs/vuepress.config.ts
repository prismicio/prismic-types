import { name as title, description } from "../package.json";

export default {
	base: "/",
	lang: "en-us",
	title,
	description,
	// CSS links
	head: [["link", { rel: "stylesheet", href: "/index.css" }]],
	themeConfig: {
		home: "/",
		navbar: [
			{
				text: "Document (all)",
				link: "/modules/document",
				activeMatch: "^/(modules|interfaces|types|variables)/document\\.",
			},
			{
				text: "Fields (all)",
				link: "/modules/fields",
				activeMatch: "^/(modules|interfaces|types|variables)/fields\\.",
			},
			{
				text: "GraphQL Fields (all)",
				link: "/modules/graphql_fields",
				activeMatch: "^/(modules|interfaces|types|variables)/graphql_fields\\.",
			},
			{
				text: "API (all)",
				link: "/modules/api",
				activeMatch: "^/(modules|interfaces|types|variables)/api\\.",
			},
			{
				text: "Custom Type (all)",
				link: "/modules/customType",
				activeMatch: "^/(modules|interfaces|types|variables)/customType\\.",
			},
			{
				text: "Webhook (all)",
				link: "/modules/webhook",
				activeMatch: "^/(modules|interfaces|types|variables)/webhook\\.",
			},
		],
		sidebar: [
			{
				text: "README",
				link: "/",
			},
			{
				text: "Document",
				link: "/interfaces/document.PrismicDocument",
				collapsible: true,
				activeMatch: "^/(modules|interfaces|types|variables)/document\\.",
				children: [
					{
						text: "PrismicDocument",
						link: "/interfaces/document.PrismicDocument",
					},
					{
						text: "PrismicDocumentHeader",
						link: "/interfaces/document.PrismicDocumentHeader",
					},
				],
			},
			{
				text: "Fields",
				link: "/types/fields.TitleField",
				collapsible: true,
				activeMatch: "^/(modules|interfaces|types|variables)/fields\\.",
				children: [
					{
						text: "TitleField",
						link: "/types/fields.TitleField",
					},
					{
						text: "RichTextField",
						link: "/types/fields.RichTextField",
					},
					{
						text: "ImageField",
						link: "/types/fields.ImageField",
					},
					{
						text: "RelationField",
						link: "/types/fields.RelationField",
					},
					{
						text: "LinkField",
						link: "/types/fields.LinkField",
					},
					{
						text: "LinkToMediaField",
						link: "/types/fields.LinkToMediaField",
					},
					{
						text: "DateField",
						link: "/types/fields.DateField",
					},
					{
						text: "TimestampField",
						link: "/types/fields.TimestampField",
					},
					{
						text: "ColorField",
						link: "/types/fields.ColorField",
					},
					{
						text: "NumberField",
						link: "/types/fields.NumberField",
					},
					{
						text: "KeyTextField",
						link: "/types/fields.KeyTextField",
					},
					{
						text: "SelectField",
						link: "/types/fields.SelectField",
					},
					{
						text: "BooleanField",
						link: "/types/fields.BooleanField",
					},
					{
						text: "EmbedField",
						link: "/types/fields.EmbedField",
					},
					{
						text: "GeoPointField",
						link: "/types/fields.GeoPointField",
					},
					{
						text: "IntegrationFields",
						link: "/types/fields.IntegrationFields",
					},
					{
						text: "GroupField",
						link: "/types/fields.GroupField",
					},
					{
						text: "SliceZone",
						link: "/types/fields.SliceZone",
					},
					{
						text: "Slice",
						link: "/interfaces/fields.Slice",
					},
					{
						text: "SharedSlice",
						link: "/types/fields.SharedSlice",
					},
					{
						text: "SharedSliceVariation",
						link: "/interfaces/fields.SharedSliceVariation",
					},
				],
			},
			{
				text: "GraphQL Fields",
				link: "/types/graphql_fields.RelationField",
				collapsible: true,
				activeMatch: "^/(modules|interfaces|types|variables)/graphql_fields\\.",
				children: [
					{
						text: "RelationField",
						link: "/types/graphql_fields.RelationField",
					},
					{
						text: "LinkField",
						link: "/types/graphql_fields.LinkField",
					},
					{
						text: "LinkToMediaField",
						link: "/types/graphql_fields.LinkToMediaField",
					},
				],
			},
			{
				text: "API",
				link: "/interfaces/api.Repository",
				collapsible: true,
				activeMatch: "^/(modules|interfaces|types|variables)/api\\.",
				children: [
					{
						text: "Repository",
						link: "/interfaces/api.Repository",
					},
					{
						text: "Query",
						link: "/interfaces/api.Query",
					},
				],
			},
			{
				text: "Custom Type",
				link: "/interfaces/customType.CustomTypeModel",
				collapsible: true,
				activeMatch: "^/(modules|interfaces|types|variables)/customType\\.",
				children: [
					{
						text: "CustomTypeModel",
						link: "/interfaces/customType.CustomTypeModel",
					},
					{
						text: "CustomTypeModelDefinition",
						link: "/types/customType.CustomTypeModelDefinition",
					},
					{
						text: "CustomTypeModelRichTextSingleField",
						link: "/interfaces/customType.CustomTypeModelRichTextSingleField",
					},
					{
						text: "CustomTypeModelRichTextMultiField",
						link: "/interfaces/customType.CustomTypeModelRichTextMultiField",
					},
					{
						text: "CustomTypeModelImageField",
						link: "/interfaces/customType.CustomTypeModelImageField",
					},
					{
						text: "CustomTypeModelContentRelationshipField",
						link: "/interfaces/customType.CustomTypeModelContentRelationshipField",
					},
					{
						text: "CustomTypeModelLinkField",
						link: "/interfaces/customType.CustomTypeModelLinkField",
					},
					{
						text: "CustomTypeModelLinkToMediaField",
						link: "/interfaces/customType.CustomTypeModelLinkToMediaField",
					},
					{
						text: "CustomTypeModelDateField",
						link: "/interfaces/customType.CustomTypeModelDateField",
					},
					{
						text: "CustomTypeModelTimestampField",
						link: "/interfaces/customType.CustomTypeModelTimestampField",
					},
					{
						text: "CustomTypeModelColorField",
						link: "/interfaces/customType.CustomTypeModelColorField",
					},
					{
						text: "CustomTypeModelNumberField",
						link: "/interfaces/customType.CustomTypeModelNumberField",
					},
					{
						text: "CustomTypeModelKeyTextField",
						link: "/interfaces/customType.CustomTypeModelKeyTextField",
					},
					{
						text: "CustomTypeModelSelectField",
						link: "/interfaces/customType.CustomTypeModelSelectField",
					},
					{
						text: "CustomTypeModelBooleanField",
						link: "/interfaces/customType.CustomTypeModelBooleanField",
					},
					{
						text: "CustomTypeModelEmbedField",
						link: "/interfaces/customType.CustomTypeModelEmbedField",
					},
					{
						text: "CustomTypeModelGeoPointField",
						link: "/interfaces/customType.CustomTypeModelGeoPointField",
					},
					{
						text: "CustomTypeModelIntegrationFieldsField",
						link: "/interfaces/customType.CustomTypeModelIntegrationFieldsField",
					},
					{
						text: "CustomTypeModelGroupField",
						link: "/interfaces/customType.CustomTypeModelGroupField",
					},
					{
						text: "CustomTypeModelSlice",
						link: "/interfaces/customType.CustomTypeModelSlice",
					},
					{
						text: "CustomTypeModelSharedSlice",
						link: "/interfaces/customType.CustomTypeModelSharedSlice",
					},
				],
			},
			{
				text: "Webhook",
				link: "/types/webhook.WebhookBody",
				collapsible: true,
				activeMatch: "^/(modules|interfaces|types|variables)/webhook\\.",
				children: [
					{
						text: "WebhookBody",
						link: "/types/webhook.WebhookBody",
					},
					{
						text: "WebhookType",
						link: "/variables/webhook.WebhookType",
					},
				],
			},
		],
		sidebarDepth: 3,
		logo: "/logo.svg",
		logoDark: "/logo.svg",
		darkMode: true,
		repo: "prismicio/prismic-types",
		repoLabel: "GitHub",
		editLink: false,
		lastUpdated: false,
	},
	dest: "dist",
	public: "public",
	plugins: [
		[
			"@vuepress/plugin-search",
			{
				hotKeys: ["s", "k", "/"],
			},
		],
		[
			"vuepress-plugin-typedoc",
			{
				entryPoints: [
					"../src/document.ts",
					"../src/fields.ts",
					"../src/graphql/fields.ts",
					"../src/api.ts",
					"../src/customType.ts",
					"../src/webhook.ts",
				],
				tsconfig: "../tsconfig.json",
				allReflectionsHaveOwnDocument: true,
				hideBreadcrumbs: true,
				hidePageTitle: false,
				hideInPageTOC: true,
				categorizeByGroup: true,
				out: "",
			},
		],
	],
};
