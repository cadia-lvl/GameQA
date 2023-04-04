import { CheckListItem } from "./interface";

const getQuestions = (): CheckListItem[] => [
	{
		title: "Skiljanleg spurning",
		description: "Það er skýrt hvað höfundur spurningarinnar á við.",
		value: false,
		badQuestionPrompt: "Finnst þér spurningin vera óskiljanleg?",
	},
	{
		title: "Lengd svars",
		description:
			"Ég held að það sé hægt að svara þessari spurningu í 2-3 setningum eða styttra.",
		value: false,
		badQuestionPrompt: "Heldur þú að svarið sé svona langt?",
	},
	{
		title: "Svarið breytist ekki mikið",
		description:
			"Ég held að svarið sé svipað, sama hvern maður spyr eða hvaða dag vikunnar er spurt.",
		value: false,
		badQuestionPrompt: "Er svarið mismunandi milli aðstæða?",
	},
];

export default getQuestions;
