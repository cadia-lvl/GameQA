import React, { useEffect } from "react";
import ConfettiCannon from "react-native-confetti-cannon";
import { useDispatch } from "react-redux";
import * as Actions from "../../../../actions";
import * as Interface from "./interface";

const Confetti = () => {
	const COUNT = 200;
	const X_origin = -10;
	const Y_origin = 0;

	const dispatch = useDispatch();

	useEffect(() => {
		const DELAY = 3750;
		const t = setTimeout(() => {
			dispatch(Actions.Overlay.dequeOverlay());
		}, DELAY);
		return () => {
			clearTimeout(t);
		};
	}, []);

	return (
		<ConfettiCannon
			count={COUNT}
			origin={{ x: X_origin, y: Y_origin }}
		/>
	);
};

export default Confetti;
