import { SelectionStates } from "./interface";

export const userInstructions = [
	["Smelltu á fyrsta stafinn sem myndar svarið"],
	["Smelltu á síðasta stafinn sem myndar svarið"],
	[
		"Smelltu á textann til þess að velja aftur",
		"Smelltu á „Staðfesta“ til þess að staðfesta orða val",
	],
];

export const mapSelectionStatesToNum = (stage: SelectionStates) => {
	if (stage === "select-first") return 0;
	else if (stage === "select-last") return 1;
	return 2;
};
