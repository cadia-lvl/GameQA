import React from "react";
import { Alert } from "../../../../declerations";

export interface IProps {
	onGoBack: () => void;
	onRequestNew: () => void;
	onSubmit: (value: string) => void;
	codeLength: Number;
	title?: string;
	description?: string;
	goBackText?: string;
	isLoading?: boolean;
	error?: Alert;
}
