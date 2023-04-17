import React from "react";

export type Tabs =
	| "Profile"
	| "Play"
	| "Prizes"
	| "Hiscores"
	| "Community";

export type PrizeStackItems = "prize-cats" | "prize-items";
export type AuthStackItems =
	| "log-in"
	| "sign-up"
	| "reset-password"
	| "reset-password-authcode"
	| "set-new-password";

export type GameStackItems = "Play" | "article-reader" | "prize-items";
export type ProfileStackItems = "Profile" | "Google" | "article-reader"

export type Icons =
	| "puzzle-piece"
	| "tachometer"
	| "sort-amount-asc"
	| "trophy"
	| "users";

type Component = (() => JSX.Element) | ((v: any) => JSX.Element);


export interface TabRoutes {
	Component: Component;
	id: Tabs;
}
export interface AuthStackRoutes {
	Component: Component;
	id: AuthStackItems;
}
export interface GameStackRoutes {
	Component: Component;
	id: GameStackItems;
}
export interface PrizeStackRoutes {
	Component: Component;
	id: PrizeStackItems;
}
export interface ProfileStackRoutes {
	Component: Component;
	id: ProfileStackItems;
}

