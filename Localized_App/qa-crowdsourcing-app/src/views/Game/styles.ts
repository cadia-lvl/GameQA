import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	outer: {
		flex: 1,
		position: "relative",
	},
	loading: {
		position: "absolute",
		height: "100%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(255,255,255,0.15)",
	},
	para: {
		paddingBottom: 10,
	},
});

export default styles;
