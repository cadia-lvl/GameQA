export enum GameTypes {
	writeQuestion,
	answerQualityAssurance,
	submitArticle,
	verifyAnswerLocation,
	questionQualityAssurance,
	verifyAnswerSpan,
	completed,
}

export interface StartWriteQuestionRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		ideaWords: string[];
		type: "make-question";
		questionType: string;
	};

	image: {
		subject_tf: string;
		url: string;
	};
}

export interface StartVerifyQuestionRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		_id: string;
		text: string;
		type: "verify-question";
		isYesOrNo?: boolean;
	};
}

export interface StartGoogleSearchRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		_id: string;
		text: string;
		type: "find-article";
	};
}
export interface StartSelectSpanRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		type: "locate-span";
		key: string;
		identifier: string;
		paragraphIndex: number;
		questionId: string;
	};
}
export interface StartVerifySpanRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		_id: string;
		text: string;
		type: "verify-span";
		paragraph: string;
		firstWord: number;
		lastWord: number;
	};
}
export interface StartCompletedViewRoundFromAPI {
	_id: string;
	currentRound: number;
	totalRounds: number;
	taskInfo: {
		type: "completed";
	};
}

export type TaskFromBackend =
	| StartVerifyQuestionRoundFromAPI
	| StartWriteQuestionRoundFromAPI
	| StartGoogleSearchRoundFromAPI
	| StartSelectSpanRoundFromAPI
	| StartVerifySpanRoundFromAPI
	| StartCompletedViewRoundFromAPI;

export interface ArticlePreview {
	source: Source;
	snippet: string;
	_id: string;
	title: string;
	key: string;
	articleKey: string;
}

interface Source {
	logo: string;
	name: string;
	hostname: string;
	identifier: string;
}

export interface Article {
	key: string;
	snippet: string;
	source: Source;
	title: string;
	url: string;
	paragraphs: string[];
}

export interface LoadingGame {}
