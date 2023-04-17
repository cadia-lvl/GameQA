import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: State = {
	paragraphs: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.fetchArticleParagraphs:
			return {
				...state,
				paragraphs: action.payload,
				error: false,
			};
		case ActionTypes.setArticleReaderError:
			return {
				...state,
				error: true,
			};
		default:
			return state;
	}
};

export default reducer;
export * from "./interface";
