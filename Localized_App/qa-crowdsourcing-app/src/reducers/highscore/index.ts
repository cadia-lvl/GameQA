import { Actions, ActionTypes } from "../../actions";
import { State } from "./interface";

export const initialState: State = {
	highscores: [],
	isLoading: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.fetchHighscorePlacement:
			return {
				...state,
				highscores: action.payload,
				isLoading: false,
			};
		case ActionTypes.fetchHighscorePlacementExpansionUp:
			return {
				...state,
				highscores: [
					...action.payload,
					...state.highscores,
				].filter(
					(v, i, a) => a.findIndex((t) => t._id === v._id) === i
				),
				isLoading: false,
			};
		case ActionTypes.fetchHighscorePlacementExpansionDown:
			return {
				...state,
				highscores: [
					...state.highscores,
					...action.payload,
				].filter(
					(v, i, a) => a.findIndex((t) => t._id === v._id) === i
				),
				isLoading: false,
			};
		case ActionTypes.setHighscoreLoadingStatus:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
