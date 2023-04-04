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
				<Atoms.Text.Heading>Vel gert! 👏</Atoms.Text.Heading>
				<Atoms.Text.Collapsable style={styles.para}>
					Þú ert komin/n í Lvl {auth.level} og ert númer{" "}
					{auth.scoreCard.hiscoreRank} á stigatöflunni. Því meira sem
					þú spilar, því fleiri stigum safnarðu og því fleiri og
					flottari vinninga áttu möguleika á að vinna.
					Allar spurningarnar og svörin sem þú býrð til nýtast til
					þess að kenna gervigreind að finna svör við spurningum á
					íslensku.🤖🇮🇸
				</Atoms.Text.Collapsable>
				{prizeCategories.map((item) => (
					<Atoms.Cards.PrizeCategory {...item} />
				))}
			</ScrollView>
			<Atoms.Buttons.Base
					type="highlight"
					label="Áfram"
					onPress={() =>
						dispatch(Actions.Game.fetchCurrentGameRound())
					}
				/>
		</View>
	);
};

export default EndOfRound;
