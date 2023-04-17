import React, { useEffect, useRef } from "react";
import { Animated, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../../actions";
import * as Services from "../../../../services";
import * as utils from "./utils";
import { styles } from "./styles";
import { StoreState } from "../../../../reducers";
import { GameTypes } from "../../../../declerations";
import ConfettiCannon from "react-native-confetti-cannon";

const AnnounceGame = () => {
	const dispatch = useDispatch();

	const opacityValue = useRef(new Animated.Value(0)).current;
	const game = useSelector((state: StoreState) => state.game.current);

	useEffect(() => {
		const DISSAPEAR_DELAY = 2750;
		const ANIM_DURATION = 350;
		const OPACITY_TARGET = 1;
		const BUFFER = 100;

		Animated.timing(opacityValue, {
			toValue: OPACITY_TARGET,
			duration: ANIM_DURATION,
			useNativeDriver: false,
		}).start();

		Services.Sounds.play("new-task")
			.then(() => {
				//
			})
			.catch((e) => {
				//
			});

		const t1 = setTimeout(() => {
			Animated.timing(opacityValue, {
				toValue: 0,
				duration: ANIM_DURATION,
				useNativeDriver: false,
			}).start();
		}, DISSAPEAR_DELAY - ANIM_DURATION - BUFFER);

		const t2 = setTimeout(() => {
			dispatch(Actions.Overlay.dequeOverlay());
		}, DISSAPEAR_DELAY);

		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
		};
	}, []);

	const COUNT = 200;
	const X_origin = -10;
	const Y_origin = 0;

	return (
		<Animated.View
			style={{
				...styles.outer,
				opacity: opacityValue,
				backgroundColor: utils.mapToColor(game),
			}}
			pointerEvents="box-none"
		>
			<Image
				source={utils.mapToImage(game)}
				style={styles.image}
				resizeMode="contain"
			/>
			{game === GameTypes.completed ? (
				<ConfettiCannon
					count={COUNT}
					origin={{ x: X_origin, y: Y_origin }}
				/>
			) : null}
		</Animated.View>
	);
};

export default AnnounceGame;
