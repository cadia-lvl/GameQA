import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: State = {
	text: "",
	paragraph: "",
	firstWord: undefined,
	lastWord: undefined,
	_id: "",
	isYesOrNo: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.startSelectSpanRound:
			return {
				...initialState,
				...action.payload.taskInfo,
				firstWord: undefined,
				lastWord: undefined,
			};
		case ActionTypes.selectFirstWordIndexInParagraph:
			return {
				...state,
				firstWord: action.payload,
			};
		case ActionTypes.selectSecondWordIndexInParagraph:
			if (action.payload < (state.firstWord ?? 0))
				return {
					...state,
					firstWord: undefined,
					lastWord: undefined,
				};
			return {
				...state,
				lastWord: action.payload,
			};
		case ActionTypes.clearIndexRangeInParagraph:
			return {
				...state,
				firstWord: undefined,
				lastWord: undefined,
			};
		case ActionTypes.startVerifySpanRound:
			return {
				...initialState,
				...action.payload.taskInfo,
			};
		default:
			return state;
	}
};
export default reducer;
export * from "./interface";
