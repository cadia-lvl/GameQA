import React from "react";
import { Text } from "react-native";
import { IProps } from "./interface";
import styles from "./styles";

const Para = (props: IProps) => {
	const styleProps = (props.style as Object) ?? {};
	return (
		<Text {...props} style={{ ...styles.text, ...styleProps }}>
			{props.children}
		</Text>
	);
};

export default Para;
