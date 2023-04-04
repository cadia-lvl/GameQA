import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import * as Actions from "../../../../actions";

const AnnounceScreen = () => {
	const game = useSelector((state: StoreState) => state.game);
	const auth = useSelector((state: StoreState) => state.auth);
	const dispatch = useDispatch();

	const [target, setTarget] = useState(0);
	const [current, setCurrent] = useState(0);

	React.useEffect(() => {
		setTarget((game.currentRound - 1) / game.totalRounds);
		setCurrent(Math.max(0, game.currentRound - 2) / game.totalRounds);
	}, []);

	React.useEffect(() => {
		if (current !== target) {
			const TIMEOUT = 75;
			const diff = Math.max((target - current) / 13, 0.015);
			const t = setTimeout(
				() =>
					setCurrent((cur) =>
						Math.max(0, Math.min(cur + diff, target))
					),
				TIMEOUT
			);
			return () => {
				clearTimeout(t);
			};
		} else {
			const TIMEOUT = 1500;
			const t = setTimeout(
				() => dispatch(Actions.Overlay.dequeOverlay()),
				TIMEOUT
			);
			return () => {
				clearTimeout(t);
			};
		}
	}, [target, current]);

	return (
		<View style={styles.outer} pointerEvents="box-none">
			<View style={styles.middle}>
				<Text style={styles.percentage}>
					{Math.round(current * 100)}%
				</Text>
				<Text style={styles.toLevel}>
					- að lvl {auth.level + 1} -
				</Text>
			</View>
		</View>
	);
};

export default AnnounceScreen;
