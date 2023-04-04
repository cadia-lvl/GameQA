import React from "react";
import {
	RefreshControl,
	TouchableOpacity,
	View,
	FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import * as Actions from "../../actions";
import { Atoms } from "../../components";
import { useFocusEffect } from "@react-navigation/core";
import { User } from "../../declerations";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../services";

const FETCH_MORE_AT_SCROLL_POSITION = 0.6;

const Highscore = () => {
	const highscore = useSelector((state: StoreState) => state.highscore);
	const dispatch = useDispatch();

	const flatListRef = React.useRef<FlatList<any>>();

	useFocusEffect(
		React.useCallback(() => {
			dispatch(Actions.Highscore.fetchHighscorePlacement());
		}, [])
	);

	const DEFAULT_LIMIT = 10;

	const getLastOffset = () => {
		return (
			highscore.highscores[highscore.highscores.length - 1]
				?.scoreCard.hiscoreRank + 1
		);
	};

	const getFirstOffset = () => {
		return Math.max(
			1,
			highscore.highscores[0]?.scoreCard.hiscoreRank - DEFAULT_LIMIT
		);
	};

	const handleScrollToTop = () => {
		const hasTopLoadded =
			highscore.highscores[0]?.scoreCard?.hiscoreRank === 1;
		if (hasTopLoadded)
			flatListRef.current?.scrollToOffset({
				animated: true,
				offset: 0,
			});
		else dispatch(Actions.Highscore.fetchTopOfHiscore());
	};

	const PADDING_IF_AT_TOP = 75;

	const paddingToTop = React.useMemo(
		() =>
			highscore.highscores[0]?.scoreCard?.hiscoreRank === 1
				? PADDING_IF_AT_TOP
				: 0,
		[highscore.highscores]
	);

	return (
		<View style={styles.outer}>
			<FlatList
				// @ts-ignore
				ref={flatListRef}
				refreshControl={
					<RefreshControl
						refreshing={false}
						onRefresh={() => {
							dispatch(
								Actions.Highscore.fetchHighscorePlacementExpansionUp(
									getFirstOffset(),
									DEFAULT_LIMIT
								)
							);
						}}
					/>
				}
				data={highscore.highscores}
				keyExtractor={(item: User) => item._id}
				onEndReached={() => {
					dispatch(
						Actions.Highscore.fetchHighscorePlacementExpansionDown(
							getLastOffset(),
							DEFAULT_LIMIT
						)
					);
				}}
				onEndReachedThreshold={FETCH_MORE_AT_SCROLL_POSITION}
				renderItem={(result: { item: User }) => (
					<Atoms.Cards.HighscoreItem
						user={result.item}
						key={result.item._id}
					/>
				)}
				style={{ paddingTop: paddingToTop }}
			/>
			<TouchableOpacity
				style={styles.absoluteButton}
				onPress={handleScrollToTop}
			>
				<FontAwesome
					name="chevron-up"
					size={20}
					color={Colors.MapToLight.highlight}
				/>
			</TouchableOpacity>
			<Atoms.Loaders.CenterBox isLoading={highscore.isLoading} />
		</View>
	);
};

export default Highscore;
