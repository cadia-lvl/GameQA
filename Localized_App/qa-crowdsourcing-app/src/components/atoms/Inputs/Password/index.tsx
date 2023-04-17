import React from "react";
import { TextInput } from "react-native";
import { TextInputProps } from "../../../../declerations";
import InputStyles from "../styles";

const CustomPasswordInput = (props: TextInputProps) => (
	<TextInput
		secureTextEntry={true}
		style={InputStyles.outer}
		{...props}
		onChangeText={props.onChange}
	/>
);

export default CustomPasswordInput;
