import React, { useState, useEffect } from "react";
import { TouchableHighlight, Text } from "react-native";
import { IProps } from "./interface";
import * as Services from "../../../../services";
import styles from "./styles";

const BaseButton = (props: IProps) => {
	const { label, type, inactive } = props;

	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		setIsActive(!inactive);
	}, [inactive]);

	const cb = isActive ? props.onPress : undefined;

	return (
		<TouchableHighlight
			{...props}
			style={{
				backgroundColor: Services.Colors.MapToDark[type],
				...styles.outer,
				opacity: isActive ? 1 : 0.15,
			}}
			onPress={cb}
		>
			<Text style={{ color: Services.Colors.MapToLight[type] }}>
				{label}
			</Text>
		</TouchableHighlight>
	);
};

export default BaseButton;
