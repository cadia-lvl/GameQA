import { ArticlePreview } from "../../declerations";
import { Prizes } from "../../services";

export interface IProps {
	route: {
		params: ArticlePreview;
	};
	navigation: {
		goBack: () => void;
	};
}
