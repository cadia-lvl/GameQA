import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	checkListOuter: {
		borderWidth: 1,
		borderColor: "#acacac",
		borderRadius: 5,
		padding: 10,
		backgroundColor: "#f8f8f8",
		marginBottom: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	checkListTitle: {
		fontWeight: "400",
		color: "#666",
		marginBottom: 5,
	},
	checkItemPara: { color: "#999" },
	checkContainer: {
		marginRight: 7,
		width: 20,
	},
});

export default styles;
