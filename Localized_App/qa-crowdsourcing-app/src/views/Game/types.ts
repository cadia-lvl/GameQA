import { ScrollView } from "react-native";

export type ScrollRefType =
	| (ScrollView & {
			flashScrollIndicators: () => void;
	  })
	| null;
