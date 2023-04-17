import React from "react";
import { View, Text } from "react-native";
import { IProps } from "./interface";
import styles from "./styles";
import * as Services from "../../../../services";

const RibbonAlert = ({ item }: IProps) => {
	if (!item) return null;
	const { label, type } = item;
	return (
		<View style={{ ...styles.outer, backgroundColor: Services.Colors.MapToDark[type] }}>
			<Text style={{ color: Services.Colors.MapToLight[type] }}>{label}</Text>
		</View>
	);
};

export default RibbonAlert;
