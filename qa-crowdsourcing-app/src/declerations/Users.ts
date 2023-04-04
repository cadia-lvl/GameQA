export interface User {
	username: string;
	email: string;
	_id: string;
	type: UserType;
	scoreCard: ScoreCard;
	level: number;
	hasCompletedTutorial: boolean;
	referral?: string;
	invitedBy?: string;
	streak: number;
	resetCount: number;
}

export interface ScoreCard {
	questions: number;
	answers: number;
	answerVerifications: number;
	questionVerifications: number;
	articles: number;
	hiscoreRank: number;
	invites: number;
}

export type UserType =
	| "user"
	| "admin"
	| "loading"
	| "guest"
	| "not-verified";
