import React from "react";
import { View } from "react-native";
import { IProps } from "./interface";
import styles from "./styles";

const Base = (props: IProps) => {
	const styleProps = (props.style as {}) ?? {};
	return (
		<View {...props} style={{ ...styles.outer, ...styleProps }}>
			{props.children}
		</View>
	);
};

export default Base;
