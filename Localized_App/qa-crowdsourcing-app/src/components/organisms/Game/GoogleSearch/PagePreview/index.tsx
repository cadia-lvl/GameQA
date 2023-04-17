import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { IProps } from "./interface";
import { useNavigation } from "@react-navigation/native";

const PagePreview = (props: IProps) => {
	const navigation = useNavigation<any>();
	return (
		<TouchableOpacity
			style={styles.outer}
			onPress={() => navigation.navigate("article-reader", props)}
			activeOpacity={1}
		>
			<View style={styles.topLine}>
				<View style={styles.pageIcon}>
					<Image
						style={styles.icon}
						source={{
							uri: props.source.logo,
						}}
					/>
				</View>
				<Text style={styles.url}>{props.source.hostname}</Text>
			</View>
			<Text style={styles.title}>{props.title}</Text>
			<Text style={styles.extract}>{props.snippet}</Text>
		</TouchableOpacity>
	);
};

export default PagePreview;
