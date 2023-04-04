import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";
import { OverlayType } from "../../declerations";

export const initialState: State = {
	queue: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.dequeOverlay:
			return {
				...state,
				queue: state.queue.splice(1),
			};
		case ActionTypes.enqueOverlay: {
			return {
				...state,
				queue: [...state.queue, ...action.payload],
			};
		}
		case ActionTypes.pushOverlay: {
			return {
				...state,
				queue: [...action.payload, ...state.queue]
			}	
		}
		default:
			return state;
	}
};

export default reducer;
export * from "./interface";
