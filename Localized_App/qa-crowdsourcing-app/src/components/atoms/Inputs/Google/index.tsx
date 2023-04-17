import React from "react";
import { Image, TextInput, View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import Svg, { Path } from "react-native-svg";
import { GOOGLE_LOGO } from "../../../../static";
import { IProps } from "./interface";

const GoogleTextInput = (props: IProps) => (
	<View>
		<View style={styles.imageContainer}>
			<Image source={GOOGLE_LOGO} style={styles.image} resizeMode="contain" />
		</View>
		<View style={styles.inner}>
			<Svg viewBox="0 0 24 24" style={styles.svg}>
				<Path
					d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
					fill="#999"
					stroke="#999"
					strokeWidth="1"
				/>
			</Svg>
			<TextInput
				returnKeyType="search"
				style={styles.input}
				onChangeText={props.onChange}
				value={props.value}
				onSubmitEditing={props.onSubmit}
			/>
		</View>
	</View>
);

export default GoogleTextInput;
