import React, { useEffect, useMemo, useState, useCallback } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { IProps, SelectionStates } from "./interface";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../../../../services";

import { useDispatch } from "react-redux";
import {
	addNotificationItem,
	clearNotifications,
} from "../../../../../actions/notification";

const SpanSelector = ({
	firstWord,
	lastWord,
	immutable,
	paragraph,
	onSelectFirstWord,
	onClearSelection,
	onSelectLastWord,
}: IProps) => {
	const [selectionState, setSelectionState] =
		useState<SelectionStates>("select-first");

	let action: ((v: number) => any) | undefined;

	const handleClick = useCallback(
		(i) => {
			if (immutable) return;

			if (firstWord === undefined) {
				onSelectFirstWord(i);
				firstWord = lastWord = -1;
				setSelectionState("select-last");
			} else if (lastWord === undefined) {
				onSelectLastWord(i);
				lastWord = firstWord;
				setSelectionState("clear-selection");
			} else {
				onClearSelection();
				setSelectionState("select-first");
			}
		},
		[firstWord, lastWord, immutable]
	);

	if (immutable) action = () => null;

	const shouldHighlight = (i: number) =>
		i == firstWord || (i >= firstWord! && i <= lastWord!);

	const wordArray = useMemo(() => paragraph.split(" "), [paragraph]);

	const dispatch = useDispatch();

	/**
	 * Show notification to user
	 */
	useEffect(() => {
		dispatch(clearNotifications());

		if (immutable) return;

		switch (selectionState) {
			case "select-first":
				dispatch(
					addNotificationItem({
						title: "Select answer snippet",
						text: "Tap the first character of the answer snippet",
					})
				);
				break;
			case "select-last":
				dispatch(
					addNotificationItem({
						title: "Select answer snippet",
						text: "Tap the last character of the answer snippet",
					})
				);
				break;
			case "clear-selection":
				dispatch(
					addNotificationItem({
						title: "Do you want to change the highlighed answer snippet?",
						text: "Tap the text to choose again",
					})
				);
				break;
		}

		return () => {
			dispatch(clearNotifications());
		};
	}, [selectionState, immutable]);

	return (
		<View>
			<View style={styles.para}>
				{wordArray.map((word, i) => (
					<TouchableOpacity
						onPress={() => handleClick(i)}
						activeOpacity={1}
					>
						<Text
							style={{
								...styles.word,
								color: shouldHighlight(i)
									? Colors.MapToDark.highlight
									: "#666",

								textDecorationLine: shouldHighlight(i)
									? "underline"
									: "none",
							}}
						>
							{word}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

export default SpanSelector;
