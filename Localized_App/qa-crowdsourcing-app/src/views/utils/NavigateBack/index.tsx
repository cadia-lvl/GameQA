import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Atoms } from "../../../components";
import * as Services from "../../../services";
import { IProps } from "./interface";
import styles from "./styles";

const NavigateBack = (props: IProps) => {
	return (
		<TouchableOpacity style={styles.backButton} onPress={props.goBackHandler}>
			<FontAwesome
				name="arrow-left"
				size={15}
				color={Services.Colors.MapToDark["grey"]}
			/>
			<Atoms.Text.Para style={styles.backText}>Go back</Atoms.Text.Para>
		</TouchableOpacity>
	);
};

export default NavigateBack;
