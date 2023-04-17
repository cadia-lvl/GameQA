import { CancelTokenSource } from "axios";
import { ActionTypes } from "..";
import {
	StartWriteQuestionRoundFromAPI,
	StartVerifyQuestionRoundFromAPI,
	StartGoogleSearchRoundFromAPI,
	StartSelectSpanRoundFromAPI,
	StartVerifySpanRoundFromAPI,
	StartCompletedViewRoundFromAPI,
} from "../../declerations";

/**
 * BEGINNING: Start round actions
 */
export interface StartWriteQuestionRoundFromAPIAction {
	type: ActionTypes.startWriteQuestionRound;
	payload: StartWriteQuestionRoundFromAPI;
}
export interface StartVerifyQuestionRoundFromAPIAction {
	type: ActionTypes.startVerifyQuestionRound;
	payload: StartVerifyQuestionRoundFromAPI;
}
export interface StartGoogleSearchRoundFromAPIAction {
	type: ActionTypes.startGoogleSearchRound;
	payload: StartGoogleSearchRoundFromAPI;
}
export interface StartSelectSpanRoundFromAPIAction {
	type: ActionTypes.startSelectSpanRound;
	payload: StartSelectSpanRoundFromAPI;
}
export interface StartVerifySpanRoundFromAPIAction {
	type: ActionTypes.startVerifySpanRound;
	payload: StartVerifySpanRoundFromAPI;
}
export interface StartCompletedViewRoundFromAPIAction {
	type: ActionTypes.startCompletedViewRound;
	payload: StartCompletedViewRoundFromAPI;
}

/**
 * END: Start round actions
 */

export interface SetCurrentGameRoundAction {
	type: ActionTypes.setCurrentGameRound;
	payload: number;
}

export interface SetGameLoadingStateAction {
	type: ActionTypes.setGameLoadingState;
	payload: boolean;
	request?: { cancelToken: CancelTokenSource };
}
