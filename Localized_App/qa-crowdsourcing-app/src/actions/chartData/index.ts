import { Dispatch } from "redux";
import { CountPerStringifiedDate } from "../../declerations";
import Api from "../../api";
import { FetchAnswersPerDayAction } from "./interface";
import { ActionTypes } from "../types";

export const fetchAnswersPerDay = () => {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<CountPerStringifiedDate[]>(
				"/api/charts/questions_per_day"
			);
			dispatch<FetchAnswersPerDayAction>({
				type: ActionTypes.fetchAnswersPerDay,
				payload: data.map((item) => ({
					count: item.count,
					date: new Date(Date.parse(item.date)),
				})),
			});
		} catch (error) {
			//
		}
	};
};

export * as Actions from "./interface";
