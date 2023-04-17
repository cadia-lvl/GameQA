import { User } from "../../../../declerations";

export interface IProps {
	sender?: User;
	message: string;
	isInbound?: boolean;
}
