import { StyleSheet } from "react-native";
import { Colors } from "../../../../services";

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},
	middle: {
		flex: 1,
		justifyContent: "center",
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "100%",
	},
	center: {
		alignItems: "center",
		width: 300,
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: -50,
	},
	para: {
		lineHeight: 20,
		marginBottom: 20,
		fontWeight: "300",
		color: Colors.MapToDark.grey,
	},
	title: {
		marginBottom: 5,
		color: Colors.MapToDark["dark-grey"],
		fontWeight: "400",
	},
});

export default styles;
