import { Dispatch } from "redux";
import { SetLink, SetLinkAction } from "./interface";
import { ActionTypes } from "..";

export const setLink = (link: SetLinkAction) => {
	return (dispatch: Dispatch) => {
		dispatch<SetLink>({
			type: ActionTypes.setLink,
			payload: link,
		});
	};
};

export * as Actions from "./interface";
