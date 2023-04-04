import { InputElementTypes, FormRecipe } from "../../declerations";

export const Authenticate: FormRecipe = {
	email: {
		type: InputElementTypes.text,
		value: "",
		placeholder: "eg@netfang.is",
		label: "Netfang",
	},
	password: {
		type: InputElementTypes.hidden,
		value: "",
		label: "Lykilorð",
		placeholder: "Mitt lykilorð",
	},
};
