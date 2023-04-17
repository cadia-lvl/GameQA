import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import Api from "../../api";
import { FetchGiveAwaysAction } from "./interface";
import { GiveAway } from "../../declerations";

export const fetchGiveAways = () => {
	return async function (dispatch: Dispatch) {
		try {
			const { data } = await Api.get<GiveAway[]>(
				"/api/v1/prize_give_aways/"
			);
			dispatch<FetchGiveAwaysAction>({
				type: ActionTypes.fetchGiveAways,
				payload: data,
			});
		} catch (error) {
			//
		}
	};
};

export * as Actions from "./interface";
