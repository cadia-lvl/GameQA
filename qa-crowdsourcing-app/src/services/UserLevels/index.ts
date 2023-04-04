import {
	ICON_LVL_1,
	ICON_LVL_2,
	ICON_LVL_3,
	ICON_LVL_4,
	ICON_LVL_5,
	ICON_LVL_6,
	ICON_LVL_7,
} from "../../static";

const LEVEL_NAMES = [
	"Smábarn",
	"Byrjandi",
	"Nemandi",
	"Menntskælingur",
	"Dúx",
	"Kennari",
	"Prófessor",
];

const LEVEL_ICONS = [
	ICON_LVL_1,
	ICON_LVL_2,
	ICON_LVL_3,
	ICON_LVL_4,
	ICON_LVL_5,
	ICON_LVL_6,
	ICON_LVL_7,
];

export const mapLevelToString = (level: number) => {
	const string = LEVEL_NAMES[Math.floor(level / 3)];
	if (string === undefined) return "Galdrakall";
	return string;
};

export const mapLevelToIconURL = (level: number) => {
	const URL = LEVEL_ICONS[Math.floor(level / 3)];
	if (URL === undefined) return "https://picsum.photos/70/70";
	return URL;
};
