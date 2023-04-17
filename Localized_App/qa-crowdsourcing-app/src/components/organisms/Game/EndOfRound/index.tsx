import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Atoms } from "../../../";
import { StoreState } from "../../../../reducers";
import * as Actions from "../../../../actions";
import styles from "./styles";

const EndOfRound = () => {
	const auth = useSelector((state: StoreState) => state.auth);
	const prizeCategories = useSelector(
		(state: StoreState) => state.prize.prizeCategories
	);
	const dispatch = useDispatch();

	// fetch prize categories from API
	useEffect(() => {
		dispatch(Actions.PrizeCategory.fetchPrizeCategories());
	}, [dispatch]);

	return (
		<View style={styles.outerCotnainer}>
			<ScrollView style={styles.outer}>
				<Atoms.Text.Heading>Well done! 👏</Atoms.Text.Heading>
				<Atoms.Text.Collapsable style={styles.para}>
				You've reached Level {auth.level} 🎉. Currently you're in position {auth.scoreCard.hiscoreRank} on the leaderboard 😎. The more you play, the more points you collect. All the questions you ask and the answers you find will be used to train artificial intelligence to answer questions in [LANGUAGE]. 🤖
				</Atoms.Text.Collapsable>
				{prizeCategories.map((item) => (
					<Atoms.Cards.PrizeCategory {...item} />
				))}
			</ScrollView>
			<Atoms.Buttons.Base
					type="highlight"
					label="Continue"
					onPress={() =>
						dispatch(Actions.Game.fetchCurrentGameRound())
					}
				/>
		</View>
	);
};

export default EndOfRound;
