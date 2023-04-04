import React from "react";
import { View, Text } from "react-native";
import { IProps } from "./interface";
import styles from "./styles";
import { Atoms } from "../../../";

const InputWrapper = ({ children, label, required }: IProps) => {
	return (
		<View style={styles.outer}>
			<Atoms.Text.Para style={styles.text}>
				{label} {required ? "*" : null}
			</Atoms.Text.Para>
			{children}
		</View>
	);
};

export default InputWrapper;
