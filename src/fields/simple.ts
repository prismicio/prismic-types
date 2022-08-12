import type { EmptyObjectField, FieldState } from "./types";

/**
 * A Date field.
 *
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/date}
 */
export type DateField<State extends FieldState = FieldState> =
	State extends "empty" ? null : `${number}-${number}-${number}`;

/**
 * Simple Timestamp Field
 *
 * @typeParam State - State of the field which determines its shape.
 */
export type TimestampField<State extends FieldState = FieldState> =
	State extends "empty"
		? null
		: `${DateField<"filled">}T${number}:${number}:${number}+${number}`;

/**
 * A Color field.
 *
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/color}
 */
export type ColorField<State extends FieldState = FieldState> =
	State extends "empty" ? null : `#${string}`;

/**
 * A Number field
 *
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/number}
 */
export type NumberField<State extends FieldState = FieldState> =
	State extends "empty" ? null : number;

/**
 * A Key text field
 *
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/key-text}
 */
export type KeyTextField<State extends FieldState = FieldState> =
	State extends "empty" ? null | "" : string;

/**
 * A Select field
 *
 * @typeParam Enum - Selectable options for the field.
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/select}
 */
export type SelectField<
	Enum extends string = string,
	State extends FieldState = FieldState,
> = State extends "empty" ? null : Enum;

/**
 * A Boolean field.
 *
 * @see More details: {@link https://prismic.io/docs/core-concepts/boolean}
 */
export type BooleanField = boolean;

/**
 * A Geopoint field.
 *
 * @typeParam State - State of the field which determines its shape.
 * @see More details: {@link https://prismic.io/docs/core-concepts/geopoint}
 */
export type GeoPointField<State extends FieldState = FieldState> =
	State extends "empty"
		? EmptyObjectField
		: {
				latitude: number;
				longitude: number;
		  };
