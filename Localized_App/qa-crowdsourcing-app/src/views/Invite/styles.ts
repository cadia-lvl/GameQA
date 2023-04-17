import { StyleSheet } from "react-native";
import { Colors } from "../../services";

const styles = StyleSheet.create({
	linkOuter: {
		width: "100%",
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 15,
		flexDirection: "row",
		marginTop: 10,
		alignItems: "center",
	},
	shareOuter: {
		padding: 13,
		backgroundColor: Colors.MapToDark.highlight,

		marginBottom: 15,
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	shareText: {
		color: Colors.MapToDark["light-grey"],
		marginLeft: 10,
	},
	copyIcon: {
		backgroundColor: Colors.MapToDark.highlight,
		paddingTop: 13,
		paddingBottom: 13,
		width: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	link: {
		marginLeft: 10,
	},
	paragraph: {
		marginBottom: 10,
		marginTop: 10,
	},
	padTitleTop: {
		paddingTop: 40,
	},
});

export default styles;
