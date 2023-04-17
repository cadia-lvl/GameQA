import React, { useState, useEffect, useCallback } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Utils } from "../";
import { Atoms } from "../../..";
import { StoreState } from "../../../../reducers";
import * as Actions from "../../../../actions";
import { styles } from "./styles";

const ReviewAnswer = () => {
	type ReviewStage =
		| "starting-state"
		| "verify-boolean"
		| "verify-not-boolean"
		| "verify-answer"
		| "verify-answer-short"
		| "select-boolean";

	const [stage, setStage] = useState<ReviewStage>("starting-state");

	const state = useSelector((state: StoreState) => state.selectSpan);
	const game = useSelector((state: StoreState) => state.game);

	useEffect(() => {
		setStage(
			state.isYesOrNo ? "verify-boolean" : "verify-not-boolean"
		);
		return () => {
			setStage("starting-state");
		};
	}, [game.lastLoaded]);

	const dispatch = useDispatch();

	const handleVerifyDispatch = (canBeShortened: boolean) => {
		dispatch(
			Actions.Game.verifyAnswerSpan(
				game._id,
				state._id,
				canBeShortened
			)
		);
	};

	const handleVerifyYesOrNo = (answer: boolean) => {
		dispatch(
			Actions.Game.verifyYesNoQuestion(game._id, state._id, answer)
		);
	};

	const handleArchive = useCallback(async () => {
		Alert.alert(
			"Highlighted Incorrectly?",
			"If the answer is incorrect then we will delete it",
			[
				{
					text: "Cancel",
				},
				{
					text: "Continue",
					onPress: () =>
						dispatch(
							Actions.Game.archiveAnswer(game._id, state._id)
						),
				},
			]
		);
	}, [game._id, state._id]);

	return (
		<View style={styles.outer}>
			<ScrollView>
				<Utils.QuestionIs question={state.text} />
				<Utils.Explain>
					Another user has marked the answer. Now, let's verify if it is correct. 🖊️🤔
				</Utils.Explain>
				<Utils.SpanSelector
					immutable={true}
					{...state}
					firstWord={state.isYesOrNo ? -1 : state.firstWord}
					lastWord={state.isYesOrNo ? -1 : state.lastWord}
					onSelectFirstWord={(word) =>
						dispatch(Actions.SelectSpan.setFirstWord(word))
					}
					onSelectLastWord={(word) =>
						dispatch(Actions.SelectSpan.setLastWord(word))
					}
					onClearSelection={() =>
						dispatch(Actions.SelectSpan.clearRange())
					}
				/>
			</ScrollView>
			<View>
				{stage === "verify-answer" ? (
					<Utils.VerifyButtons
						approveEmoji="😀"
						declineEmoji="😒"
						onApprove={() => setStage("verify-answer-short")}
						onDecline={handleArchive}
					>
						Is the highlighted answer correct?
					</Utils.VerifyButtons>
				) : stage === "verify-answer-short" ? (
					<Utils.VerifyButtons
						approveEmoji="👍"
						declineEmoji="👎"
						onApprove={() => handleVerifyDispatch(true)}
						onDecline={() => handleVerifyDispatch(false)}
					>
						Is the highlighted answer snippet too long?
					</Utils.VerifyButtons>
				) : stage === "verify-boolean" ? (
					<Utils.VerifyButtons
						approveEmoji="👍"
						declineEmoji="👎"
						onApprove={() => setStage("select-boolean")}
						onDecline={() =>
							dispatch(
								Actions.Game.markAsYesOrNo(
									game._id,
									state._id,
									false
								)
							)
						}
					>
						Is this a yes/no question?
					</Utils.VerifyButtons>
				) : stage === "verify-not-boolean" ? (
					<Utils.VerifyButtons
						approveEmoji="👍"
						declineEmoji="👎"
						onApprove={() =>
							dispatch(
								Actions.Game.markAsYesOrNo(
									game._id,
									state._id,
									true
								)
							)
						}
						onDecline={() => setStage("verify-answer")}
					>
						Is this a yes/no question?
					</Utils.VerifyButtons>
				) : stage === "select-boolean" ? (
					<Utils.VerifyButtons
						approveEmoji="👍"
						declineEmoji="👎"
						onApprove={() => handleVerifyYesOrNo(true)}
						onDecline={() => handleVerifyYesOrNo(false)}
					>
						Is the answer "Yes"?
					</Utils.VerifyButtons>
				) : null}
			</View>
		</View>
	);
};

export default ReviewAnswer;
