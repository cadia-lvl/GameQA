import { ActionTypes } from "../types";
import * as Interface from "./interface";
import { Dispatch } from "redux";
import Api from "../../api";

export const writeQuestion = (
	question: string
): Interface.WriteQuestionAction => {
	return {
		type: ActionTypes.writeQuestion,
		payload: question,
	};
};

export const refreshAskAboutImage = () => {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<Interface.ImageInfo>(
				"/api/v1/game_rounds/write_question/image"
			);
			dispatch<Interface.RefreshAskAboutImageAction>({
				type: ActionTypes.refreshAskAboutImage,
				payload: data,
			});
		} catch (error) {
			//
		}
	};
};

export * as Actions from "./interface";
