import { StyleSheet } from "react-native";
import { Colors } from "../../../../services";

const styles = StyleSheet.create({
	outer: {
		width: "100%",
		padding: 10,
		marginTop: 10,
		marginBottom: 20,
		borderRadius: 5,
		elevation: 3,
		position: "relative",
	},
	errorMessageOuter: {
		padding: 5,
		borderRadius: 5,
		marginTop: 7,
	},
	answeredAtLabel: { fontSize: 10, textAlign: "right" },
});

export default styles;
