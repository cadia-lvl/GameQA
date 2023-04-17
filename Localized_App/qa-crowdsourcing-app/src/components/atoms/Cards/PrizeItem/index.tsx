import React from "react";
import { Image, View } from "react-native";
import { Atoms } from "../../..";
import { Prize } from "../../../../declerations";
import styles from "./styles";
import * as Services from "../../../../services";

const PrizeCategoryCard = ({ name, img, available }: Prize) => {
	return (
		<Atoms.Cards.Base style={styles.outer}>
			<View style={available ? { opacity: 1 } : { opacity: 0.25 }}>
				<Image source={{ uri: img }} style={styles.image} />
				<View style={styles.pad}>
					<Atoms.Text.Heading>
						{name} {!available ? "(Out of stock)" : null}
					</Atoms.Text.Heading>
				</View>
			</View>
		</Atoms.Cards.Base>
	);
};

export default PrizeCategoryCard;
