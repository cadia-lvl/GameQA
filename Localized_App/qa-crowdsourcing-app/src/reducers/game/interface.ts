import axios, { CancelTokenSource } from "axios";
import { GameTypes } from "../../declerations";

export interface State {
	current?: GameTypes;
	currentRound: number;
	totalRounds: number;
	_id: string;
	isLoading: boolean;
	axiosCancelTokenSource?: CancelTokenSource;
	lastLoaded: number; // date when last round was loaded
}
