import { TouchableOpacityProps } from "react-native";
import { ColorType } from "../../../../declerations";

export interface IProps extends TouchableOpacityProps {
	label: string;
	type: ColorType;
	inactive?: boolean;
}
