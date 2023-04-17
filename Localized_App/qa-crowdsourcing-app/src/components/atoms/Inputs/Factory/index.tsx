import React from "react";
import { InputElementTypes } from "../../../../declerations";
import { IProps } from "./interface";
import * as Inputs from "../";

const InputElementFactory = (props: IProps) => {
	const { onChange, inputField } = props;

	let inputElement;

	if (inputField.hidden) return null;

	switch (inputField.type) {
		case InputElementTypes.text:
			inputElement = <Inputs.Text {...inputField} onChange={onChange} />;
			break;
		case InputElementTypes.hidden:
			inputElement = <Inputs.Password {...inputField} onChange={onChange} />;
			break;
		case InputElementTypes.checkBox:
			inputElement = <Inputs.CheckBox {...inputField} onChange={onChange} />;
			break;
		default:
			inputElement = <Inputs.Text {...inputField} onChange={onChange} />;
	}

	return (
		<Inputs.Wrapper label={inputField.label} required={inputField.required}>
			{inputElement}
		</Inputs.Wrapper>
	);
};

export default InputElementFactory;
