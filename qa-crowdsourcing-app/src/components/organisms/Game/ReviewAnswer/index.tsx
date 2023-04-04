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
			"Vitlaust merkt?",
			"Ef svarið er vitlaust merkt þá eyðum við svarinu.",
			[
				{
					text: "Hætta við",
				},
				{
					text: "Áfram",
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
					Annar notandi hefur merkt svarið inn. Nú þurfum við að
					athuga hvort svarið sé rétt merkt. 🖊️🤔
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
						Er svarið rétt merkt?
					</Utils.VerifyButtons>
				) : stage === "verify-answer-short" ? (
					<Utils.VerifyButtons
						approveEmoji="👍"
						declineEmoji="👎"
						onApprove={() => handleVerifyDispatch(true)}
						onDecline={() => handleVerifyDispatch(false)}
					>
						Eru of mörg orð valin?
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
						Er þetta já/nei spurning?
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
						Er þetta já/nei spurning?
					</Utils.VerifyButtons>
				) : stage === "select-boolean" ? (
					<Utils.VerifyButtons
						approveEmoji="👍"
						declineEmoji="👎"
						onApprove={() => handleVerifyYesOrNo(true)}
						onDecline={() => handleVerifyYesOrNo(false)}
					>
						Hvort er svarið já eða nei?
					</Utils.VerifyButtons>
				) : null}
			</View>
		</View>
	);
};

export default ReviewAnswer;
