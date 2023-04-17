import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
	TouchableOpacity,
	Clipboard,
	Alert,
	View,
	Share,
	ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Atoms, Molecules } from "../../components";
import LayoutWrapper from "../../layout";
import { StoreState } from "../../reducers";
import styles from "./styles";
import * as Services from "../../services";
import * as Actions from "../../actions";
import moment from "moment";
import { useFocusEffect } from "@react-navigation/native";

export default function index() {
	const [hasCopied, setHasCopied] = useState(false);

	const auth = useSelector((state: StoreState) => state.auth);

	const chartData = useSelector((state: StoreState) => state.chartData);

	const dispatch = useDispatch();

	const url = "Https://spurningaris.app.link";

	const alertCopy = () =>
		Alert.alert("Copied to clipboard", "Copied to clipboard!", [
			{
				text: "OK",
				onPress: () => null,
			},
		]);

	const numbers = React.useMemo(() => {
		const date = new Date();
		const yesterday = date.setDate(date.getDate() - 1);
		const dayBefore = date.setDate(date.getDate() - 2);
		return chartData.answersPerDay.length === 0
				? [
						{
							date: dayBefore,
							count: 0,
						},
						{
							date: yesterday,
							count: 1,
						},
						{
							date: date,
							count: 2,
						},
				  ]
				: chartData.answersPerDay;
	}, []);

	const handleShare = () =>
		Share.share(
			{
				message:
					"Thank you for supporting [LANGUAGE] in the digital world through this game!",
				url: url,
				title: "[[translation:ba0e0ff2-a9e9-460a-81bb-59fc8faecccc]]",
			},
			{
				// Android only:
				dialogTitle: "[[translation:ba0e0ff2-a9e9-460a-81bb-59fc8faecccc]]",
			}
		);

	const handleCopy = () => {
		Clipboard?.setString(url);
		alertCopy();
		setHasCopied(true);

		// Analytics.logEvent("copy_invite", {
		// 	link: url,
		// });
	};

	useFocusEffect(
		React.useCallback(() => {
			dispatch(Actions.ChartData.fetchAnswersPerDay());
		}, [])
	);

	return (
		<LayoutWrapper>
			<ScrollView>
				<Molecules.Users.Info {...auth} />
				<Atoms.Text.Para style={styles.paragraph}>
				Share or copy the link to invite your friends to join!.👫🤝
				</Atoms.Text.Para>
				<TouchableOpacity
					onPress={handleCopy}
					style={{
						...styles.linkOuter,
						borderColor: hasCopied
							? Services.Colors.MapToDark.success
							: Services.Colors.MapToDark.highlight,
					}}
				>
					<View
						style={{
							...styles.copyIcon,
							backgroundColor: hasCopied
								? Services.Colors.MapToDark.success
								: Services.Colors.MapToDark.highlight,
						}}
					>
						<FontAwesome
							name="copy"
							size={17}
							color={Services.Colors.MapToDark["light-grey"]}
						/>
					</View>
					<Atoms.Text.Para style={styles.link}>
						{url.slice(0, 35)}...
					</Atoms.Text.Para>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.shareOuter}
					onPress={handleShare}
				>
					<FontAwesome
						name="share"
						size={14}
						color={Services.Colors.MapToDark["light-grey"]}
					/>
					<Atoms.Text.Para style={styles.shareText}>
					Share
					</Atoms.Text.Para>
				</TouchableOpacity>
				<View
					style={{
						marginBottom: 20,
						marginTop: 10,
						borderBottomWidth: 1,
						borderColor: "#ccc",
					}}
				/>
				<Atoms.Text.Heading>
					Community Impact
				</Atoms.Text.Heading>
				<Atoms.Charts.LineChart
					datasets={[
						{
							// data: [1, 2, 5, 10, 15, 22, 23, 33],
							data: numbers.reduce<number[]>(
								(prev, curr) => {
									if (prev.length === 0)
										return [curr.count];
									const last = prev[prev.length - 1];
									prev.push(curr.count + last);
									return prev;
								},
								[]
							),
						},
					]}
					labels={chartData.answersPerDay.map((item, i) => {
						if (i === 0)
							return moment(item.date).format("DD MM");
						else if (i === chartData.answersPerDay.length - 1)
							return "Today      ";
						return "";
					})}
					// labels={["23.03", "", "", "", "", "", "", "I dag           "]}
					height={220}
				/>
			</ScrollView>
		</LayoutWrapper>
	);
}
