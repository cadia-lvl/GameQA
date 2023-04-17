import React from "react";
import LayoutWrapper from "../../layout";
import { Dimensions, View } from "react-native";
import styles from "./styles";
import { Atoms } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../services";
import * as Actions from "../../actions";
import * as utils from "./utils";
import * as Interface from "./interface";
import { ScrollView } from "react-native-gesture-handler";

const RestartLevelView = () => {
	const auth = useSelector((state: StoreState) => state.auth);
	const dispatch = useDispatch();

	const current = auth;
	const upgrade = { ...auth, resetCount: auth.resetCount + 1, level: 1 };

	const avatarSize = Dimensions.get("screen").width * 0.3;

	const RenderBullet = (props: Interface.IBullet) => {
		return (
			<View style={{ flexDirection: "row", marginVertical: 15 }}>
				<FontAwesome
					name={props.icon}
					size={24}
					style={{ paddingHorizontal: 15 }}
					color={Colors.MapToDark[props.color]}
				/>
				<Atoms.Text.Para>{props.text}</Atoms.Text.Para>
			</View>
		);
	};

	return (
		<LayoutWrapper>
			<ScrollView style={styles.outer}>
				<View style={styles.avatarsOuter}>
					<Atoms.Users.Avatar {...current} size={avatarSize} />
					<View style={styles.chevrons}>
						<FontAwesome
							name="chevron-right"
							size={20}
							color={Colors.MapToDark.warning}
						/>
						<FontAwesome
							name="chevron-right"
							size={20}
							color={Colors.MapToDark.warning}
						/>
					</View>
					<Atoms.Users.Avatar {...upgrade} size={avatarSize} />
				</View>
				<View style={styles.text}>
					<Atoms.Text.Heading>Well done!</Atoms.Text.Heading>
					<Atoms.Text.Para>
					You think you've reached the top? Not quite. Now that you have completed all the levels, you get to start over with all of your experience and some extra prestige.
					</Atoms.Text.Para>
				</View>
				<View style={styles.bulletContainer}>
					{utils.BULLETS.map((bullet) => (
						<RenderBullet {...bullet} />
					))}
				</View>
				<Atoms.Buttons.Base
					label="Continue"
					onPress={() => dispatch(Actions.Auth.resetLevel())}
					type="highlight"
					inactive={auth.isResettingLevel}
				/>
			</ScrollView>
		</LayoutWrapper>
	);
};

export default RestartLevelView;
