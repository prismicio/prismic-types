import { expectNever, expectType, TypeOf } from "ts-expect";

import * as prismicT from "../src";

/**
 * FieldState
 */
(value: prismicT.FieldState): true => {
	switch (value) {
		case "filled":
		case "empty": {
			return true;
		}

		default: {
			return expectNever(value);
		}
	}
};

/**
 * AnyRegularField supports any field compatible with a Group.
 */
expectType<TypeOf<prismicT.AnyRegularField, prismicT.BooleanField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.ColorField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.DateField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.EmbedType>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.GeoPointField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.ImageField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.IntegrationFields>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.KeyTextField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.LinkField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.LinkToMediaField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.NumberField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.RelationField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.RichTextField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.SelectField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.TimestampField>>(true);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.TitleField>>(true);

/**
 * AnyRegularField excludes any fields not compatible with a Group.
 */
expectType<TypeOf<prismicT.AnyRegularField, prismicT.SliceZone>>(false);
expectType<TypeOf<prismicT.AnyRegularField, prismicT.GroupField>>(false);
