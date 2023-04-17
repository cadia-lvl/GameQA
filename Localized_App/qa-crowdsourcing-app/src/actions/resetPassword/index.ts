import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import { User } from "../../declerations";
import Api from "../../api";
import {
	SetResetPasswordLoadingStateAction,
	SetResetPasswordEmailAction,
	RequestResetPasswordTokenAction,
	ResetPasswordWithTokenAction,
	SetResetPasswordCodeAction,
	SetResetPasswordErrorAction,
} from "./interface";
import store from "../../../store";
import { fetchUserFromToken } from "../auth";

export const setResetPasswordEmail = (
	email: string
): SetResetPasswordEmailAction => {
	return {
		type: ActionTypes.setResetPasswordEmail,
		payload: email,
	};
};

export const setResetPasswordCode = (
	code: string
): SetResetPasswordCodeAction => {
	return {
		type: ActionTypes.setResetPasswordCode,
		payload: code,
	};
};

export const getResetPasswordCode = (email: string) => {
	return async function (dispatch: Dispatch) {
		try {
			dispatch<SetResetPasswordLoadingStateAction>({
				type: ActionTypes.setResetPasswordLoadingState,
				payload: true,
			});
			await Api.post<undefined>(
				"/api/auth/request_reset_password_code",
				{
					email,
				}
			);
		} catch (error) {
			//
		} finally {
			dispatch<SetResetPasswordLoadingStateAction>({
				type: ActionTypes.setResetPasswordLoadingState,
				payload: false,
			});
		}
	};
};

export const getResetPasswordToken = (email: string, code: string) => {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.post<any>(
				"/api/auth/request_reset_password_token",
				{
					email,
					code,
				}
			);
			dispatch<RequestResetPasswordTokenAction>({
				type: ActionTypes.requestResetPasswordToken,
				payload: data?.token,
			});
		} catch (error) {
			//
		}
	};
};

// ResetPasswordWithTokenAction
export const resetPasswordWithToken = (
	email: string,
	password: string,
	token: string
) => {
	return async function (dispatch: Dispatch) {
		try {
			await Api.post("/api/auth/reset_password", {
				email,
				password,
				token,
			});
			dispatch<ResetPasswordWithTokenAction>({
				type: ActionTypes.resetPasswordWithToken,
			});
			// @ts-ignore
			store.dispatch(fetchUserFromToken());
		} catch (error) {
			//
			dispatch<SetResetPasswordErrorAction>({
				type: ActionTypes.setResetPasswordError,
				payload: {
					type: "danger",
					label: error.response?.data.message,
				},
			});
		}
	};
};

export * as Actions from "./interface";
