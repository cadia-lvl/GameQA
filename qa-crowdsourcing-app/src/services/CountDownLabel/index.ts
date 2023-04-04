import { CountDownLabelType } from "../../declerations";

type CDLabelMap = { [key in CountDownLabelType]: string };

export const MapToIcelandic: CDLabelMap = {
	Days: "Dagar",
	Hours: "Klst",
	Minutes: "Mín",
	Seconds: "Sek",
};
