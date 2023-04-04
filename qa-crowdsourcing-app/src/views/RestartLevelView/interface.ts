import { ColorType } from "../../declerations";

export type IconType =
	| "trophy"
	| "sort-amount-asc"
	| "star"
	| "play-circle-o";

export interface IBullet {
	icon: IconType;
	text: string;
	color: ColorType;
}
