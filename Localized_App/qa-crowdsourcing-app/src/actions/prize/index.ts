import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import { PrizeCategory } from "../../declerations";
import Api from "../../api";
import { FetchPrizeCategoriesAction } from "./interface";

export const fetchPrizeCategories = () => {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<PrizeCategory[]>(
				"/api/v1/prizes"
			);
			dispatch<FetchPrizeCategoriesAction>({
				type: ActionTypes.fetchPrizeCategories,
				payload: data,
			});
		} catch (error) {
			//
		}
	};
};

export * from "./interface";
