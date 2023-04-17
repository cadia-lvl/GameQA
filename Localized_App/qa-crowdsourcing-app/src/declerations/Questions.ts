import { RawAnswer } from "./Answer";

export interface Question {
	_id: string;
	text: string;
	isYesOrNo: boolean;
	archived: boolean;
	isImpossible: boolean;
}

export interface QuestionWithAnswers extends Question {
	answers: RawAnswer[];
}
