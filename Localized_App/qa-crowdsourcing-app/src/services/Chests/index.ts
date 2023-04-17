// import { PrizeTypes, PrizeCategory} from "../../../../declerations";
import * as Colors from "../Colors";
import * as Statics from "../../static";

const PARTICIPATION_PRIZE = "Participation Prize!";
const GANG_PRIZE = "Newbie";
const THE_CHOSEN_ONES_PRIZE = "Regular";
const ELITE_PRIZE = "Pro";
const WHITE_RAVENS_PRIZE = "Legend";

export const mapToPrize = (type?: string) => {
	switch (type) {
		case PARTICIPATION_PRIZE:
			return Statics.ChestsImages.participationChestOpen;
		case GANG_PRIZE:
			return Statics.ChestsImages.gangChestOpen;
		case THE_CHOSEN_ONES_PRIZE:
			return Statics.ChestsImages.theChosenOnesChestOpen;
		case ELITE_PRIZE:
			return Statics.ChestsImages.eliteOpenChest;
		case WHITE_RAVENS_PRIZE:
			return Statics.ChestsImages.ravensOpenChest;
		default:
			return;
	}
};

export const mapToNoPrize = (type?: string) => {
	switch (type) {
		case PARTICIPATION_PRIZE:
			return Statics.ChestsImages.participationChest;
		case GANG_PRIZE:
			return Statics.ChestsImages.gangChest;
		case THE_CHOSEN_ONES_PRIZE:
			return Statics.ChestsImages.theChosenOnesChest;
		case ELITE_PRIZE:
			return Statics.ChestsImages.eliteClosedChest;
		case WHITE_RAVENS_PRIZE:
			return Statics.ChestsImages.ravensClosedChest;
		default:
			return;
	}
};

export const mapIdtoName = (type?: string) => {
	switch (type) {
		case "1":
			return PARTICIPATION_PRIZE;
		case "2":
			return GANG_PRIZE;
		case "3":
			return THE_CHOSEN_ONES_PRIZE;
		case "4":
			return ELITE_PRIZE;
		case "5":
			return WHITE_RAVENS_PRIZE;
		default:
			return;
	}
};

export const mapToColor = (type?: String) => {
	switch (type) {
		case PARTICIPATION_PRIZE:
			//green chest
			//mapToDark.highlight fer vel með fjólubláukistunni
			return Colors.MapToDark.green;
		case GANG_PRIZE:
			//blue chest
			return Colors.MapToDark.success;
		case THE_CHOSEN_ONES_PRIZE:
			//purple chest
			return Colors.MapToDark.highlight;
		case ELITE_PRIZE:
			return Colors.MapToDark.warning;;
		case WHITE_RAVENS_PRIZE:
			return Colors.MapToDark.warning;;
		default:
			return;
	}
};

export const mapIdToNoPrize = (id: string) =>
	mapToNoPrize(mapIdtoName(id));

export const mapIdToColor = (id: string) => mapToColor(mapIdToNoPrize(id));
