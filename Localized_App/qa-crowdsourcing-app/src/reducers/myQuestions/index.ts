import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: State = {
	questions: [],
	isLoading: true,
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.fetchMyQuestions:
			return {
				...state,
				questions: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default reducer;
export * from "./interface";
