import { ActionTypes } from "../types";
import {
	FetchInvitesAction,
	FetchUserFromTokenAction,
	LogOutUserAction,
	ResetLevelAction,
	SetResettingLevelAction,
} from "./interface";
import { User } from "../../declerations";
import { Dispatch } from "redux";
import Api from "../../api";
import store from "../../../store";

export const fetchUserFromToken = () => {
	return async function (dispatch: Dispatch) {
		try {
			const res = await Api.get<User>("/api/v1/users/current");
			dispatch<FetchUserFromTokenAction>({
				type: ActionTypes.fetchUserFromToken,
				payload: res.data,
			});
		} catch (error) {
			dispatch<LogOutUserAction>({
				type: ActionTypes.logOutUser,
			});
		}
	};
};

export const logOutUser = () => {
	return async function (dispatch: Dispatch) {
		try {
			await Api.delete("/api/v1/users/current/auth_token");
			dispatch<LogOutUserAction>({
				type: ActionTypes.logOutUser,
			});
		} catch (error) {
			//
		}
	};
};

export const registerUser = (user: User) => {
	return {
		type: ActionTypes.registerUser,
		payload: user,
	};
};

export const fetchInvites = () => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<FetchInvitesAction>({
				type: ActionTypes.fetchInvites,
				payload: [],
			});
			const { data } = await Api.get<User[]>(
				"/api/v1/users/current/invites"
			);
			dispatch<FetchInvitesAction>({
				type: ActionTypes.fetchInvites,
				payload: data,
			});
		} catch (error) {
			//
		}
	};
};

export const resetLevel = () => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetResettingLevelAction>({
				type: ActionTypes.setResettingLevel,
			});
			const { data } = await Api.post<User>(
				"/api/v1/users/reset_level"
			);
			dispatch<ResetLevelAction>({
				type: ActionTypes.resetLevel,
				payload: data,
			});
		} catch (error) {
			//
		} finally {
			//
		}
	};
};

export * as Actions from "./interface";
