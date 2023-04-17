import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./styles";
import NotiCard from "./NotiCard";
import { useSelector } from "react-redux";
import { StoreState } from "../../../reducers";

export const Items = () => {
	const notifications = useSelector(
		(state: StoreState) => state.notification.notifications
	);

	return (
		<SafeAreaView style={styles.outer}>
			{notifications.length > 0 ? (
				<NotiCard {...notifications[0]} />
			) : undefined}
		</SafeAreaView>
	);
};

export * from "./interface";
