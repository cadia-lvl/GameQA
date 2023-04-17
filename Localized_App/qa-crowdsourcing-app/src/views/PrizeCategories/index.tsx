import React, { useEffect, useState } from "react";
import LayoutWrapper from "../../layout";
import { Atoms, Molecules } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import styles from "./styles";
import * as Actions from "../../actions";
import { OverlayType } from "../../declerations";
import { Linking, ScrollView, View } from "react-native";

const PrizeCategories = () => {
	const [isGiveAway, setIsGiveAway] = useState(false);

	// react-redux useDispatch hook
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Actions.GiveAway.fetchGiveAways());
	}, [dispatch]);

	const auth = useSelector((state: StoreState) => state.auth);
	const prizeCategories = useSelector(
		(state: StoreState) => state.prize.prizeCategories
	);

	const giveAway = useSelector((state: StoreState) => state.giveAway);

	// fetch prize categories from API
	useEffect(() => {
		dispatch(Actions.PrizeCategory.fetchPrizeCategories());
	}, [dispatch]);

	useEffect(() => {
		dispatch(Actions.Overlay.enqueOverlay([OverlayType.newPrize]));
	}, [auth.level, prizeCategories]);

	//constant for link to Spurningar.is facebook site
	const PRIZE_GIVEAWAY_SITE = "https://www.facebook.com/spurningar.is";

	//open Spurningar.is facebook page if countdown is pressed
	const loadInBrowser = () => {
		Linking.openURL(PRIZE_GIVEAWAY_SITE).catch((err) =>
			console.error("Couldn't load page", err)
		);
	};

	// Change state of giveAway to true for 10 min.
	const showGiveAwayAndReset = () => {
		setIsGiveAway(true);
		setTimeout(setIsGiveAway, 600000, false);
	};

	//calculate next giveaway time in seconds from array of giveaway dates
	const getNextGiveAwayTime = () => {
		let today = new Date();
		let closest = new Date("2035-07-07T17:00:00.000Z");
		var closestTime = closest.getTime();
		for (let i = 0; i < giveAway.giveAways.length; i++) {
			let curr = new Date(giveAway.giveAways[i].time);
			let currTime = curr.getTime();

			if (currTime < closestTime && currTime > today.getTime()) {
				closestTime = currTime;
			}
		}
		if (closestTime === closest.getTime()) return -1;
		const presentTime = today.getTime();
		let diffInMilliSeconds = closestTime - presentTime;
		return diffInMilliSeconds / 1000;
	};

	const TIME_UNTIL_GIVEAWAY = getNextGiveAwayTime();

	return (
		<ScrollView>
			<LayoutWrapper>
				<Molecules.Users.Info {...auth} />
				<Atoms.Text.Para style={styles.paragraph}>
				Here you see a list of available prize categories. Click on a category to see an overview of the prizes. 🏆🎁
				</Atoms.Text.Para>
				<Molecules.GiveAway.CountDownComponent
					time={TIME_UNTIL_GIVEAWAY}
					isCounting={!isGiveAway}
					onFinish={showGiveAwayAndReset}
					onPress={loadInBrowser}
					isLoading={giveAway.isLoading}
				/>
				{prizeCategories.map((item) => (
					<Atoms.Cards.PrizeCategory {...item} />
				))}
			</LayoutWrapper>
		</ScrollView>
	);
};

export default PrizeCategories;
