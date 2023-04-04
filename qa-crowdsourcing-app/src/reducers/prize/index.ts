import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: State = {
	prizeCategories: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.fetchPrizeCategories:
			return {
				...state,
				prizeCategories: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
export * from "./interface";
