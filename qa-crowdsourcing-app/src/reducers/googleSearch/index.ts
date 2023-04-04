import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: State = {
	articles: [],
	query: "",
	searchError: false,
	noResults: false,
	isLoading: false,
	_id: "",
	text: "",
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.startGoogleSearchRound:
			return {
				...state,
				...action.payload.taskInfo,
				query: "",
				articles: [],
				searchError: false,
				noResults: false,
			};
		case ActionTypes.writeGoogleQuery:
			return { ...state, query: action.payload };

		case ActionTypes.fetchArticlesQuery: {
			return {
				...state,
				articles: action.payload,
				searchError: false,
				noResults: action.payload.length === 0,
			};
		}
		case ActionTypes.setGoogleSearchError:
			return {
				...state,
				searchError: true,
				articles: [],
			};
		case ActionTypes.setGameLoadingState:
			if (action.payload === false) return state;
			return {
				...state,
				searchError: false,
			};
		case ActionTypes.setImpossibleQuestion:
			return {
				...initialState,
				_id: action.payload._id,
				text: action.payload.text,
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
