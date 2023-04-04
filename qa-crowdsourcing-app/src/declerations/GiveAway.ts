import { Prize } from "./Prizes";

export interface GiveAway {
	items: Prize[];
	time: number;
	isLoading?: boolean;
}
