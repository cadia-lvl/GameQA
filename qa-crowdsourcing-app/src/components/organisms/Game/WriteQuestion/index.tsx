import React, { useState } from "react";
import {
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Atoms } from "../../..";
import { StoreState } from "../../../../reducers";
import styles from "./styles";
import * as Actions from "../../../../actions";
import { submitQuestion } from "../../../../actions/game";
import { Alert, OverlayType } from "../../../../declerations";
import { Utils } from "../";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const WriteQuestion = () => {
	const state = useSelector((state: StoreState) => state.writeQuestion);
	const { _id: gameRoundId } = useSelector(
		(state: StoreState) => state.game
	);

	const [error, setError] = useState<Alert>();
	const dispatch = useDispatch();

	const handleUserInput = (text: string) =>
		dispatch(Actions.WriteQuestion.writeQuestion(text));

	const YES_NO_INDICATOR = "Já/Nei";
	const isYesNoQuestion = state.questionType === YES_NO_INDICATOR;

	const handleSubmit = () => {
		const question = state.question.trim();
		const MIN_QUESTION_LENGTH = 13;
		try {
			if (question.length < MIN_QUESTION_LENGTH)
				throw new Error(`Spurningin er ekki nógu löng`);
			if (question.slice(-1) !== "?")
				throw new Error(
					`Spurningin verður að enda á spurningarmerki`
				);
			setError(undefined);
			dispatch(
				submitQuestion(gameRoundId, question, isYesNoQuestion)
			);
		} catch (e) {
			const ALERT_TYPE = "danger";
			setError({ label: e.message, type: ALERT_TYPE });
		}
	};

	return (
		<ScrollView>
			<KeyboardAvoidingView
				behavior={Platform.OS !== "ios" ? "height" : "padding"}
			>
				<Atoms.Alerts.Ribbon item={error} />
				<Utils.Explain>
					Sendu inn spurningu sem aðrir notendur geta googlað
					svarið við á íslensku. 🧑🔎🇮🇸
				</Utils.Explain>
				<View style={styles.marginTop}>
					<View style={styles.imagePreview}>
						<View style={styles.previewBanner}>
							<Atoms.Text.Para>
								Þú gætir spurt um {state.image.subject_tf}
							</Atoms.Text.Para>
						</View>
						<View style={styles.buttonsContainer}>
							<TouchableOpacity
								style={styles.button}
								onPress={() =>
									dispatch(
										Actions.WriteQuestion.refreshAskAboutImage()
									)
								}
							>
								<FontAwesome
									name="refresh"
									size={20}
									color="white"
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.button}
								onPress={() =>
									dispatch(
										Actions.Overlay.enqueOverlay([
											OverlayType.askAboutImage,
										])
									)
								}
							>
								<Entypo
									name="resize-full-screen"
									size={20}
									color="white"
								/>
							</TouchableOpacity>
						</View>
						<Image
							style={styles.previewImage}
							source={{ uri: state.image.url }}
						/>
					</View>
					<Atoms.Inputs.Text
						value={state.question}
						placeholder="Skrifaðu spurninguna hér"
						onChange={handleUserInput}
						props={{
							multiline: true,
							numberOfLines: 3,
							style: { height: 110 },
							returnKeyType: "send",
							onSubmitEditing: handleSubmit,
						}}
					/>
				</View>
				<View style={styles.submitButton}>
					<Atoms.Buttons.Emoji
						emoji="🚀"
						onPress={handleSubmit}
						type="highlight"
						size={70}
					/>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

export default WriteQuestion;
