import React from "react";
import { Text } from "react-native";
import { IProps } from "./interface";
import styles from "./styles";

const Heading = (props: IProps) => {
	const styleProps = (props.style as Object) ?? {};
	return (
		<Text {...props} style={{ ...styles.text, ...styleProps }}>
			{props.children}
		</Text>
	);
};

export default Heading;
