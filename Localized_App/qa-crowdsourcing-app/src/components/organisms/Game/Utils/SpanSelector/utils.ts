import { SelectionStates } from "./interface";

export const userInstructions = [
	["Tap the first character of the answer snippet"],
	["Tap the last character of the answer snippet"],
	[
		"Tap the text to choose again",
		"Please confirm your selected span",
	],
];

export const mapSelectionStatesToNum = (stage: SelectionStates) => {
	if (stage === "select-first") return 0;
	else if (stage === "select-last") return 1;
	return 2;
};
