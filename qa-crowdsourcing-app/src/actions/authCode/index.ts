import { ActionTypes } from "..";
import { SetGameLoadingStateAction } from "../game/interface";
import { Dispatch } from "redux";
import { Article, User } from "../../declerations";
import Api from "../../api";
import {
	WriteAuthCodeAction,
	SetAuthCodeErrorMessageAction,
	SetAuthCodeLoadingAction,
} from "./interface";
import { Auth } from "../";

export const writeAuthCode = (val: string): WriteAuthCodeAction => ({
	type: ActionTypes.writeAuthCode,
	payload: val,
});

export const clearError = (): SetAuthCodeErrorMessageAction => ({
	type: ActionTypes.setAuthCodeErrorMessage,
	payload: "",
});

export const verifyUser = (verificationCode: string) => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetAuthCodeLoadingAction>({
				type: ActionTypes.setAuthCodeLoading,
				payload: true,
			});
			const { data: user } = await Api.post<User>("/api/v1/users/verification_code", {
				verificationCode,
			});
			// reuse action
			dispatch<Auth.Actions.FetchUserFromTokenAction>({
				type: ActionTypes.fetchUserFromToken,
				payload: user,
			});
		} catch (error) {
			// set error message on error
			dispatch<SetAuthCodeErrorMessageAction>({
				type: ActionTypes.setAuthCodeErrorMessage,
				payload: error.response?.data.message ?? "Unknown error",
			});
		} finally {
			// remove loading after timeout
			const TIMEOUT_MS = 1250;
			setTimeout(
				() =>
					dispatch<SetAuthCodeLoadingAction>({
						type: ActionTypes.setAuthCodeLoading,
						payload: false,
					}),
				TIMEOUT_MS
			);
		}
	};
};

export const requestNewVerificationCode = () => {
	return async function (dispatch: Dispatch) {
		try {
			// reuse action
			dispatch<SetAuthCodeLoadingAction>({
				type: ActionTypes.setAuthCodeLoading,
				payload: true,
			});
			// request code
			await Api.get<User>("/api/v1/users/verification_code/generate");
		} catch (error) {
			// set error message on error
			dispatch<SetAuthCodeErrorMessageAction>({
				type: ActionTypes.setAuthCodeErrorMessage,
				payload: error.response?.data.message ?? "Unknown error",
			});
		} finally {
			// remove loading after timeout
			const TIMEOUT_MS = 1250;
			setTimeout(
				() =>
					dispatch<SetAuthCodeLoadingAction>({
						type: ActionTypes.setAuthCodeLoading,
						payload: false,
					}),
				TIMEOUT_MS
			);
		}
	};
};

export * as Actions from "./interface";
