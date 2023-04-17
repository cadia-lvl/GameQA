import React, { useEffect, useState, useCallback } from "react";
import { View, Image, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Atoms } from "../../..";
import * as Actions from "../../../../actions";
import { StoreState } from "../../../../reducers";
import styles from "./styles";

const COUNT_DOWN_FROM = 7;

const AskAboutImage = () => {
	const [count, setCount] = useState(COUNT_DOWN_FROM);
	const [hasLoaded, setHasLoaded] = useState(false);

	const dispatch = useDispatch();

	const state = useSelector((state: StoreState) => state.writeQuestion);

	const handleHide = useCallback(() => {
		if (hasLoaded) dispatch(Actions.Overlay.dequeOverlay());
	}, [count]);

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

	return (
		<View style={styles.outer}>
			{hasLoaded ? (
				<View style={styles.counterOuter}>
					<Atoms.Text.Para>{count}</Atoms.Text.Para>
				</View>
			) : null}

			<View>
				<Image
					onLoad={() => setHasLoaded(true)}
					source={{
						uri: state.image.url,
					}}
					style={styles.image}
					resizeMode="cover"
				/>
			</View>
			{hasLoaded ? (
				<View style={styles.promptOuter}>
					<Atoms.Text.Para>
					You can (if you choose to) ask about{" "}
						<Text style={styles.bold}>
							{state.image.subject_tf}
						</Text>
					</Atoms.Text.Para>
				</View>
			) : null}
		</View>
	);
};

export default AskAboutImage;
