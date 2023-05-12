import { expectNever, expectType, TypeOf } from "ts-expect";

import * as prismicTICustomTypes from "@prismicio/types-internal/lib/customtypes";

import * as prismicT from "../src";

/**
 * CustomTypeModel
 */
(value: prismicT.CustomTypeModel): true => {
	switch (typeof value) {
		case "object": {
			if (value === null) {
				expectNever(value);
			}

			return true;
		}

		default: {
			return expectNever(value);
		}
	}
};
expectType<prismicT.CustomTypeModel>({
	id: "string",
	label: "string",
	repeatable: true,
	json: {
		Foo: {
			foo: {
				type: prismicT.CustomTypeModelFieldType.Boolean,
				config: {
					label: "string",
				},
			},
		},
	},
	status: true,
});
expectType<prismicT.CustomTypeModel<"foo">>({
	id: "foo",
	label: "string",
	repeatable: true,
	json: {
		Foo: {
			foo: {
				type: prismicT.CustomTypeModelFieldType.Boolean,
				config: {
					label: "string",
				},
			},
		},
	},
	status: true,
});
expectType<prismicT.CustomTypeModel<"foo">>({
	// @ts-expect-error - ID must match the given type.
	id: "string",
	label: "string",
	repeatable: true,
	json: {
		Foo: {
			foo: {
				type: prismicT.CustomTypeModelFieldType.Boolean,
				config: {
					label: "string",
				},
			},
		},
	},
	status: true,
});
expectType<
	prismicT.CustomTypeModel<
		string,
		{
			Foo: {
				foo: prismicT.CustomTypeModelBooleanField;
			};
		}
	>
>({
	id: "string",
	label: "string",
	repeatable: true,
	json: {
		Foo: {
			foo: {
				type: prismicT.CustomTypeModelFieldType.Boolean,
				config: {
					label: "string",
				},
			},
		},
		// @ts-expect-error - Only given tabs are valid.
		Bar: {
			foo: {
				type: prismicT.CustomTypeModelFieldType.Boolean,
				config: {
					label: "string",
				},
			},
		},
	},
	status: true,
});

/**
 * CustomTypeModelDefinition
 */
(value: prismicT.CustomTypeModelDefinition): true => {
	switch (typeof value) {
		case "object": {
			if (value === null) {
				expectNever(value);
			}

			return true;
		}

		default: {
			return expectNever(value);
		}
	}
};
expectType<prismicT.CustomTypeModelDefinition>({
	Foo: {
		foo: {
			type: prismicT.CustomTypeModelFieldType.Boolean,
			config: {
				label: "string",
			},
		},
	},
});
expectType<prismicT.CustomTypeModelDefinition<"Foo">>({
	Foo: {
		foo: {
			type: prismicT.CustomTypeModelFieldType.Boolean,
			config: {
				label: "string",
			},
		},
	},
	// @ts-expect-error - Only given tabs are valid.
	Bar: {
		foo: {
			type: prismicT.CustomTypeModelFieldType.Boolean,
			config: {
				label: "string",
			},
		},
	},
});

/**
 * CustomTypeModelTab
 */
(value: prismicT.CustomTypeModelTab): true => {
	switch (typeof value) {
		case "object": {
			if (value === null) {
				expectNever(value);
			}

			return true;
		}

		default: {
			return expectNever(value);
		}
	}
};
expectType<prismicT.CustomTypeModelTab>({
	foo: {
		type: prismicT.CustomTypeModelFieldType.Boolean,
		config: {
			label: "string",
		},
	},
});
expectType<
	prismicT.CustomTypeModelTab<{ foo: prismicT.CustomTypeModelBooleanField }>
>({
	foo: {
		type: prismicT.CustomTypeModelFieldType.Boolean,
		config: {
			label: "string",
		},
	},
	// @ts-expect-error - Only given fields are valid.
	bar: {
		type: prismicT.CustomTypeModelFieldType.Boolean,
		config: {
			label: "string",
		},
	},
});

/**
 * CustomTypeModelFieldForGroup supports any field compatible with a Group.
 */
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelBooleanField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelColorField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelDateField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelEmbedField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelGeoPointField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelImageField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelIntegrationFieldsField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelKeyTextField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelLinkField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelLinkToMediaField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelNumberField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelRichTextField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelSelectField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelTimestampField
	>
>(true);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelTitleField
	>
>(true);

/**
 * CustomTypeModelFieldForGroup excludes any fields not compatible with a Group.
 */
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelUIDField
	>
>(false);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelSliceZoneField
	>
>(false);
expectType<
	TypeOf<
		prismicT.CustomTypeModelFieldForGroup,
		prismicT.CustomTypeModelGroupField
	>
>(false);

/**
 * CustomTypeModelField includes any field.
 */
expectType<
	TypeOf<prismicT.CustomTypeModelField, prismicT.CustomTypeModelFieldForGroup>
>(true);
expectType<
	TypeOf<prismicT.CustomTypeModelField, prismicT.CustomTypeModelUIDField>
>(true);
expectType<
	TypeOf<prismicT.CustomTypeModelField, prismicT.CustomTypeModelGroupField>
>(true);
expectType<
	TypeOf<prismicT.CustomTypeModelField, prismicT.CustomTypeModelSliceZoneField>
>(true);

/**
 * `@prismicio/types` extends `@prismicio/types-internal`
 */
expectType<prismicT.CustomTypeModel>({} as prismicTICustomTypes.CustomType);

/**
 * `@prismicio/types-internal` extends `@prismicio/types`
 */
expectType<prismicTICustomTypes.CustomType>({} as prismicT.CustomTypeModel);
