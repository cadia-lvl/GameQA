import { State } from "./interface";
import { Actions, ActionTypes } from "../../actions";
import { GameTypes } from "../../declerations";

export const initialState: State = {
	currentRound: 0,
	totalRounds: 10,
	_id: "",
	isLoading: false,
	lastLoaded: 0,
};

const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.startWriteQuestionRound:
			return {
				...state,
				...action.payload,
				current: GameTypes.writeQuestion,
			};
		case ActionTypes.startVerifyQuestionRound:
			return {
				...state,
				...action.payload,
				current: GameTypes.questionQualityAssurance,
			};
		case ActionTypes.startGoogleSearchRound:
			return {
				...state,
				...action.payload,
				current: GameTypes.submitArticle,
			};
		case ActionTypes.startSelectSpanRound:
			return {
				...state,
				...action.payload,
				current: GameTypes.verifyAnswerLocation,
			};
		case ActionTypes.startVerifySpanRound:
			return {
				...state,
				...action.payload,
				current: GameTypes.verifyAnswerSpan,
			};
		case ActionTypes.startCompletedViewRound: {
			return {
				...state,
				...action.payload,
				currentRound: action.payload.currentRound + 1,
				current: GameTypes.completed,
				lastLoaded: new Date().getTime(),
			};
		}
		case ActionTypes.setGameLoadingState: {
			return {
				...state,
				isLoading: action.payload,
				axiosCancelTokenSource: action.request?.cancelToken,
			};
		}
		case ActionTypes.setCurrentGameRound:
			return {
				...state,
				currentRound: action.payload,
				lastLoaded: new Date().getTime(),
			};
		default:
			return state;
	}
};

export default reducer;

export * from "./interface";
