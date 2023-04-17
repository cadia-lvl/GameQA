import { InputElementTypes, FormRecipe } from "../../declerations";

export const Register: FormRecipe = {
	email: {
		type: InputElementTypes.text,
		value: "",
		placeholder: "me@example.com",
		label: "Email",
	},
	username: {
		type: InputElementTypes.text,
		value: "",
		label: "Username",
		placeholder: "Username",
	},
	password: {
		type: InputElementTypes.hidden,
		value: "",
		label: "Password",
		placeholder: "My password",
	},
	password2: {
		type: InputElementTypes.hidden,
		value: "",
		label: "Password (again)",
		placeholder: "My password",
	},
	allowEmail: {
		type: InputElementTypes.checkBox,
		value: false,
		label: "I would like to receive information about prizes and my progress via email",
	},
};
