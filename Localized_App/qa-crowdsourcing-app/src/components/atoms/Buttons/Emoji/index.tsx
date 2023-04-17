import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { IProps } from "./interface";
import * as Services from "../../../../services";
import styles from "./styles";

const BaseButton = (props: IProps) => {
	const { emoji, type, size } = props;

	const DEFAULT_SIZE = 80;
	const __size = size ?? DEFAULT_SIZE;

	return (
		<TouchableOpacity
			{...props}
			style={{
				...styles.outer,
				width: __size,
				height: __size,
				borderRadius: __size / 2,
				backgroundColor: Services.Colors.MapToDark[type],
			}}
			onPress={props.onPress}
		>
			<Text
				style={{
					fontSize: __size / 3,
				}}
			>
				{emoji}
			</Text>
		</TouchableOpacity>
	);
};

export default BaseButton;
