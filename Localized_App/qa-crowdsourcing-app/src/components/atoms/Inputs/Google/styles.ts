import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	input: {
		width: "100%",
		borderRadius: 22,
		paddingLeft: 50,
		paddingTop: 12,
		paddingBottom: 12,
		paddingRight: 20,
		borderColor: "#dfe1e5",
		borderWidth: 1,
		backgroundColor: "#fff",
	},
	svg: {
		position: "absolute",
		top: 0,
		left: 0,
		height: 20,
		width: 20,
		zIndex: 10,
		marginLeft: 16,
		marginTop: 12,
		marginRight: 0,
		marginBottom: 0,
	},
	inner: { position: "relative" },
	imageContainer: {
		width: "100%",
		height: 100,
		flexDirection: "row",
		justifyContent: "center",
	},
	image: { width: "50%", height: "100%" },
});

export default styles;
