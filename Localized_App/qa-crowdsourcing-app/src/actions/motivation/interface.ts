import { Motivation } from "../../declerations";
import { ActionTypes } from "../types";

export interface FetchMotivationAction {
	type: ActionTypes.fetchMotivation;
	payload: Motivation;
}
export interface ClearMotivationAction {
	type: ActionTypes.clearMotivation;
}
