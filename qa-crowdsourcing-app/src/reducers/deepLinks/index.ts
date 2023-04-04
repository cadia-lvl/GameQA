import { Actions, ActionTypes } from "../../actions";
import { State } from "./interface";

export const initialState: State = {
	path: undefined,
	query: {},
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.setLink:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
