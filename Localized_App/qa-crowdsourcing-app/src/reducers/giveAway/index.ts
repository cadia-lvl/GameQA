import { Actions, ActionTypes } from "../../actions";
import { State } from "./interface";

export const initialState: State = {
	giveAways: [],
	isLoading: true,
};

export const reducer = (
	state: State = initialState,
	action: Actions
): State => {
	switch (action.type) {
		case ActionTypes.fetchGiveAways:
			return {
				...initialState,
				giveAways: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
