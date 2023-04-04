import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	topLine: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
	},
	logo: {
		height: 20,
		width: 20,
		marginRight: 5,
	},
	para: {
		marginBottom: 10,
	},
	textParagraph: {
		flex: 1,
		marginTop: 10,
		textAlign: "justify",
		paddingRight: 10,
	},
	paragraphOuter: {
		flexDirection: "row",
	},
	enumeration: {
		fontWeight: "100",
		marginRight: 10,
		marginTop: 10,
		color: "#b2b2b2",
		width: 10,
	},
});

export default styles;
