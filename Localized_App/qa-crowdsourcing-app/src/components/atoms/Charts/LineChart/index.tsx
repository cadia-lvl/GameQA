import React, { useState, useEffect } from "react";
import { LayoutChangeEvent, View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./styles";
import { IProps } from "./interface";
import * as Services from "../../../../services";

const MIN_DATA_ITEM_COUNT = 2;

const CustomLineChart = ({ datasets, labels, height }: IProps) => {
	const [isLoading, setIsLoading] = useState(true);
	const [width, setWidth] = useState(0);

	const handleWidthChange = (e: LayoutChangeEvent) => {
		setWidth(e.nativeEvent.layout.width);
	};

	const screenWidth = Dimensions.get("window").width;

	useEffect(() => {
		const TIMEOUT = 1250;
		if (width > 0 && isLoading) {
			const t = setTimeout(() => {
				setIsLoading(false);
			}, TIMEOUT);
			return () => {
				clearTimeout(t);
			};
		}
	}, [width]);

	return (
		<View
			style={{ height: height, ...styles.outer }}
			onLayout={handleWidthChange}
		>
			
			<LineChart
				data={{
					labels: labels,
					datasets: datasets,
				}}
				width={width}
				height={height}
				chartConfig={{
					backgroundColor:
						Services.Colors.MapToDark["danger"],
					backgroundGradientFrom:
						Services.Colors.MapToDark["danger"],
					backgroundGradientTo:
						Services.Colors.MapToDark["danger"],
					decimalPlaces: 2, // optional, defaults to 2dp
					color: (opacity = 1) =>
						`rgba(255, 255, 255, ${opacity})`,
					style: {
						borderRadius: 16,
					},
				}}
				bezier
				style={{
					marginVertical: 8,
					borderRadius: 16,
				}}
			/>

			
		</View>
	);
};

export default CustomLineChart;
