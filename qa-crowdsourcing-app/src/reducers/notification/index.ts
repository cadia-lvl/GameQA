import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: State = {
	notifications: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.addNotificationItem:
			return {
				...state,
				notifications: [...state.notifications, action.payload],
			};
		case ActionTypes.clearNotifications:
			return {
				...state,
				notifications: [],
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
