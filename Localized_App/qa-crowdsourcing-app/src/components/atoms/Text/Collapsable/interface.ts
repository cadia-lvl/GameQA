import React from "react";
import { GestureResponderEvent, TextProps } from "react-native";

export type onPress = (onPress: GestureResponderEvent) => void

export interface IProps extends TextProps {
	children: React.ReactNode;
	lines?: number;
}