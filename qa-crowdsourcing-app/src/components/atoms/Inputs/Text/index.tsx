import React from "react";
import { Keyboard, TextInput } from "react-native";
import { TextInputProps } from "../../../../declerations";
import InputStyles from "../styles";

const CustomTextInput = (props: TextInputProps) => (
	<TextInput
		{...props}
		{...(props.props ?? {})}
		style={{ ...InputStyles.outer, ...((props.props?.style as {}) ?? {}) }}
		onChangeText={props.onChange}
		autoCorrect={false}
	/>
);

export default CustomTextInput;
