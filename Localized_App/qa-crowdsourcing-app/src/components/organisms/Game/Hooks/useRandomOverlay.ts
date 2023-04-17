import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../../../reducers";
import * as Actions from "../../../../actions";
import { OverlayType } from "../../../../declerations";

/**
 * hook that accepts a probability (0-1) and an overlay type
 * and every time the game round is loaded, it shows the overlay
 * with the given probability
 *
 * @param probability the porbability of showing overlay
 * @param overlay the overlay type to show
 */
const useRandomOverlay = (probability: number, overlay: OverlayType[]) => {
	const state = useSelector((state: StoreState) => state.game);
	const dispatch = useDispatch();

	React.useEffect(() => {
		const rand = Math.random();
		const shouldShow = rand < probability;

		if (shouldShow && state.lastLoaded > 0)
			dispatch(Actions.Overlay.enqueOverlay(overlay));
	}, [state.lastLoaded]);
};

export default useRandomOverlay;
