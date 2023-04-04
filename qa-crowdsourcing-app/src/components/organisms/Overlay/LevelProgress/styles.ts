import { StyleSheet } from "react-native";
import { Colors } from "../../../../services";

const styles = StyleSheet.create({
	outer: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	middle: {
		width: 150,
		height: 150,
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.08,
		shadowRadius: 4.22,
		elevation: 3,
		justifyContent: "center",
		alignItems: "center",
	},
	percentage: {
		fontSize: 34,
		color: Colors.MapToDark.success,
	},
	toLevel: {
		color: "#666",
	},
});

export default styles;
