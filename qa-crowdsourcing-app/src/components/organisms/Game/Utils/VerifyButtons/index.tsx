import React from "react";
import { View, Text } from "react-native";
import * as Atoms from "../../../../atoms";
import styles from "./styles";
import { IProps } from "./interface";

const VerifyButtons = ({
	children,
	approveEmoji,
	declineEmoji,
	onApprove,
	onDecline,
}: IProps) => {
	return (
		<View style={styles.wrapper}>
			<Atoms.Text.Heading style={styles.heading}>
				{children}
			</Atoms.Text.Heading>
			<View style={styles.buttonWrapper}>
				<Atoms.Buttons.Emoji
					emoji={approveEmoji}
					type="success"
					onPress={onApprove}
				/>
				<Atoms.Buttons.Emoji
					emoji={declineEmoji}
					type="danger"
					onPress={onDecline}
				/>
			</View>
		</View>
	);
};

export default VerifyButtons;
