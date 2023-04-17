import { ActionTypes } from "../types";

export interface SelectFirstWordIndexInParagraphAction {
	type: ActionTypes.selectFirstWordIndexInParagraph;
	payload: number;
}

export interface SelectSecondWordIndexInParagraphAction {
	type: ActionTypes.selectSecondWordIndexInParagraph;
	payload: number;
}

export interface ClearIndexRangeInParagraph {
	type: ActionTypes.clearIndexRangeInParagraph;
}
