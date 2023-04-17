import { ActionTypes } from "..";
import { CountPerDay } from "../../declerations";

export interface FetchAnswersPerDayAction {
	type: ActionTypes.fetchAnswersPerDay;
	payload: CountPerDay[];
}
