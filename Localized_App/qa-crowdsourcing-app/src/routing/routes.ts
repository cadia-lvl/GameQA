import {
	AuthStackRoutes,
	PrizeStackRoutes,
	TabRoutes,
	GameStackRoutes,
	ProfileStackRoutes,
} from "./declerations";
import * as Views from "../views";

export const tab: TabRoutes[] = [
	{
		id: "Community",
		Component: Views.Invite,
	},
	{
		id: "Hiscores",
		Component: Views.Hiscore,
	},
];

export const gameStack: GameStackRoutes[] = [
	{
		id: "Play",
		Component: Views.Game,
	},
	{
		id: "article-reader",
		Component: Views.ArticleReader,
	},
	{
		id: "prize-items",
		Component: Views.PrizeItems,
	},
];

export const prizeStack: PrizeStackRoutes[] = [
	{
		id: "prize-cats",
		Component: Views.PrizeCategories,
	},
	{
		id: "prize-items",
		Component: Views.PrizeItems,
	},
];

export const authStack: AuthStackRoutes[] = [
	{
		id: "log-in",
		Component: Views.Authenticate,
	},
	{
		id: "sign-up",
		Component: Views.Register,
	},
	{
		id: "reset-password",
		Component: Views.ResetPassword,
	},
	{
		id: "reset-password-authcode",
		Component: Views.ResetPasswordAuthCode,
	},
	{
		id: "set-new-password",
		Component: Views.SetNewPassword,
	},
];

export const profileStack: ProfileStackRoutes[] = [
	{
		id: "Profile",
		Component: Views.UserProgress,
	},
	{
		id: "Google",
		Component: Views.GoogleSearchView,
	},
	{
		id: "article-reader",
		Component: Views.ArticleReader,
	},
];
