import { CheckListItem } from "./interface";

const getQuestions = (): CheckListItem[] => [
	{
		title: "Understandable Question",
		description: "It is clear what the question is asking",
		value: false,
		badQuestionPrompt: "Is the question unclear?",
	},
	{
		title: "Answer Length",
		description:
			"I feel that this question can be answered in 2-3 sentences or less.",
		value: false,
		badQuestionPrompt: "Do you this this answer is too long?",
	},
	{
		title: "The answer doesn't change",
		description:
			"I think the answer should be the same no matter who answers the question or what day of the way it is asked",
		value: false,
		badQuestionPrompt: "Does the answer change depending on the situation?",
	},
];

export default getQuestions;
