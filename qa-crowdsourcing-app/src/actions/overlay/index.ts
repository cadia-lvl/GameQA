import { OverlayType } from "../../declerations";
import { ActionTypes } from "../types";
import { EnqueOverlayAction } from "./interface";

export const enqueOverlay = (
	payload: OverlayType[]
): EnqueOverlayAction => ({
	type: ActionTypes.enqueOverlay,
	payload,
});

export const dequeOverlay = () => ({
	type: ActionTypes.dequeOverlay,
});

export * as Actions from "./interface";
