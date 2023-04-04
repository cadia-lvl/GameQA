import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { Alert, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { Utils } from "../";
import { Atoms } from "../../..";
import * as Actions from "../../../../actions";
import { StoreState } from "../../../../reducers";
import { styles } from "./style";

type stage = "verify-answer-present" | "is-boolean" | "select-span";

const SelectSpan = () => {
	// if it is true then user can locate answer span
	const [stage, setStage] = useState<stage>("verify-answer-present");

	const state = useSelector((state: StoreState) => state.selectSpan);
	const game = useSelector((state: StoreState) => state.game);
	const auth = useSelector((state: StoreState) => state.auth);
	const notiInfo = useSelector((state: StoreState) => state.notification);

	const dispatch = useDispatch();

	const archiveKey = useMemo(
		() => `GAME:SELECTSPAN:ARCHIVEWARNING:${auth._id}`,
		[auth._id]
	);

	// stores key as seen
	const markKeyAsSeen = useCallback(async () => {
		try {
			const SEEN_TOKEN = "OK";
			AsyncStorage.setItem(archiveKey, SEEN_TOKEN);
		} catch (error) {
			//
		}
	}, [archiveKey]);

	const handleCompleteStep = useCallback(async () => {
		try {
			dispatch(Actions.Game.archiveAnswer(game._id, state._id));
			await markKeyAsSeen();
		} catch (error) {
			//
		}
	}, [game._id, state._id, state.firstWord, state.lastWord]);

	const handleArchive = useCallback(async () => {
		Alert.alert(
			"Ekkert svar",
			"Ef þú sérð ekki svarið hér þá eyðum við þessari efnisgrein.",
			[
				{
					text: "Hætta við",
					onPress: () => markKeyAsSeen(),
				},
				{
					text: "Áfram",
					onPress: () => handleCompleteStep(),
				},
			]
		);
	}, [game._id, state._id, markKeyAsSeen, handleCompleteStep]);

	const handleMarkAsYesOrNo = () => {
		Alert.alert("Ertu viss?", "Er svarið annaðhvort já eða nei?", [
			{
				text: "Hætta við",
			},
			{
				text: "Áfram",
				onPress: () =>
					dispatch(
						Actions.Game.markAsYesOrNo(
							game._id,
							state._id,
							true
						)
					),
			},
		]);
	};

	// const toogleSelectionState = () => setIsSelectingSpan((v) => !v);

	const handleSubmit = useCallback(
		() =>
			dispatch(
				Actions.Game.submitSpan(
					game._id,
					state._id,
					state.firstWord,
					state.lastWord
				)
			),
		[game._id, state._id, state.firstWord, state.lastWord]
	);

	const notification = notiInfo.notifications[0];

	return (
		<View style={styles.outer}>
			<ScrollView>
				<Utils.QuestionIs question={state.text} />
				<Atoms.Text.Para>
					Þessi efnisgrein var valin af öðrum notanda sem telur
					að svarið sé hér að finna. Nú þurfum við að vita hvort
					hluti af textanum svari spurningunni. Ef svo er, þá
					þarft þú að velja réttu orðin sem mynda svarið.
				</Atoms.Text.Para>
				<Utils.SpanSelector
					paragraph={state.paragraph}
					onSelectFirstWord={(i) =>
						dispatch(Actions.SelectSpan.setFirstWord(i))
					}
					onSelectLastWord={(i) =>
						dispatch(Actions.SelectSpan.setLastWord(i))
					}
					onClearSelection={() =>
						dispatch(Actions.SelectSpan.clearRange())
					}
					firstWord={state.firstWord}
					lastWord={state.lastWord}
					immutable={stage !== "select-span"}
				/>
			</ScrollView>
			<View>
				{notification ?
					<View style={styles.instructions}>
						<Atoms.Text.Heading>{notification.title}</Atoms.Text.Heading>
						<Atoms.Text.Para>{notification.text}</Atoms.Text.Para>

					</View>
				
			: null}
				{stage === "verify-answer-present" ? (
					<Utils.VerifyButtons
						approveEmoji="😃"
						declineEmoji="😒"
						onApprove={() => setStage("is-boolean")}
						onDecline={handleArchive}
					>
						Sérðu svarið?
					</Utils.VerifyButtons>
				) : stage === "is-boolean" ? (
					<Utils.VerifyButtons
						approveEmoji="👍"
						declineEmoji="👎"
						onApprove={handleMarkAsYesOrNo}
						onDecline={() => setStage("select-span")}
					>
						Er þetta já/nei spurning?
					</Utils.VerifyButtons>
				) : stage === "select-span" ? (
					<React.Fragment>
						{state.firstWord !== undefined &&
						state.lastWord !== undefined ? (
							<Atoms.Buttons.Base
								label="Staðfesta"
								type="highlight"
								onPress={handleSubmit}
							/>
						) : null}
						<Atoms.Buttons.Base
							label="Til baka"
							type="danger"
							onPress={() =>
								setStage("verify-answer-present")
							}
						/>
					</React.Fragment>
				) : null}
			</View>
		</View>
	);
};

export default SelectSpan;
