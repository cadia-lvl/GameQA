import { Alert } from "../../declerations";
import { ActionTypes } from "../types";

export interface SetResetPasswordLoadingStateAction {
	type: ActionTypes.setResetPasswordLoadingState;
	payload: boolean;
}

export interface SetResetPasswordEmailAction {
	type: ActionTypes.setResetPasswordEmail;
	payload: string;
}

export interface SetResetPasswordCodeAction {
	type: ActionTypes.setResetPasswordCode;
	payload: string;
}

export interface RequestResetPasswordTokenAction {
	type: ActionTypes.requestResetPasswordToken;
	payload: string;
}

export interface ResetPasswordWithTokenAction {
	type: ActionTypes.resetPasswordWithToken;
}

export interface SetResetPasswordErrorAction {
	type: ActionTypes.setResetPasswordError;
	payload?: Alert;
}
