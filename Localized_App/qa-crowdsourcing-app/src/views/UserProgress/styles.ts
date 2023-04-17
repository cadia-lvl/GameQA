import { StyleSheet } from "react-native";
import { AuthCode } from "../../actions";
import * as Services from "../../services";

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
	},
	padTitleTop: {
		paddingTop: 40,
	},
	spaceBetween: {
		justifyContent: "space-between",
	},
	lock: {
		top: 0,
		position: "absolute",
		right: 0,
		padding: 15,
	},
	unSeenAnswerContainer: {
		flex: 3,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
		height: "100%",
		width: "100%",
	},
	unSeenAnswerline: {
		borderBottomWidth: 1,
		borderColor: "#dadada",
		width: "33%",
		height: "33%",
	},
	unSeenTextContainer: {
		width: "33%",
		height: "33%",
	},
	unSeenText: {
		textAlign: "center",
		paddingHorizontal: 10,
		paddingBottom: 20,

		width: "100%",
		height: "100%",
		borderWidth: 1,
		borderRadius: 10,
		borderColor: "#dadada",
		overflow: "hidden",
		// backgroundColor: "red",
	},
	scrollContainer: {
		alignItems: "center",
		marginBottom: 20,
		flexDirection: "row",
		width: "100%",
	},
	selectViewButton: {
		height: 80,
		width: "25%",
		borderRadius: 7,
		backgroundColor: Services.Colors.MapToLight.highlight,
		marginRight: 20,
		justifyContent: "center",
		padding: 10,
	},
	selectViewButtonSelected: {
		height: 80,
		width: "25%",
		borderRadius: 7,
		backgroundColor: Services.Colors.MapToLight.highlight,
		marginRight: 20,
		justifyContent: "center",
		padding: 10,
		borderWidth: 3,
		borderColor: Services.Colors.MapToDark.highlight,
	},
	buttonLabel: {
		fontSize: 14,
		fontWeight: "500",
		marginTop: 5,
		color: Services.Colors.MapToDark.highlight,
		margin: 0,
		textAlign: "center",
	},
	answerCount: {
		fontSize: 28,
		fontWeight: "500",
		color: Services.Colors.MapToDark.highlight,
		margin: 0,
		textAlign: "center",
	},
	topLeftCorner: {
		position: "absolute",
		left: 5,
		top: 5,
	},
	bottomLeftCorner: {
		position: "absolute",
		left: 5,
		bottom: 5,
	},
	bottomRightCorner: {
		position: "absolute",
		right: 5,
		top: 5,
	},
	topRightCorner: {
		position: "absolute",
		right: 5,
		bottom: 5,
	},
});

export default styles;
