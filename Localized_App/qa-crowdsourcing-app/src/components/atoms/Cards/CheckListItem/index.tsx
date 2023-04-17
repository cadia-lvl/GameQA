import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Atoms } from "../../..";
import { Colors } from "../../../../services";
import styles from "./styles";
import { IProps } from "./interface";

const CheckListItem = ({ title, description, value: isChecked, onPress }: IProps) => (
	<TouchableOpacity style={styles.checkListOuter} onPress={onPress} activeOpacity={1}>
		<React.Fragment>
			<View style={styles.checkContainer}>
				{isChecked ? (
					<FontAwesome name="check" size={20} color={Colors.MapToDark["success"]} />
				) : (
					<FontAwesome
						name="circle-o"
						size={20}
						color={Colors.MapToDark["light-grey"]}
					/>
				)}
			</View>
			<View style={{ flex: 1 }}>
				<Atoms.Text.Heading style={styles.checkListTitle}>{title}</Atoms.Text.Heading>
				<Atoms.Text.Para style={styles.checkItemPara}>{description}</Atoms.Text.Para>
			</View>
		</React.Fragment>
	</TouchableOpacity>
);

export default CheckListItem;
