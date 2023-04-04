import { ActionTypes } from "../types";
import { ScoreCard, User } from "../../declerations";

export interface FetchUserFromTokenAction {
	type: ActionTypes.fetchUserFromToken;
	payload: User;
}

export interface LogOutUserAction {
	type: ActionTypes.logOutUser;
}

export interface RegisterUserAction {
	type: ActionTypes.registerUser;
	payload: User;
}

export interface FetchInvitesAction {
	type: ActionTypes.fetchInvites;
	payload: User[];
}

export interface ResetLevelAction {
	type: ActionTypes.resetLevel;
	payload: User;
}

export interface SetResettingLevelAction {
	type: ActionTypes.setResettingLevel;
}
