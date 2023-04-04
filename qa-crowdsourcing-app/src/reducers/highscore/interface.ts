import { User } from "../../declerations";

export interface State {
	highscores: User[];
	isLoading: boolean;
}
