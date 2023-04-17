import { Dispatch } from "redux";
import { ActionTypes } from "../types";
import Api from "../../api";
import { Prize } from "../../declerations";
import { FetchRandomPrize } from "./interface";

export const fetchRandomPrize = () => {
    return async function (dispatch: Dispatch) {
        try {
            const { data } = await Api.get<Prize>(
                "/api/v1/prizes/random");
                dispatch<FetchRandomPrize>({
                    type:ActionTypes.fetchRandomPrize,
                    payload: data,
                });
        }
        catch (error){

        }
    };
};


export * as Actions from "./interface";