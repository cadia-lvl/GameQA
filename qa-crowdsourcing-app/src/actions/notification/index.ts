import { Notification } from "../../declerations";
import { ActionTypes } from "../types";
import {} from "./interface";

export const addNotificationItem = (payload: Notification) => ({
	type: ActionTypes.addNotificationItem,
	payload,
});

export const clearNotifications = () => ({
	type: ActionTypes.clearNotifications,
});

export * as Actions from "./interface";
