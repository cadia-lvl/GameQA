import { Notification } from "../../declerations";
import { ActionTypes } from "../types";

export interface AddNotificationItemAction {
	type: ActionTypes.addNotificationItem;
	payload: Notification;
}

export interface ClearNotifications {
	type: ActionTypes.clearNotifications;
}
