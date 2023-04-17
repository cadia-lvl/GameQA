import { ColorType, User } from "../../../../declerations";

export interface IProps extends User {
	color?: ColorType;
	size?: number;
}
