import { ActionTypes } from "../types";
import { ClearMotivationAction, FetchMotivationAction } from "./interface";
import { Dispatch } from "redux";
import Api from "../../api";
import { Motivation } from "../../declerations";

export const fetchMotivation = () => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<ClearMotivationAction>({
				type: ActionTypes.clearMotivation,
			});
			const { data: payload } = await Api.get<Motivation>(
				"/api/v1/users/motivation"
			);
			dispatch<FetchMotivationAction>({
				type: ActionTypes.fetchMotivation,
				payload,
			});
		} catch (error) {
			// do nothing on error
		}
	};
};

export * as Actions from "./interface";
