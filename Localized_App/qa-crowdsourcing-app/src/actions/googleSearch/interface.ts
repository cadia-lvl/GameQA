import { ArticlePreview, Question } from "../../declerations";
import { ActionTypes } from "../types";

export interface WriteGoogleQueryAction {
	type: ActionTypes.writeGoogleQuery;
	payload: string;
}

export interface FetchArticlesQueryAction {
	type: ActionTypes.fetchArticlesQuery;
	payload: ArticlePreview[];
}

export interface SetSearchErrorAction {
	type: ActionTypes.setGoogleSearchError;
}

export interface SetImpossibleQuestionAction {
	type: ActionTypes.setImpossibleQuestion;
	payload: Question;
}
