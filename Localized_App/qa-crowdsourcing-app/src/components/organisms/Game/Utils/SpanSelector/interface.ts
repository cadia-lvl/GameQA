export interface IProps {
	firstWord?: number;
	lastWord?: number;
	immutable?: boolean;
	paragraph: string;
	onSelectLastWord: (lastWord: number) => void;
	onSelectFirstWord: (firstWord: number) => void;
	onClearSelection: () => void;
}

export type SelectionStates =
	| "select-first"
	| "select-last"
	| "clear-selection";
