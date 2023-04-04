import { ActionTypes } from "../types";
import { Dispatch } from "redux";
import Api from "../../api";
import { User } from "../../declerations";
import {
	FetchHighscorePlacementAction,
	FetchHighscorePlacementExpansionDownAction,
	FetchHighscorePlacementExpansionUpAction,
	SetHighscoreLoadingStatusAction,
} from "./interface";
import store from "../../../store";

export const fetchHighscorePlacement = () => {
	return async function (dispatch: Dispatch) {
		try {
			if (store.getState().highscore.isLoading) return;
			dispatch<SetHighscoreLoadingStatusAction>({
				type: ActionTypes.setHighscoreLoadingStatus,
				payload: true,
			});
			const { data } = await Api.get<User[]>(
				"/api/v1/users/hiscore_placement"
			);
			dispatch<FetchHighscorePlacementAction>({
				type: ActionTypes.fetchHighscorePlacement,
				payload: data,
			});
		} catch (error) {
			// do nothing on error
		}
	};
};

export const fetchTopOfHiscore = () => {
	return async function (dispatch: Dispatch) {
		try {
			if (store.getState().highscore.isLoading) return;
			dispatch<SetHighscoreLoadingStatusAction>({
				type: ActionTypes.setHighscoreLoadingStatus,
				payload: true,
			});
			const { data } = await Api.get<User[]>(
				"/api/v1/users/hiscore_placement",
				{
					params: {
						offset: 1,
						limit: 20,
					},
				}
			);
			dispatch<FetchHighscorePlacementAction>({
				type: ActionTypes.fetchHighscorePlacement,
				payload: data,
			});
		} catch (error) {
			// do nothing on error
		}
	};
};

export const fetchHighscorePlacementExpansionUp = (
	offset?: number,
	limit?: number
) => {
	return async function (dispatch: Dispatch) {
		try {
			if (store.getState().highscore.isLoading) return;
			dispatch<SetHighscoreLoadingStatusAction>({
				type: ActionTypes.setHighscoreLoadingStatus,
				payload: true,
			});
			const { data } = await Api.get<User[]>(
				"/api/v1/users/hiscore_placement",
				{
					params: {
						offset: offset,
						limit: limit,
					},
				}
			);
			dispatch<FetchHighscorePlacementExpansionUpAction>({
				type: ActionTypes.fetchHighscorePlacementExpansionUp,
				payload: data,
			});
		} catch (error) {
			// do nothing on error
		}
	};
};

export const fetchHighscorePlacementExpansionDown = (
	offset?: number,
	limit?: number
) => {
	return async function (dispatch: Dispatch) {
		try {
			if (store.getState().highscore.isLoading) return;
			dispatch<SetHighscoreLoadingStatusAction>({
				type: ActionTypes.setHighscoreLoadingStatus,
				payload: true,
			});
			const { data } = await Api.get<User[]>(
				"/api/v1/users/hiscore_placement",
				{
					params: {
						offset: offset,
						limit: limit,
					},
				}
			);
			dispatch<FetchHighscorePlacementExpansionDownAction>({
				type: ActionTypes.fetchHighscorePlacementExpansionDown,
				payload: data,
			});
		} catch (error) {
			// do nothing on error
		}
	};
};

export * as Actions from "./interface";
