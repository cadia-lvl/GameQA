import { ActionTypes } from "..";

export interface SetLinkAction {
	path: string;
	query: {
		[key: string]: any;
	};
}

export interface SetLink {
	type: ActionTypes.setLink;
	payload: SetLinkAction;
}
