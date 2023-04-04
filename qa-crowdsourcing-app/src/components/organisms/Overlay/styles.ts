import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	outer: {
		height: "100%",
		width: "100%",
		position: "absolute",
		top: 0,
		left: 0,
	},
	touchable: {
		height: "100%",
		width: "100%",
	},
	closeCard: {
		width: "95%",
		padding: 15,
		backgroundColor: "white",
		borderRadius: 5,
		position: "absolute",
		bottom: 40,
		left: 0,
		marginLeft: "2.5%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.08,
		shadowRadius: 4.22,
		elevation: 3,
	},
	closeText: {
		marginRight: 10,
	},
});

export default styles;
