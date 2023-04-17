import { PrizeCategory } from "../../declerations";
import { ActionTypes } from "../types";

export interface FetchPrizeCategoriesAction {
	type: ActionTypes.fetchPrizeCategories;
	payload: PrizeCategory[];
}
