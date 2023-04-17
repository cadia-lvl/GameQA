import { StyleSheet } from "react-native";
import { Colors } from "../../../../services";

const styles = StyleSheet.create({
	outer: {
		marginVertical: 10,
	},
	heading: {
		textAlign: "center",
		marginBottom: 5,
	},
	digitStyle: {
		backgroundColor: Colors.MapToLight.highlight,
	},
	digitTxtStyle: {
		color: Colors.MapToDark.highlight,
	},
	giveAwayDrawText: { textAlign: "center" },
});

export default styles;
