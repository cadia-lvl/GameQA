import { User } from "./Users";

export interface RawAnswer {
	_id: string;
	// required objectIds not relevant to article
	questionId: string;
	creationRoundId: string;
	// article info
	articleId: string;
	paragraphIndex: number;
	firstWord?: number;
	lastWord?: number;
	// objectIds needed for verification
	answerRoundId?: string;
	verificationRoundIds: string;
	// records
	verifiedAt?: Date;
	answeredAt?: Date;
	archived: boolean;
	isDisqualified: boolean;
	// flags
	canBeShortened: boolean;
	yesOrNoAnswer?: boolean;
	seenByQuestionerAt?: Date;
}

export interface AnswerWithYesNo {
	type: "yes-no";
	answerIs: boolean; // true = yes / false = no
	verifiedAt?: Date;
	_id: string;
	createdBy?: User;
}

export interface AnswerWithTextSpan {
	type: "text-span";
	textSpan: string;
	verifiedAt?: Date;
	_id: string;
	createdBy?: User;
}

export interface AnswerWithoutKnownType {
	type: "unknown";
	_id: string;
	createdBy?: User;
}

export type Answer =
	| AnswerWithYesNo
	| AnswerWithTextSpan
	| AnswerWithoutKnownType;
