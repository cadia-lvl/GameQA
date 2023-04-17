import * as React from "react";
import { View, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";
import { useSelector } from "react-redux";
import { Atoms } from "../../..";
import { User } from "../../../../declerations";
import { StoreState } from "../../../../reducers";
import { IProps } from "./interface";
import styles from "./styles";

const ChatBubble = ({
	sender,
	message,
	isInbound: isInboundProp,
}: IProps) => {
	const auth = useSelector((state: StoreState) => state.auth);

	const isInbound = !!sender || isInboundProp;

	const itemStyles = isInbound
		? [styles.item, styles.itemOut]
		: [styles.item, styles.itemIn];

	const arrowStyles = isInbound
		? [styles.arrowContainer, styles.arrowRightContainer]
		: [styles.arrowContainer, styles.arrowLeftContainer];

	const backgroundColor = isInbound ? "#1084ff" : "grey";
	const pathProps = isInbound
		? {
				d: "M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z",
				fill: backgroundColor,
				x: "0",
				y: "0",
		  }
		: {
				d: "M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z",
				fill: backgroundColor,
				x: "0",
				y: "0",
		  };

	return (
		<View style={{ flexDirection: "row", alignItems: "flex-end" }}>
			<View style={{ flex: 1 }}>
				<View style={itemStyles}>
					<View style={[styles.balloon, { backgroundColor }]}>
						<Text style={{ paddingTop: 5, color: "white" }}>
							{message}
						</Text>
						<View style={arrowStyles}>
							<Svg
								style={
									isInbound
										? styles.arrowRight
										: styles.arrowLeft
								}
								width={moderateScale(15.5, 0.6)}
								height={moderateScale(17.5, 0.6)}
								viewBox="32.484 17.5 15.515 17.5"
								enable-background="new 32.485 17.5 15.515 17.5"
							>
								<Path {...pathProps} />
							</Svg>
						</View>
					</View>
				</View>
			</View>
			{sender ? <Atoms.Users.Avatar {...sender} size={45} /> : null}
		</View>
	);
};

export default ChatBubble;
