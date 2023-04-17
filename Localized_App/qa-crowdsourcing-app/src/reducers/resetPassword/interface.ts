import { Alert } from "../../declerations";

export interface State {
	email?: string;
	resetCode: string;
	resetToken?: string;
	isLoading: boolean;
	errorAlert?: Alert;
}
