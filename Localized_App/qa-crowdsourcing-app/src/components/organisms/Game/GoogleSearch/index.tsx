import React, { useState, useCallback } from "react";
import { View, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Utils } from "../";
import { Atoms } from "../../../";
import { StoreState } from "../../../../reducers";
import * as Actions from "../../../../actions";
import PagePreview from "./PagePreview";
import styles from "./styles";

const GoogleSearch = () => {
	const state = useSelector((state: StoreState) => state.googleSearch);
	const game = useSelector((state: StoreState) => state.game);
	const dispatch = useDispatch();

	const handleMarkImposible = useCallback(() => {
		Alert.alert(
			"Are you sure?",
			"Sometimes there just isn't an answer",
			[
				{
					text: "No ",
					onPress: () => null,
				},
				{
					text: "Yes",
					onPress: () =>
						dispatch(
							Actions.Game.markQuestionAsImpossible(
								game._id,
								state._id
							)
						),
				},
			]
		);
	}, []);

	return (
		<ScrollView>
			<Utils.QuestionIs question={state.text} />
			<Utils.Explain>
			You can now use Google to find an answer online. 📚🔬📰
			</Utils.Explain>
			<Atoms.Inputs.Google
				onChange={(val) =>
					dispatch(Actions.GoogleSearch.writeGoogleQuery(val))
				}
				value={state.query}
				onSubmit={() =>
					dispatch(Actions.GoogleSearch.fetchArticlesQuery())
				}
			/>

			{state.articles.length > 0 ? (
				<React.Fragment>
					<Atoms.Text.Para>
					Select the article that you think is most likely to contain the answer
					</Atoms.Text.Para>
				</React.Fragment>
			) : null}
			<TouchableOpacity
				style={styles.cantFindOuter}
				onPress={handleMarkImposible}
			>
				<Atoms.Text.Para>😩 I can't find the answer</Atoms.Text.Para>
			</TouchableOpacity>
			<View style={styles.ribbon}>
				{state.searchError ? (
					<Atoms.Alerts.Ribbon
						item={{
							type: "danger",
							label: "Something went wrong, please try another search query.",
						}}
					/>
				) : state.noResults ? (
					<Atoms.Alerts.Ribbon
						item={{
							type: "warning",
							label: "No results, try another search query",
						}}
					/>
				) : null}
			</View>
			{state.articles.map((item) => (
				// articleKey as key is reserved in react
				<PagePreview {...item} articleKey={item.key} />
			))}
		</ScrollView>
	);
};

export default GoogleSearch;
