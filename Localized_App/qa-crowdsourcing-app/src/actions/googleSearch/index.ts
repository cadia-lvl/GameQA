import { ActionTypes } from "../types";
import {
	FetchArticlesQueryAction,
	WriteGoogleQueryAction,
	SetSearchErrorAction,
} from "./interface";
import { Dispatch } from "redux";
import Api from "../../api";
import { Game } from "../";
import store from "../../../store";
import { ArticlePreview, Question } from "../../declerations";
import axios from "axios";

export const writeGoogleQuery = (user: string): WriteGoogleQueryAction => {
	return {
		type: ActionTypes.writeGoogleQuery,
		payload: user,
	};
};

export const fetchArticlesQuery = () => {
	return async function (dispatch: Dispatch) {
		try {
			const cancelToken = axios.CancelToken.source();
			dispatch<Game.Actions.SetGameLoadingStateAction>({
				type: ActionTypes.setGameLoadingState,
				payload: true,
				request: { cancelToken: cancelToken },
			});
			const { data } = await Api.get<ArticlePreview[]>(
				`/api/v1/articles?query=${
					store.getState().googleSearch.query
				}`,
				{
					cancelToken: cancelToken.token,
				}
			);

			dispatch<FetchArticlesQueryAction>({
				type: ActionTypes.fetchArticlesQuery,
				payload: data.filter((item) => !!item.source),
			});
		} catch (error) {
			dispatch<SetSearchErrorAction>({
				type: ActionTypes.setGoogleSearchError,
			});
		} finally {
			dispatch<Game.Actions.SetGameLoadingStateAction>({
				type: ActionTypes.setGameLoadingState,
				payload: false,
			});
		}
	};
};

export const setImpossibleQuestion = (question: Question) => {
	return {
		type: ActionTypes.setImpossibleQuestion,
		payload: question,
	};
};

export * as Actions from "./interface";
