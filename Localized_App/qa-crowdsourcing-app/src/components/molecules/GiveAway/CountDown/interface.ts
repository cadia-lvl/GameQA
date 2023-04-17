export interface IProps {
	isCounting: boolean;
	time: number;
	isLoading: boolean;
	onFinish: () => void;
	onPress: () => void;
}
