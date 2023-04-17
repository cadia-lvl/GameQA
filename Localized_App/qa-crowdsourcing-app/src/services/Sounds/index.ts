import { Audio } from "expo-av";
const chest = require("./clips/chest.mp3");
const newTask = require("./clips/newTask.mp3");

type SoundNames =
	| "open-chest"
	| "danger-error"
	| "warning-error"
	| "pop"
	| "new-task"
	| "new-level"
	| "round-completed";

const mapNamesToSounds = (soundName: SoundNames) => {
	switch (soundName) {
		case "open-chest":
			return chest;
		case "new-task":
			return newTask;
		default:
			return chest;
	}
};

export const play = async (soundName: SoundNames) => {
	const { sound } = await Audio.Sound.createAsync(
		mapNamesToSounds(soundName)
	);
	const a = await sound.playAsync();
};
