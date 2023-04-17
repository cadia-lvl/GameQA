import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Atoms } from "../../..";
import { PrizeCategory } from "../../../../declerations";
import { StoreState } from "../../../../reducers";
import { Colors } from "../../../../services";
import styles from "./styles";

import { Chests } from "./../../../../services";

const PrizeCategoryCard = (category: PrizeCategory) => {
	const navigation = useNavigation();
	const handleGoToItemsView = () =>
		navigation.navigate("prize-items", category);
	

	return (
		<TouchableOpacity onPress={handleGoToItemsView}>
			<Atoms.Cards.Base>
				<View style={styles.outer}>
					<View style={styles.imageOuter}>
						{category.isAvailable 
						?
						<Image
							style={styles.image}
							source={Chests.mapToPrize(category.name)}
							resizeMode="contain"
						/>
						:
						<Image
							style={styles.image}
							source={Chests.mapToNoPrize(category.name)}
							resizeMode="contain"
						/> 
						}
						
					</View>
					<Atoms.Text.Heading>
						{category.name}
					</Atoms.Text.Heading>
					<View style={styles.topLine}>
						{category.isAvailable ? (
							<Atoms.Text.Para>
								You are eligible for this prize!
							</Atoms.Text.Para>
						) : (
							<Atoms.Text.Para style={styles.para}>
								You need to {category.prereqDescription}.
							</Atoms.Text.Para>
						)}
					</View>
					<Atoms.Text.Para>
						{category.prizes.length} prizes in this category
					</Atoms.Text.Para>
				</View>
			</Atoms.Cards.Base>
		</TouchableOpacity>
	);
};

export default PrizeCategoryCard;
