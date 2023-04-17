import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import { IProps } from "./interface";
import * as Services from "../../../../services";
import { FontAwesome } from "@expo/vector-icons";
import { ColorType } from "../../../../declerations";
import * as Icons from "../../../../static/icons";

const UserAvatar = ({
	level,
	color,
	size: sizeProp,
	resetCount,
	scoreCard,
}: IProps) => {
	const DEFAULT_SIZE = 70;
	const size = sizeProp === undefined ? DEFAULT_SIZE : sizeProp;
	const borderRadius = size / 2;

	const isFirst = scoreCard.hiscoreRank === 1;

	const MAP_TO_BACKGROUND: { [key: number]: ColorType } = {
		1: "highlight",
		2: "highlight",
		3: "highlight",
		4: "highlight",
		5: "highlight",
		6: "grey",
		7: "warning",
		8: "success",
		9: "danger",
		10: "light-grey",
	};

	const MAP_TO_ICON_COLOR: { [key: number]: ColorType } = {
		1: "grey",
		2: "warning",
		3: "light-grey",
		4: "success",
		5: "danger",
		6: "highlight",
		7: "highlight",
		8: "highlight",
		9: "highlight",
		10: "highlight",
	};

	const badgeIconColor = React.useMemo(
		() => Services.Colors.MapToDark[MAP_TO_ICON_COLOR[resetCount]],
		[resetCount]
	);

	const badgeBackgroundColor = React.useMemo(
		() => Services.Colors.MapToDark[MAP_TO_BACKGROUND[resetCount]],
		[resetCount]
	);

	const RenderBadge = () =>
		resetCount ? (
			<View
				style={{
					...styles.badgeOuter,
					borderColor: badgeIconColor,
					backgroundColor: badgeBackgroundColor,
				}}
			>
				<FontAwesome
					name="star"
					size={size / 5.5}
					color={badgeIconColor}
				/>
			</View>
		) : null;

	return (
		<View>
			{isFirst ? (
				<View style={styles.crownContainer}>
					<Image
						source={Icons.CROWN_ICON}
						style={styles.crownImage}
					/>
				</View>
			) : null}

			<Image
				style={{
					...styles.outer,
					height: size,
					width: size,
					borderRadius,
					borderColor:
						Services.Colors.MapToDark[color ?? "light-grey"],
				}}
				source={Services.UserLevels.mapLevelToIconURL(level)}
			/>
			<RenderBadge />
		</View>
	);
};

export default UserAvatar;
