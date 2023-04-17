import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: State = {
	resetCode: "",
	isLoading: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.setResetPasswordLoadingState:
			return {
				...state,
				isLoading: action.payload,
			};
		case ActionTypes.setResetPasswordEmail:
			return {
				...state,
				email: action.payload,
			};
		case ActionTypes.setResetPasswordCode:
			return {
				...state,
				resetCode: action.payload,
			};

		case ActionTypes.requestResetPasswordToken:
			return {
				...state,
				resetToken: action.payload,
			};

		case ActionTypes.setResetPasswordError:
			return {
				...state,
				errorAlert: action.payload,
			};

		case ActionTypes.resetPasswordWithToken:
			return initialState;
		default:
			return state;
	}
};

export default reducer;
export * from "./interface";
