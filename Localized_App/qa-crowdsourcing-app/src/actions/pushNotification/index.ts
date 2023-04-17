import { ActionTypes } from "../types";
import { Dispatch } from "redux";
import { SendPushNotificationTokenAction } from "./interface";
import Api from "../../api";
import { User } from "../../declerations";

export const sendPushNotificationToken = (token: string) => {
	return async function (dispatch: Dispatch) {
		try {
			await Api.patch<User>("/api/v1/users/push_notification_tokens", {
				token,
			});
			dispatch<SendPushNotificationTokenAction>({
				type: ActionTypes.sendPushNotificationToken,
				payload: token,
			});
		} catch (error) {
			//
		}
	};
};

export * as Actions from "./interface";
