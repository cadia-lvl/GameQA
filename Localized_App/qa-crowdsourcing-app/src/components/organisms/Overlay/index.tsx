import React, { useState, useEffect, useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../reducers";
import * as Actions from "../../../actions";
import styles from "./styles";
import ScreenItems, * as Screens from "./items";

const Screen = () => {
	const [Screen, setScreen] =
		useState<Screens.OverlayScreen | undefined>();
	const state = useSelector((state: StoreState) => state.overlay);
	const dispatch = useDispatch();

	useEffect(() => {
		const nextOverlay = state.queue[0];
		setScreen(
			ScreenItems.find((screen) => screen.type === nextOverlay)
		);
	}, [state.queue.length]);

	const handleHide = useCallback(
		() => dispatch(Actions.Overlay.dequeOverlay()),
		[Screen]
	);

	return Screen ? (
		<View style={styles.outer} pointerEvents="box-none">
			<TouchableOpacity
				style={styles.touchable}
				onPress={handleHide}
			>
				<Screen.Component />
			</TouchableOpacity>
		</View>
	) : null;
};

export default Screen;
