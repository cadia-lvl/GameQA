import { ActionTypes } from "../types";
import { Dispatch } from "redux";
import Api from "../../api";
import { FetchMyQuestionsAction } from "./interface";
import { Question, Answer, QuestionWithAnswers } from "../../declerations";

export const fetchMyQuestions = () => {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<QuestionWithAnswers[]>(
				"/api/v1/users/questions"
			);
			dispatch<FetchMyQuestionsAction>({
				type: ActionTypes.fetchMyQuestions,
				payload: data,
			});
		} catch (error) {
			// do nothing on error
		}
	};
};

export * as Actions from "./interface";
