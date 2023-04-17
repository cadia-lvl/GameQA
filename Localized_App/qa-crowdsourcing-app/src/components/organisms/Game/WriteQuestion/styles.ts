import { StyleSheet } from "react-native";
import { Colors } from "../../../../services";

const styles = StyleSheet.create({
	marginTop: {
		marginTop: 10,
	},
	flex: {
		flex: 1,
	},
	alignEnd: {
		alignItems: "center",
		justifyContent: "flex-end",

		marginTop: 10,
	},
	imagePreview: {
		height: 120,
		borderRadius: 5,
		marginBottom: 10,
	},
	previewImage: {
		height: "100%",
		width: "100%",
		borderRadius: 5,
	},
	previewBanner: {
		position: "absolute",
		width: "100%",
		padding: 10,
		backgroundColor: "rgba(255,255,255,0.85)",
		top: 0,
		left: 0,
		zIndex: 10,
	},
	buttonsContainer: {
		position: "absolute",
		bottom: 0,
		right: 0,
		zIndex: 10,
		flexDirection: "row-reverse",
	},
	button: {
		height: 40,
		width: 40,
		borderRadius: 20,
		backgroundColor: Colors.MapToDark.highlight,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 5,
		marginBottom: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 0.12,
		shadowRadius: 2.22,
		elevation: 3,
	},
	submitButton: {
		justifyContent: "flex-end",
		alignItems: "center",
		flexDirection: "column",
		marginTop: 10,
	},
});

export default styles;
