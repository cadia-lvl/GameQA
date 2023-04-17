import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";

export const initialState: State = {
	_id: "",
	text: "",
	isYesOrNo: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.startVerifyQuestionRound:
			return {
				...state,
				...action.payload.taskInfo,
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
