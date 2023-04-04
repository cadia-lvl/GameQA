import React from "react";
import * as Cards from "../";
import { User } from "../../../../declerations";
import { Molecules } from "../../../";

const UserCard = (props: User) => {
	return (
		<Cards.Base>
			<Molecules.Users.Info {...props} />
		</Cards.Base>
	);
};

export default UserCard;
