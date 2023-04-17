import { QuestionWithAnswers } from "../../declerations";

export interface ButtonItem {
	text: string;
	emoji: string;
	screenId: Screens;
}

export type Screens = "answer" | "in-progress" | "no-answers";

export const BUTTONS: ButtonItem[] = [
	{
		text: "Answers",
		emoji: "💡",
		screenId: "answer",
	},
	{
		text: "In Progress",
		emoji: "⌛",
		screenId: "in-progress",
	},
	{
		text: "No Answer?",
		emoji: "🙅‍♀️",
		screenId: "no-answers",
	},
];

export const FILTER_HAS_ANSWER = (question: QuestionWithAnswers) =>
	question.answers.length;

export const FILTER_HAS_NO_ANSWER = (question: QuestionWithAnswers) =>
	question.archived || question.archived;

export const FILTER_IS_IN_PROGRESS = (question: QuestionWithAnswers) =>
	question.answers.length === 0 && !question.archived;
