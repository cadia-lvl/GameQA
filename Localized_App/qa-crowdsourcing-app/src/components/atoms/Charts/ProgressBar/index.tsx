import React from "react";
import { View } from "react-native";
import * as Services from "../../../../services";
import { IProps } from "./interface";
import styles from "./styles";

const ProgressBar = ({ ratio, color }: IProps) => {
	return (
		<View style={styles.outer}>
			<View style={styles.barOuter}>
				<View
					style={{
						...styles.bar,
						backgroundColor: Services.Colors.MapToDark[color],
						width: `${ratio * 100}%`,
					}}
				/>
			</View>
		</View>
	);
};

export default ProgressBar;
