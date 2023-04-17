import { User } from "../../declerations";
import { ActionTypes } from "../types";

export interface FetchHighscorePlacementAction {
	type: ActionTypes.fetchHighscorePlacement;
	payload: User[];
}

export interface FetchHighscorePlacementExpansionUpAction {
	type: ActionTypes.fetchHighscorePlacementExpansionUp;
	payload: User[];
}

export interface FetchHighscorePlacementExpansionDownAction {
	type: ActionTypes.fetchHighscorePlacementExpansionDown;
	payload: User[];
}

export interface SetHighscoreLoadingStatusAction {
	type: ActionTypes.setHighscoreLoadingStatus;
	payload: boolean;
}

