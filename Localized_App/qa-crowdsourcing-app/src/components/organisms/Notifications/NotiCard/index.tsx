import { FontAwesome } from "@expo/vector-icons";
import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Atoms } from "../../..";
import { Colors } from "../../../../services";
import { Notification } from "../../../../declerations";
import styles from "./styles";
import * as Actions from "../../../../actions";

const NotiCard = ({ title, text }: Notification) => {
	const dispatch = useDispatch();

	const handleClose = () =>
		dispatch(Actions.Notifications.clearNotifications());

	return (
		<View style={styles.outer}>
			<View style={styles.left}>
				<FontAwesome
					name={"lightbulb-o"}
					size={25}
					color={Colors.MapToDark["warning"]}
				/>
			</View>
			<View style={styles.right}>
				<View style={styles.top}>
					<Atoms.Text.Heading>{title}</Atoms.Text.Heading>
					<TouchableOpacity
						style={styles.times}
						onPress={handleClose}
					>
						<FontAwesome
							name="times"
							size={15}
							color={Colors.MapToDark["light-grey"]}
						/>
					</TouchableOpacity>
				</View>
				<Atoms.Text.Para>{text}</Atoms.Text.Para>
			</View>
		</View>
	);
};

export default NotiCard;
