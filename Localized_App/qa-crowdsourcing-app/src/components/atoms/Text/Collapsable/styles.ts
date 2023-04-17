import { StyleSheet } from "react-native";
import * as Services from "../../../../services";
import { Colors } from "../../../../services";


const styles = StyleSheet.create({
	text: {
		color: "#555",
	},
    collapseBtn: {
        color: Colors.MapToDark["grey"],
        textAlign: "center",
    },
    collapseBtnBorder: {
        marginTop: 5,
        paddingBottom: 15,
    }
});

export default styles;