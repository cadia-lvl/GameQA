import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	topLine: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	outer: {
		alignItems: "center",
	},
	imageOuter: {
		width: "100%",
		aspectRatio: 3,
		marginBottom: 10,
	},
	image: {
		height: "100%",
		width: "100%",
		opacity: 0.6,
	},
	icon: {
		position: "absolute",
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	para: {
		textAlign: "center",
	},
});

export default styles;
