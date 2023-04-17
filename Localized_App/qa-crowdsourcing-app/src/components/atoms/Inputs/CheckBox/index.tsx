import React from "react";
import { CheckBoxInputProps } from "../../../../declerations";
import { Switch } from "react-native";

const CustomCheckBoxInput = (props: CheckBoxInputProps) => (
	<Switch value={props.value} onValueChange={props.onChange} />
);

export default CustomCheckBoxInput;
