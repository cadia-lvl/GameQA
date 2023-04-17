import { InputElementTypes, FormRecipe } from "../../declerations";

export const Authenticate: FormRecipe = {
	email: {
		type: InputElementTypes.text,
		value: "",
		placeholder: "me@example.com",
		label: "Email",
	},
	password: {
		type: InputElementTypes.hidden,
		value: "",
		label: "Password",
		placeholder: "My password",
	},
};
