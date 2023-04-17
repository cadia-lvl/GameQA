import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

import { IProps } from "./interface";

import * as Atoms from "../../../atoms";
import * as Services from "../../../../services";

import CountDown from "react-native-countdown-component";

const CountDownComponent = (props: IProps) => {
	const { time, isCounting, isLoading, onFinish, onPress } = props;

	const timeLabels = {
		d: Services.CountDownLabel.MapToIcelandic.Days,
		h: Services.CountDownLabel.MapToIcelandic.Hours,
		m: Services.CountDownLabel.MapToIcelandic.Minutes,
		s: Services.CountDownLabel.MapToIcelandic.Seconds,
	};

	if (isLoading || time === -1) return null;
	return (
		<View>
			<TouchableOpacity onPress={() => onPress()}>
				{isCounting ? (
					<View style={styles.outer}>
						<Atoms.Text.Heading style={styles.heading}>
							Útdráttur á Facebook eftir
						</Atoms.Text.Heading>

						<CountDown
							until={time}
							onFinish={() => onFinish()}
							onPress={() => onPress()}
							size={20}
							timeLabels={timeLabels}
							digitStyle={styles.digitStyle}
							digitTxtStyle={styles.digitTxtStyle}
						/>
					</View>
				) : (
					<View style={styles.outer}>
						<Atoms.Text.Heading
							style={styles.giveAwayDrawText}
						>
							Útdráttur í gangi á facebook.🥳🥳
						</Atoms.Text.Heading>
						<Atoms.Text.Para style={styles.giveAwayDrawText}>
							Ýttu hér til að sjá streymi.
						</Atoms.Text.Para>
					</View>
				)}
			</TouchableOpacity>
		</View>
	);
};

export default CountDownComponent;
