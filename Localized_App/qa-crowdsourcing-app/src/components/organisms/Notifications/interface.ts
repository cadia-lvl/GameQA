import { ColorType } from "../../../declerations";

export type NotiType = "idea" | "error" | "warning" | "success";

export interface Notification {
	type: NotiType;
	readonly title: string;
	description: string;
}

export interface HookSignedNotification extends Notification {
	hookId: string;
	id: string;
}
