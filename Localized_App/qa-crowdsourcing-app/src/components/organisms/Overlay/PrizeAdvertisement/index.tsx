import React, { useEffect, useState, useCallback } from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../../actions";
import * as Atoms from "../../../atoms";
import styles from "./styles";
import { StoreState } from "../../../../reducers";
import * as config from "../,,/../../../../config";

const COUNT_DOWN = 4;

const PrizeAdvertisement = () => {
	const [count, setCount] = useState(COUNT_DOWN);
	const [hasLoaded, setHasLoaded] = useState(false);

	const advertisement = useSelector(
		(state: StoreState) => state.advertisement
	);

	const dispatch = useDispatch();

	const handleHide = useCallback(() => {
		if (hasLoaded) dispatch(Actions.Overlay.dequeOverlay());
	}, [count]);

	useEffect(() => {
		dispatch(Actions.Advertisement.fetchRandomPrize());
	}, []);

	useEffect(() => {
		if (!hasLoaded) return;

		const MS_IN_S = 1000;

		if (count === 0) handleHide();
		else {
			const interval = setInterval(() => {
				setCount((c) => c - 1);
			}, MS_IN_S);
			return () => {
				clearInterval(interval);
			};
		}
	}, [count, handleHide, hasLoaded]);

	if (advertisement.prize === undefined || !config.SHOW_PRIZE_ADS)
		return <React.Fragment></React.Fragment>;
	return (
		<>
			{hasLoaded ? (
				<View style={styles.counterOuter}>
					<Atoms.Text.Para>{count}</Atoms.Text.Para>
				</View>
			) : null}
			<View>
				<Image
					onLoad={() => setHasLoaded(true)}
					source={{
						uri: advertisement.prize.img,
					}}
					style={styles.image}
					resizeMode="cover"
				/>
			</View>
			{hasLoaded ? (
				<View style={styles.promptOuter}>
					<Atoms.Text.Para>
					You have a chane to win a [PRIZE NAME]{" "}
						<Text style={styles.bold}>
							{advertisement.prize.name}
						</Text>
					</Atoms.Text.Para>
				</View>
			) : null}
		</>
	);
};

export default PrizeAdvertisement;
