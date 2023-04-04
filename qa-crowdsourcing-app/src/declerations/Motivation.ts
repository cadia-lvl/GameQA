export type MotivationType =
	| "close-to-prize" //   [x]
	| "compare-to-mean" //  [ ]
	| "social-impact" //    [x]
	| "hiscore-today" //    [ ]
	| "hiscore-manuver" //  [ ]
	| "login-streak" //     [ ]
	| "invite-others"; //   [x]

export interface ICloseToPrize {
	type: "close-to-prize";
	text: string;
	prizeId: string;
}

export interface ISocialImpact {
	type: "social-impact";
	imageURL: string;
	videoURL?: string;
	description: string;
}

export interface IInviteOthers {
	type: "invite-others";
	description: string;
}

export type Motivation = ISocialImpact | IInviteOthers | ICloseToPrize;
