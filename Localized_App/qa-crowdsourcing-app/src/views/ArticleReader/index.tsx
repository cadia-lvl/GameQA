import React, { useEffect, useCallback } from "react";
import {
	Image,
	Text,
	View,
	TouchableOpacity,
	Alert,
	ScrollView,
	RefreshControl,
} from "react-native";
import LayoutWrapper from "../../layout";
import { IProps } from "./interface";
import { NavigateBack } from "../utils";
import { Atoms } from "../../components";
import { Utils } from "../../components/organisms/Game";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import * as Actions from "../../actions";

const ArticleReaderView = ({
	route: { params: article },
	navigation: { goBack },
}: IProps) => {
	const state = useSelector((state: StoreState) => state.articleReader);
	const game = useSelector((state: StoreState) => state.game);
	const googleSearch = useSelector(
		(state: StoreState) => state.googleSearch
	);

	const dispatch = useDispatch();

	const handleFetchArticle = useCallback(
		() =>
			dispatch(
				Actions.ArticleReader.previewArticleToSubmit(
					article.source.identifier,
					article.articleKey
				)
			),
		[article.source?.identifier, article.articleKey]
	);
	useEffect(() => {
		handleFetchArticle();
	}, [article._id]);

	const handleSubmitParagraph = useCallback(
		(paragraphIndex: number) => {
			Alert.alert(
				"Are you sure?",
				"Does this paragraph contain the answer?",
				[
					{
						text: "No ",
						onPress: () => null,
					},
					{
						text: "Yes",
						onPress: () => {
							dispatch(
								Actions.Game.submitArticleAndParagraph(
									game._id, // game round id
									article.source.identifier,
									article.articleKey,
									googleSearch._id, // questionId
									paragraphIndex
								)
							);
							goBack();
						},
					},
				]
			);
		},
		[
			game._id,
			game.currentRound,
			article.source.identifier,
			article.articleKey,
			googleSearch._id,
		]
	);

	return (
		<LayoutWrapper>
			<ScrollView
				refreshControl={
					<RefreshControl
						onRefresh={handleFetchArticle}
						refreshing={game.isLoading}
					/>
				}
			>
				<NavigateBack goBackHandler={goBack} />
				<Utils.QuestionIs question={googleSearch.text} />
				<Utils.Explain>
				Tap the paragraph that contains the answer 🙋👆
				</Utils.Explain>
				<View style={styles.topLine}>
					<Image
						source={{ uri: article.source.logo }}
						style={styles.logo}
					/>
					<Text>{article.title}</Text>
				</View>

				{state.error ? (
					<Atoms.Alerts.Ribbon
						item={{
							type: "danger",
							label: "Unable to fetch article",
						}}
					/>
				) : (
					state.paragraphs.map((text, i) => (
						<TouchableOpacity
							onPress={() => handleSubmitParagraph(i)}
							style={styles.paragraphOuter}
						>
							<Atoms.Text.Heading style={styles.enumeration}>
								{i + 1}
							</Atoms.Text.Heading>

							<Atoms.Text.Para style={styles.textParagraph}>
								{text}
							</Atoms.Text.Para>
						</TouchableOpacity>
					))
				)}
			</ScrollView>
		</LayoutWrapper>
	);
};

export default ArticleReaderView;
