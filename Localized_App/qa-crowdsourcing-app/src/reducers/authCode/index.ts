import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: State = {
	code: "",
	errorMessage: "",
	isLoading: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.writeAuthCode:
			return {
				...state,
				errorMessage: "",
				isLoading: false,
				code: action.payload,
			};
		case ActionTypes.setAuthCodeLoading:
			return {
				...state,
				isLoading: action.payload,
				errorMessage: "",
			};
		case ActionTypes.setAuthCodeErrorMessage:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
export * from "./interface";
