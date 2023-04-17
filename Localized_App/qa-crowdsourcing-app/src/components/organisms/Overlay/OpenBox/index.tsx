import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../../reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PrizeCategory as CategoryType } from "../../../../declerations";
import * as Actions from "../../../../actions";
import styles from "./styles";
import Confetti from "../Confetti";
import { Atoms } from "../../..";
import { Sounds } from "../../../../services";
import * as config from "../,,/../../../../config";
import { Chests } from "../../../../services";

const OpenBox = () => {
	// categories the user has not seen yeat
	const [newCategories, setNewCategories] = useState<CategoryType[]>([]);
	const dispatch = useDispatch();

	// declaring conts for redux state
	const prize = useSelector((state: StoreState) => state.prize);
	const auth = useSelector((state: StoreState) => state.auth);

	const opacityValue = useRef(new Animated.Value(0)).current;

	// check for new prizes
	useEffect(() => {
		const catNameToKey = (name: string) => `${auth._id}:${name}`;

		const hasSeen = async (name: string) => {
			return !!(await AsyncStorage.getItem(catNameToKey(name)));
		};
		const markAsSeen = async (name: string) =>
			await AsyncStorage.setItem(catNameToKey(name), "[OK]");

		const getUnseenCategories = async () => {
			const availables = prize.prizeCategories.filter(
				(category) => category.isAvailable
			);
			const results = await Promise.all(
				availables.map((cat) => hasSeen(cat.name))
			);

			return availables.filter((_, i) => !results[i]);
		};

		getUnseenCategories()
			.then((categories) => {
				setNewCategories(categories);
				return categories;
			})
			.then(async (categories) => {
				await Promise.all(
					categories.map((cat) => markAsSeen(cat.name))
				);
				if (categories.length === 0)
					dispatch(Actions.Overlay.dequeOverlay());
			})
			.catch((error) => {
				// do nothing on errror
			});
	}, [auth.level, prize.prizeCategories, auth._id]);

	useEffect(() => {
		if (newCategories.length > 0) {
			Sounds.play("open-chest");
			const DISSAPEAR_DELAY = 2750;
			const ANIM_DURATION = 350;
			const OPACITY_TARGET = 1;
			const BUFFER = 100;
			Animated.timing(opacityValue, {
				toValue: OPACITY_TARGET,
				duration: ANIM_DURATION,
				useNativeDriver: false,
			}).start();
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
		}
	}, [newCategories]);

	const category = newCategories[0];

	if (!category || !config.SHOW_BOX_OVERLAYS) return <React.Fragment />;

	return (
		<Animated.View
			style={{
				...styles.outer,
				backgroundColor: Chests.mapToColor(category.name),
			}}
			pointerEvents="box-none"
		>
			<Image
				source={Chests.mapToPrize(category.name)}
				resizeMode="contain"
			/>
			<Atoms.Text.Heading
				style={{
					...styles.chestUnlockHeader,
					...styles.chestUnlockPara,
				}}
			>
				{category.name} {"\n"}
			</Atoms.Text.Heading>
			<Atoms.Text.Heading style={styles.chestUnlockPara}>
			You're eligible for this prize!{" "}
				{/* setja inn catergory name hér inn */}
			</Atoms.Text.Heading>

			<Confetti />
		</Animated.View>
	);
};

export default OpenBox;
