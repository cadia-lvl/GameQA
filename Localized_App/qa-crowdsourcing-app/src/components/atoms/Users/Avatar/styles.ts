import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	outer: {
		height: 70,
		width: 70,
		borderRadius: 35,
		borderWidth: 3,
	},
	badgeOuter: {
		position: "absolute",
		bottom: -5,
		right: -5,
		borderRadius: 30,
		padding: 10,
		borderWidth: 2,
	},
	crownContainer: {
		position: "absolute",
		left: 0,
		top: 0,
		height: "35%",
		width: "100%",
		transform: [{ translateY: 0.025}],
		zIndex: 10,
		alignItems: "center",
	},
	crownImage: {
		width: "80%",
		height: "100%",
	},
});

export default styles;
