import { Prize } from "../../declerations";

export interface IProps {
	route: {
		params: {
			prizes: Prize[];
		};
	};
	navigation: {
		goBack: () => void;
	};
}
