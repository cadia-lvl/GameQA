import { GiveAway } from "../../declerations";
import { ActionTypes } from "../types";

export interface FetchGiveAwaysAction {
	type: ActionTypes.fetchGiveAways;
	payload: GiveAway[];
}
