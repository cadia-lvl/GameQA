import { UserInterface } from "../../interface";
import { MapUserToMotivation } from "../decleration";
import * as utils from "../utils";

const LEVEL_FOR_PRIZE_ID_5 = 20;
const LEVEL_FOR_PRIZE_ID_4 = 15;
const LEVEL_FOR_PRIZE_ID_3 = 10;
const LEVEL_FOR_PRIZE_ID_2 = 5;

const formatLvlToPrizeString = (lvl: number) => `You are ${lvl} lvls away from unlocking this prize category`;

/**
 * array of functions that map
 * a user to  a motivation regarding
 * invites
 *
 * user is needed in the function
 * to determine the text
 *
 * we say that these motivations
 * are not available if the user has
 * already invited INVITES_FOR_PRIZE
 * many people
 */
const mappings: MapUserToMotivation[] = [
	(user) =>
		user.level >= LEVEL_FOR_PRIZE_ID_3
			? {
					type: "close-to-prize",
					text: "You have unlocked this prize category! 🎉",
					prizeId: "3",
			  }
			: user.level >= LEVEL_FOR_PRIZE_ID_2
			? {
					type: "close-to-prize",
					text: "You have unlocked this prize category! 🎉",
					prizeId: "2",
			  }
			: {
					type: "close-to-prize",
					text: "You have unlocked this prize category! 🎉",
					prizeId: "1",
			  },
	(user) =>
		user.level < LEVEL_FOR_PRIZE_ID_2
			? {
					type: "close-to-prize",
					text: formatLvlToPrizeString(LEVEL_FOR_PRIZE_ID_2 - user.level),
					prizeId: "2",
			  }
			: user.level < LEVEL_FOR_PRIZE_ID_3
			? {
					type: "close-to-prize",
					text: formatLvlToPrizeString(LEVEL_FOR_PRIZE_ID_3 - user.level),
					prizeId: "3",
			  }
			: user.invites < LEVEL_FOR_PRIZE_ID_4
			? {
					type: "close-to-prize",
					text: formatLvlToPrizeString(LEVEL_FOR_PRIZE_ID_4 - user.level),
					prizeId: "4",
			  }
			: user.invites < LEVEL_FOR_PRIZE_ID_5
			? {
					type: "close-to-prize",
					text: formatLvlToPrizeString(LEVEL_FOR_PRIZE_ID_5 - user.level),
					prizeId: "5",
			  }
			: {
					type: "close-to-prize",
					text: "You have unlocked all prize categories!",
					prizeId: "5",
			  },
];

export const getItem = () => utils.getRandom(mappings);
export const isAvailable = () => false;
