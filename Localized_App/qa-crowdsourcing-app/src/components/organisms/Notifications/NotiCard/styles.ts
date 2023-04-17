import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	outer: {
		backgroundColor: "white",
		borderColor: "white",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.32,
		shadowRadius: 7.22,
		elevation: 3,
		padding: 10,
		paddingLeft: 3,
		flexDirection: "row",
		borderRadius: 5,
	},
	left: {
		width: 34,
		alignItems: "center",
		justifyContent: "center",
	},
	right: { flex: 1 },
	top: {
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
	},
	times: {
		paddingLeft: 10,
		paddingBottom: 10,
	},
});

export default styles;
