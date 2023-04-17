import { CountDownLabelType } from "../../declerations";

type CDLabelMap = { [key in CountDownLabelType]: string };

export const MapToIcelandic: CDLabelMap = {
	Days: "Days",
	Hours: "Hrs",
	Minutes: "Min",
	Seconds: "Sec",
};
