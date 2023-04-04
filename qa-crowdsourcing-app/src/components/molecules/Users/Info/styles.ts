import { StyleSheet } from "react-native";

import * as Colors from "../../../../declerations";
import * as Services from "../../../../services";

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
	},
	fullWidth: {
		width: "100%",
	},
	userLevelContainer: {
		justifyContent: "flex-end",
		paddingLeft: 10,
	},
	textOuter: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 10,
		marginBottom: 5,
	},
	alignCenter: {
		alignItems: "center",
	},
	nextLevel: {
		marginLeft: 5,
	},
	outer: {
		paddingBottom: 25,
		borderBottomColor: "#e8e8e8",
		borderBottomWidth: 4,
		marginBottom: 25,
	},
	nameStyle: {
		justifyContent: "flex-start",
		paddingRight: 5,
	},
	streakStyle: {
		justifyContent: "flex-start",
		//color: Services.Colors.MapToDark.danger,
		fontWeight: "600",
	},
	nameStreakContainer: {
		flexDirection: "row",
	},
});

export default styles;
