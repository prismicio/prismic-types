import type { RichTextField, TitleField } from "./richText";
import type { ImageField } from "./image";
import type { LinkField, LinkToMediaField, RelationField } from "./link";
import { EmbedField } from "./embed";
import {
	BooleanField,
	ColorField,
	DateField,
	GeoPointField,
	KeyTextField,
	NumberField,
	SelectField,
	TimestampField,
} from "./simple";
import { IntegrationFields } from "./integrationFields";

/**
 * Empty state for object-shaped fields.
 */
export type EmptyObjectField = Record<string, never>;

/**
 * Valid states for fields. Not all fields use this type (e.g. BooleanField).
 */
export type FieldState = "empty" | "filled";

/**
 * Any regular field that can be nested in a group-like field.
 */
export type AnyRegularField =
	| TitleField
	| RichTextField
	| ImageField
	| RelationField
	| LinkField
	| LinkToMediaField
	| EmbedField
	| DateField
	| TimestampField
	| ColorField
	| NumberField
	| KeyTextField
	| SelectField
	| BooleanField
	| GeoPointField
	| IntegrationFields;

/**
 * Useful to flatten the type output to improve type hints shown in editors. And
 * also to transform an interface into a type to aide with assignability.
 *
 * Taken from the `type-fest` package.
 *
 * @typeParam T - The type to simplify.
 * @see https://github.com/sindresorhus/type-fest/blob/cbd7ec510bd136ac045bbc74e391ee686b8a9a2f/source/simplify.d.ts
 */
export type Simplify<T> = { [P in keyof T]: T[P] };
