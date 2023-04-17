import { ActionTypes } from "..";
import { SetGameLoadingStateAction } from "../game/interface";
import { Dispatch } from "redux";
import { Article } from "../../declerations";
import Api from "../../api";
import { FetchArticleParagraphsAction, SetArticleReaderErrorAction } from "./interface";

export const previewArticleToSubmit = (
	sourceIdentifier: string,
	articleKey: string
) => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetGameLoadingStateAction>({
				type: ActionTypes.setGameLoadingState,
				payload: true,
			});
			dispatch<FetchArticleParagraphsAction>({
				type: ActionTypes.fetchArticleParagraphs,
				payload: [],
			});
			const { data } = await Api.get<Article>(
				`/api/v1/article_sources/${sourceIdentifier}/article/${articleKey.replace(
					/\//g,
					"%2F"
				)}`
			);
			dispatch<FetchArticleParagraphsAction>({
				type: ActionTypes.fetchArticleParagraphs,
				payload: data.paragraphs,
			});
		} catch (error) {
			dispatch<SetArticleReaderErrorAction>({
				type: ActionTypes.setArticleReaderError,
			});
		} finally {
			setTimeout(() => {
				dispatch<SetGameLoadingStateAction>({
					type: ActionTypes.setGameLoadingState,
					payload: false,
				});
			}, 1750);
		}
	};
};

export * as Actions from "./interface";
