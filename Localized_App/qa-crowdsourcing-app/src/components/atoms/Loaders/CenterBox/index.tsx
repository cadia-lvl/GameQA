import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../../../services";
import { IProps } from "./interface";
import styles from "./styles";

const CenterBoxLoader = ({ isLoading, onCancel }: IProps) => {
	if (!isLoading) return null;
	return (
		<View style={styles.outer}>
			{onCancel !== undefined ? (
				<TouchableOpacity onPress={onCancel} style={styles.cancel}>
					<Text style={styles.cancelText}>
					Cancel 🙅‍♀️
					</Text>
				</TouchableOpacity>
			) : null}
			<View style={styles.inner}>
				<ActivityIndicator color={Colors.MapToDark.highlight} />
			</View>
		</View>
	);
};

export default CenterBoxLoader;
