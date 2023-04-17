import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: State = {};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.fetchMotivation:
			return {
				...state,
				current: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
