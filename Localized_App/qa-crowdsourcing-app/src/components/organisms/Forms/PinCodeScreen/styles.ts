import { StyleSheet } from "react-native";
import { Colors } from "../../../../services";

const styles = StyleSheet.create({
	outer: {
		alignItems: "center",
		justifyContent: "space-between",
		flex: 1,
		backgroundColor: Colors.MapToDark.highlight,
		position: "relative",
	},
	greyText: {
		color: Colors.MapToDark["light-grey"],
	},
	refreshLine: { flexDirection: "row", paddingBottom: 10 },
	refreshIcon: {
		marginRight: 10,
	},
	digits: {
		fontSize: 20,
	},
	cellStyle: {
		borderBottomWidth: 1,
		height: 42,
		width: 42,
		borderColor: Colors.MapToDark["light-grey"],
	},
	cellStyleFocused: {
		borderBottomWidth: 2,
	},
	topBox: {
		position: "absolute",
		width: "100%",
		top: 0,
		left: 0,
		justifyContent: "center",
		alignItems: "center",
		height: "30%",
	},
	middle: {
		alignItems: "center",
		paddingBottom: 50,
	},
	title: {
		color: Colors.MapToDark["light-grey"],
		fontWeight: "600",
		fontSize: 24,
	},
	para: {
		lineHeight: 20,
		fontSize: 14,
		color: Colors.MapToDark["light-grey"],
		textAlign: "center",
	},
	loadingView: {
		height: "100%",
		width: "100%",
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
	},
	touchable: {
		padding: 10,
	},
});

export default styles;
