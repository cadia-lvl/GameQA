import { InputElementTypes, FormRecipe } from "../../declerations";

export const ResetPassword: FormRecipe = {
	email: {
		type: InputElementTypes.text,
		value: "",
		label:"Email",
		placeholder: "me@example.com"
	},

}