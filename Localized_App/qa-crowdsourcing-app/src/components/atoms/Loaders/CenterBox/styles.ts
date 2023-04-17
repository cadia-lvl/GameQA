import { StyleSheet } from "react-native";
import { Colors } from "../../../../services";

const styles = StyleSheet.create({
	outer: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		zIndex: 20,
	},
	inner: {
		width: 100,
		height: 100,
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
		position: "relative",
	},
	cancel: {
		flexDirection: "row",
		padding: 7,
		backgroundColor: Colors.MapToDark.warning,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.08,
		shadowRadius: 4.22,
		elevation: 3,
		marginBottom: 10,
		alignItems: "center",
	},
	cancelText: {
		color: Colors.MapToLight.warning,
		marginLeft: 7,
	},
});

export default styles;
