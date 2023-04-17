import { Question, QuestionWithAnswers } from "../../declerations";

export const questionsWithAnswers = (
	questionList: QuestionWithAnswers[]
) => questionList.filter((question) => question.answers.length);

export const questionsWithNoAnswers = (
	questionList: QuestionWithAnswers[]
) => questionList.filter((question) => question.isImpossible);

export const questionsInProgress = (questionList: QuestionWithAnswers[]) =>
	questionList.filter(
		(question) =>
			question.answers.length === 0 &&
			!(question.archived || question.isImpossible)
	);

export const questionsUnseen = (
	filteredQuestionList: QuestionWithAnswers[]
) => {
	const unSeenAnswers = filteredQuestionList.filter((question) =>
		question.answers.some((answer) => !answer.seenByQuestionerAt)
	);
	return unSeenAnswers;
};
