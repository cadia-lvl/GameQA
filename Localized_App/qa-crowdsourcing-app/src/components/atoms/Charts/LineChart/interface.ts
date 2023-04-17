export interface IProps {
	datasets: DataSet[];
	labels: string[];
	height: number;
}

interface DataSet {
	data: number[];
}
