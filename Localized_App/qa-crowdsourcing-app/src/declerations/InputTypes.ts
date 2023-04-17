import {
	TextInputProps as RNTextInputProps,
	CheckBoxProps as RNCheckBoxProps,
} from "react-native";

export enum InputElementTypes {
	text,
	hidden,
	authCode,
	checkBox,
}

export interface InputBaseInterface {
	required?: boolean;
	hidden?: boolean;
}

/**
 * TEXT INPUTS
 */

export interface TextInputBase extends InputBaseInterface {
	value: string;
	placeholder?: string;
	props?: RNTextInputProps;
}

export interface TextInputProps extends TextInputBase {
	onChange: (v: any) => void;
}

export interface TextInputRecipe extends TextInputBase {
	type: InputElementTypes.text;
	label: string;
}

/**
 * HIDDEN INPUTS
 */

export interface HiddenInputBase extends InputBaseInterface {
	value: string;
	placeholder?: string;
	props?: RNTextInputProps;
}

export interface HiddenInputProps extends HiddenInputBase {
	onChange: (v: any) => void;
}

export interface HiddenInputRecipe extends HiddenInputBase {
	type: InputElementTypes.hidden;
	label: string;
}

/**
 * AUTHCODE INPUTS
 */

export interface AuthCodeInputBase extends InputBaseInterface {
	value: string;
	length: number;
}

export interface AuthCodeInputProps extends AuthCodeInputBase {
	onChange: (v: string) => void;
}

export interface AuthCodeInputRecipe extends AuthCodeInputBase {
	type: InputElementTypes.authCode;
	label: string;
}

/**
 * CHECKBOX INPUTS
 */

export interface CheckBoxInputBase extends InputBaseInterface {
	value: boolean;
	props?: RNCheckBoxProps;
}

export interface CheckBoxInputProps extends CheckBoxInputBase {
	onChange: (v: boolean) => void;
}

export interface CheckBoxInputRecipe extends CheckBoxInputBase {
	type: InputElementTypes.checkBox;
	label: string;
}

/**
 * Putting it all together
 */
export type InputElementProps =
	| TextInputBase
	| HiddenInputBase
	| AuthCodeInputBase
	| CheckBoxInputBase;

export type InputElementRecipe =
	| TextInputRecipe
	| HiddenInputRecipe
	| AuthCodeInputRecipe
	| CheckBoxInputRecipe;

export type FormRecipe = { [key: string]: InputElementRecipe };
