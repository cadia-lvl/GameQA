import { StyleSheet } from "react-native";
import { Colors } from "../../../../services";

const styles = StyleSheet.create({
	outer: {
		flex: 1,
	},
	counterOuter: {
		position: "absolute",
		right: 20,
		top: 50,
		width: 35,
		height: 35,
		backgroundColor: "white",
		zIndex: 20,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.08,
		shadowRadius: 4.22,
		elevation: 3,
	},

	// promptOuter: {
	// 	bottom: 50,
	// 	padding: 10,
	// 	position: "absolute",
	// 	width: "100%",
	// 	marginLeft: "2.5%",
	// 	backgroundColor: "white",
	// 	zIndex: 20,
	// 	borderRadius: 5,
	// 	shadowColor: "#000",
	// 	shadowOffset: {
	// 		width: 0,
	// 		height: 0,
	// 	},
	// 	shadowOpacity: 0.08,
	// 	shadowRadius: 4.22,
	// 	elevation: 3,
	// },
	promptOuter: {
		backgroundColor: "white",
		position: "absolute",
		// flexDirection: "row",
		bottom: 20,
		width: "100%",
		// bottom: "10%",
		padding: 10,
		zIndex: 30,
		borderRadius: 5,
		elevation:10,
	},

	bold: {
		fontWeight: "600",
		color: Colors.MapToDark.success,
	},
	image: { height: "100%", width: "100%" },
});

export default styles;
