import React, { useMemo } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { Atoms } from "../../..";
import { StoreState } from "../../../../reducers";
import { Colors } from "../../../../services";
import { IProps, IRenderTextProps } from "./interface";
import styles from "./styles";

const HighscoreItem = ({ user }: IProps) => {
	const { username, streak, scoreCard } = user;
	const { hiscoreRank } = scoreCard;

	const currentUser = useSelector((state: StoreState) => state.auth);

	const isCurrent = useMemo(
		() => currentUser._id == user._id,
		[currentUser, user]
	);

	/**
	 * Renders each info on highscore card for each specific user.
	 * If highscore card is logged in user, use different style.
	 * @param props ReactNode
	 * @returns JSX element
	 */
	const RenderText = (props: IRenderTextProps) =>
		isCurrent ? (
			<Atoms.Text.Heading
				style={{ color: Colors.MapToDark["white"] }}
			>
				{props.children}
			</Atoms.Text.Heading>
		) : (
			<Atoms.Text.Para>{props.children}</Atoms.Text.Para>
		);

	return (
		<View
			style={{
				flexDirection: "row",
				backgroundColor: isCurrent
					? Colors.MapToDark.highlight
					: "white",
				height: 80,
				marginBottom: 2,
				paddingVertical: 5,
				borderBottomWidth: 1,
				borderBottomColor: "#eee",
			}}
		>
			<View style={styles.highscoreRankContainer}>
				<RenderText># {hiscoreRank}</RenderText>
			</View>
			<Atoms.Users.Avatar {...user} color="highlight" />

			<View style={styles.usernameAndStreakContainer}>
				<RenderText>{username}</RenderText>
				<RenderText>
					{streak > 1 ? `${streak}🔥` : null}
				</RenderText>
			</View>
		</View>
	);
};

export default HighscoreItem;
