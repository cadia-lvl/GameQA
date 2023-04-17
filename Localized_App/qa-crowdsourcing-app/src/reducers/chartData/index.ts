import { Actions, ActionTypes } from "../../actions";
import { State } from "./interface";

export const initialState: State = {
	answersPerDay: [{ count: 1, date: new Date() }],
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.fetchAnswersPerDay:
			return {
				...state,
				answersPerDay: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
