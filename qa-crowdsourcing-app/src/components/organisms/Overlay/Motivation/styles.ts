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
		backgroundColor: "white",
	},
	centered: {
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	description: {
		textAlign: "center",
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
	descriptionOuter: {
		padding: 10,
		borderRadius: 5,
		backgroundColor: "white",
		position: "absolute",
		zIndex: 30,
		bottom: 50,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.08,
		shadowRadius: 4.22,
		elevation: 3,
	},
	centerIcons: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	inviteIcon: {
		fontSize: 40,
	},
	inviteText: {
		width: 200,
		textAlign: "center",
		marginTop: 20,
	},
	background: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},

	closeToPrizeText: {
		width: 200,
		textAlign: "center",
		marginTop: 20,
	},
	chest: {
		aspectRatio: 1,
		width: "70%",
	},
});

export default styles;
