import { Prize } from "../../declerations";
import { ActionTypes } from "../types";

export interface FetchRandomPrize {
    type: ActionTypes.fetchRandomPrize;
    payload: Prize;
}