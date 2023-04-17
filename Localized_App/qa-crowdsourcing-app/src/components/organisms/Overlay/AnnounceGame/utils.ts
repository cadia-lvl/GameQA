import { GameTypes } from "../../../../declerations";
import { Colors } from "../../../../services";
import * as Statics from "../../../../static";

export const mapToImage = (type?: GameTypes) => {
	switch (type) {
		case GameTypes.writeQuestion:
			return Statics.GameRounds.WriteQuestion;
		case GameTypes.questionQualityAssurance:
			return Statics.GameRounds.VerifyQuestion;
		case GameTypes.submitArticle:
			return Statics.GameRounds.GoogleSearch;
		case GameTypes.verifyAnswerLocation:
			return Statics.GameRounds.SelectSpan;
		case GameTypes.verifyAnswerSpan:
			return Statics.GameRounds.ReviewSpan;
		case GameTypes.completed:
			return Statics.GameRounds.EndOfRound;
		default:
			return Statics.GameRounds.WriteQuestion;
	}
};

export const mapToColor = (type?: GameTypes) => {
	switch (type) {
		case GameTypes.writeQuestion:
			return Colors.MapToDark.success;
		case GameTypes.questionQualityAssurance:
			return Colors.MapToDark.danger;
		case GameTypes.submitArticle:
			return Colors.MapToDark.highlight;
		case GameTypes.verifyAnswerLocation:
			return Colors.MapToDark.warning;
		case GameTypes.verifyAnswerSpan:
			return "#549cec";
		case GameTypes.completed:
			return "#b2f448";
		default:
			return Colors.MapToDark.danger;
	}
};
