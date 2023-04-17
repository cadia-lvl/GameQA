import React, { useCallback } from "react";
import { TouchableOpacity, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../reducers";
import * as Actions from "../../actions";

import { Forms } from "../../components/organisms";

const AuthCode = () => {
	const CODE_LENGTH = 6;

	const state = useSelector((state: StoreState) => state.authCode);
	const auth = useSelector((state: StoreState) => state.auth);
	const dispatch = useDispatch();

	const handleLogOut = () => dispatch(Actions.Auth.logOutUser());

	const handleNewVerificationCode = () =>
		dispatch(Actions.AuthCode.requestNewVerificationCode());

	const handleSendVerificationCode = useCallback(
		(code: string) => dispatch(Actions.AuthCode.verifyUser(code)),
		[]
	);

	const text = {
		title: "Confirmation code",
		description: `Confirmation code has been sent to ${auth.email}`,
		goBackText: "Sign Out",
	};

	return (
		<TouchableOpacity
			activeOpacity={1}
			onPress={() => Keyboard.dismiss()}
			style={{ flex: 1 }}
		>
			<Forms.PinCodeScreen
				codeLength={CODE_LENGTH}
				onGoBack={handleLogOut}
				onRequestNew={handleNewVerificationCode}
				onSubmit={handleSendVerificationCode}
				error={{ label: state.errorMessage, type: "danger" }}
				{...text}
			/>
		</TouchableOpacity>
	);
};

export default AuthCode;
