import React, { useState, useRef, useEffect, useCallback } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	Keyboard,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import styles from "./styles";
import { Colors } from "../../../../services";
import { Atoms } from "../../..";
import { FontAwesome } from "@expo/vector-icons";
import * as utils from "./utils";

import { Alert } from "../../../../declerations";
import { IProps } from "./interface";

const PinCodeScreen = (props: IProps) => {
	const {
		codeLength,
		description,
		title,
		goBackText,
		isLoading,
		error: __error,
		onSubmit,
		onGoBack,
		onRequestNew,
	} = props;
	const [pinCode, setPinCode] = useState("");
	const [error, setError] = useState<Alert | undefined>();

	const inputRef = useRef(null);

	useEffect(() => {
		const DELAY = 100;
		setError(__error);
		const t = setTimeout(() => {
			setError(undefined);
		}, DELAY);
		return () => {
			clearTimeout(t);
		};
	}, [__error]);

	useEffect(() => {
		if (error)
			//@ts-ignore
			inputRef?.current?.shake();
	}, [error]);

	return (
		<React.Fragment>
			<TouchableOpacity
				activeOpacity={1}
				onPress={() => Keyboard.dismiss()}
				style={{ flex: 1 }}
			>
				<SafeAreaView style={styles.outer}>
					<View style={styles.topBox}>
						<Text style={styles.title}>{title}</Text>
						<Atoms.Text.Para style={styles.para}>
							{description}
						</Atoms.Text.Para>
					</View>
					{/* Do not remove empty view, its for flex box styling */}
					<View></View>
					<View style={styles.middle}>
						<TouchableOpacity
							style={[styles.touchable, styles.refreshLine]}
							onPress={onRequestNew}
						>
							<View style={styles.refreshIcon}>
								<FontAwesome
									name="refresh"
									size={14}
									color={Colors.MapToDark["light-grey"]}
								/>
							</View>
							<Text style={styles.greyText}>
								Resend Code
							</Text>
						</TouchableOpacity>
						<SmoothPinCodeInput
							ref={inputRef}
							value={pinCode}
							onTextChange={setPinCode}
							cellStyle={styles.cellStyle}
							cellStyleFocused={styles.cellStyleFocused}
							codeLength={
								codeLength ?? utils.DEFAULT_CODE_LENGTH
							}
							textStyle={[styles.greyText, styles.digits]}
							onFulfill={onSubmit}
						/>
					</View>
					<TouchableOpacity
						style={styles.touchable}
						onPress={onGoBack}
					>
						<Atoms.Text.Para style={styles.greyText}>
							{goBackText}
						</Atoms.Text.Para>
					</TouchableOpacity>

					<Atoms.Loaders.CenterBox isLoading={isLoading} />
				</SafeAreaView>
			</TouchableOpacity>
		</React.Fragment>
	);
};

export default PinCodeScreen;
