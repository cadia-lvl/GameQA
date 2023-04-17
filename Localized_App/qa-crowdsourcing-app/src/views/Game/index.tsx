import React, { useEffect, useState, useMemo } from "react";
import LayoutWrapper from "../../layout";
import { Atoms, Molecules, Organisms } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import * as Actions from "../../actions";
import { GameTypes, OverlayType } from "../../declerations";
import styles from "./styles";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Game = () => {
	const auth = useSelector((state: StoreState) => state.auth);
	const game = useSelector((state: StoreState) => state.game);
	const dispatch = useDispatch();

	const DISPLAY_AD_PROBABILITY = 0.065;
	Organisms.Game.Hooks.useRandomOverlay(DISPLAY_AD_PROBABILITY, [
		OverlayType.advertisePrize,
	]);

	const DISPLAY_MOTIVATION_PROBABILITY = 0.05;
	Organisms.Game.Hooks.useRandomOverlay(DISPLAY_MOTIVATION_PROBABILITY, [
		OverlayType.motivation,
	]);

	// gets motivation when component loads
	useEffect(() => {
		dispatch(Actions.Motivation.fetchMotivation());
	}, []);

	// undefined means that we have not checked the cache to find out
	const [hasSigned, setHasSigned] = useState<boolean | undefined>();

	// backup
	useEffect(() => {
		// refresh (backup) if no round set as current
		const INTERVAL = 1500;
		if (game.current === undefined) {
			const interval = setInterval(
				() => dispatch(Actions.Game.fetchCurrentGameRound()),
				INTERVAL
			);
			return () => {
				clearInterval(interval);
			};
		}
		dispatch(Actions.Auth.fetchUserFromToken());
	}, [game.current]);

	// set overlays
	useEffect(() => {
		// return if no game or if use has not signed affidavid
		if (game.current === undefined || hasSigned !== true) return;

		// if game is any state that is not End of Round
		if (game.current !== GameTypes.completed) {
			// 1. announce the game
			dispatch(
				Actions.Overlay.enqueOverlay([OverlayType.announceGame])
			);
			// 2. if it is write question, show image to ask about
			if (game.current === GameTypes.writeQuestion)
				dispatch(
					Actions.Overlay.enqueOverlay([
						OverlayType.askAboutImage,
					])
				);
		} else {
			// if it is the End of Round, queue the following
			dispatch(
				Actions.Overlay.enqueOverlay([
					OverlayType.levelProgress,
					OverlayType.announceGame,
					OverlayType.newPrize,
				])
			);
		}
	}, [game.lastLoaded, hasSigned]);

	const affidavidKey = useMemo(
		() => `${auth._id}:GAME:AFFIDAVID`,
		[auth._id]
	);

	useEffect(() => {
		// set has signed as unknown when user id changes
		setHasSigned(undefined);

		const hasSigned = async () =>
			!!(await AsyncStorage.getItem(affidavidKey));

		hasSigned()
			.then(setHasSigned)
			.catch(() => {
				// error fetching status
			});
	}, [auth._id, affidavidKey, setHasSigned]);

	useEffect(() => {
		if (hasSigned)
			AsyncStorage.setItem(affidavidKey, "[OK]")
				.then(() => {
					// works
				})
				.catch(() => {
					// error
				});
	}, [hasSigned]);

	return (
		<View style={styles.outer}>
			<LayoutWrapper>
				<Atoms.Loaders.CenterBox />
				<Molecules.Users.Info {...auth} />
				{!hasSigned ? (
					<View>
						<Atoms.Text.Heading style={styles.para}>
						Integrity Pledge
						</Atoms.Text.Heading>
						<Atoms.Text.Para style={styles.para}>
						I pledge to play the game with integrity. I will write understandable questions, I will answer to the best of my ability and review questions and answers to the best of my ability.
						</Atoms.Text.Para>
						<Atoms.Text.Para style={styles.para}>
						I also understand that if my contribution violates this pact, I will not have a chance to win any prizes.
						</Atoms.Text.Para>
						<Atoms.Buttons.Base
							label="Confirm"
							type="highlight"
							onPress={() => setHasSigned(true)}
						/>
					</View>
				) : (
					!game.isLoading &&
					Organisms.GameRounds.filter(
						(item) => item.type === game.current
					).map(({ Component }) => <Component />)
				)}
			</LayoutWrapper>
			<Atoms.Loaders.CenterBox
				isLoading={game.isLoading}
				onCancel={
					game.axiosCancelTokenSource
						? () => game.axiosCancelTokenSource?.cancel()
						: undefined
				}
			/>
		</View>
	);
};

export default Game;
