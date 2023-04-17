import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	loadingWrap: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	form: {
		flex: 0.93,
	},
	changeForm: {
		justifyContent: "center",
		alignItems: "center",
		flex: 0.07,
	},
	imageWrapper: {
		flexDirection: "row",
		flex: 1,
		justifyContent: "space-around",
	},
	leftIconView: {
		flexDirection: "row",
		flex: 0.4,
		justifyContent: "center",
		alignItems: "center",
	},
	rightIconView: {
		flexDirection: "row",
		flex: 0.6,
		justifyContent: "center",
		alignItems: "center",
	},
	leftIcon: {
		height: 110,
		width: 110,
		transform: [{ rotate: "7deg" }],
	},
	rightIcon: {
		height: 185,
		width: 185,
		transform: [{ rotate: "-6deg" }],
	},
});

export default styles;
