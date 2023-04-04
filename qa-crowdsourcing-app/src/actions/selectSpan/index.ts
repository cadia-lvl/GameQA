import { ActionTypes } from "../types";
import {
	ClearIndexRangeInParagraph,
	SelectFirstWordIndexInParagraphAction,
	SelectSecondWordIndexInParagraphAction,
} from "./interface";

export const setFirstWord = (index: number): SelectFirstWordIndexInParagraphAction => {
	return {
		type: ActionTypes.selectFirstWordIndexInParagraph,
		payload: index,
	};
};

export const setLastWord = (index: number): SelectSecondWordIndexInParagraphAction => {
	return {
		type: ActionTypes.selectSecondWordIndexInParagraph,
		payload: index,
	};
};

export const clearRange = (): ClearIndexRangeInParagraph => {
	return {
		type: ActionTypes.clearIndexRangeInParagraph,
	};
};

export * as Actions from "./interface";
