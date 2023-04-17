export interface State {
	ideaWords: string[];
	questionType: string;
	question: string;
	image: {
		subject_tf: string;
		url: string;
	};
}
