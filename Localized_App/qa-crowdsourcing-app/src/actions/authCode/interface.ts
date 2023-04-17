import { ActionTypes } from "..";

export interface WriteAuthCodeAction {
	type: ActionTypes.writeAuthCode;
	payload: string;
}

export interface SetAuthCodeErrorMessageAction {
	type: ActionTypes.setAuthCodeErrorMessage;
	payload: string;
}

export interface SetAuthCodeLoadingAction {
	type: ActionTypes.setAuthCodeLoading;
	payload: boolean;
}
