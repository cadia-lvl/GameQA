export enum OverlayType {
	newPrize,
	confetti,
	levelProgress,
	announceGame,
	askAboutImage,
	advertisePrize,
	motivation,
}

export interface OverlayItem {
	type: OverlayType;
	handlesHide?: boolean;
}
