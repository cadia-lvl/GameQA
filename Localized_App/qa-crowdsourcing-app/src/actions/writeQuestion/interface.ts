import { ActionTypes } from "../types";

export interface WriteQuestionAction {
	type: ActionTypes.writeQuestion;
	payload: string;
}

export interface RefreshAskAboutImageAction {
	type: ActionTypes.refreshAskAboutImage;
	payload: ImageInfo;
}

export interface ImageInfo {
	subject_tf: string;
	url: string;
}
