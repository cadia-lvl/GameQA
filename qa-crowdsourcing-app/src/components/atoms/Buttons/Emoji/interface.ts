import { TouchableOpacityProps } from "react-native";
import { ColorType } from "../../../../declerations";

export interface IProps extends TouchableOpacityProps {
	emoji: string;
	type: ColorType;
	size?: number;
}
