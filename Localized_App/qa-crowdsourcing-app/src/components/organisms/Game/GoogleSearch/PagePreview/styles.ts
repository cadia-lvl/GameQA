import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	outer: {
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 12,
		paddingBottom: 12,
		backgroundColor: "white",
		marginTop: 8,
	},
	topLine: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		height: 21,
		marginBottom: 12,
	},
	pageIcon: {
		height: 20,
		width: 20,
		marginRight: 10,
	},
	url: {
		fontSize: 12,
		color: "#202124",
	},
	title: {
		fontSize: 20,
		color: "#1558d6",
		marginBottom: 12,
		lineHeight: 26,
	},
	extract: {
		fontSize: 14,
		color: "#3c4043",
		lineHeight: 20,
	},
	icon: {
		height: "100%",
		width: "100%",
	},
});

export default styles;
