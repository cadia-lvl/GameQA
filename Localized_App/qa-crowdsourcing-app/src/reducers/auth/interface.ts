import { User } from "../../declerations";

export interface State extends User {
	invites: User[];
	isResettingLevel: boolean;
}
