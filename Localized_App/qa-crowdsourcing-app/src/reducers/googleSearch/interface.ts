import { ArticlePreview } from "../../declerations";

export interface State {
	articles: ArticlePreview[];
	query: string;
	searchError: boolean;
	noResults: boolean;
	isLoading: boolean;
	text: string; // text that forms thte question
	_id: string;
}
