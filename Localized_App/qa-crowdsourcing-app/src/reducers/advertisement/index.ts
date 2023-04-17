import { Actions, ActionTypes } from "../../actions";
import { State } from "./interface";

export const initialState: State = {
    prize: undefined
}


export const reducer = (state: State = initialState, action:Actions): State => {
    switch(action.type){
        case ActionTypes.fetchRandomPrize:
            return {...state, prize:action.payload}
        default:
            return state;
    }
}

export default reducer;

export * from "./interface";