import { ActionTypes } from "..";

export interface SendPushNotificationTokenAction {
	type: ActionTypes.sendPushNotificationToken;
	payload: string;
}
