import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { Atoms } from "../../components";
import { useDispatch, useSelector } from "react-redux";

import * as Actions from "../../actions";
import { StoreState } from "../../reducers";
import LayoutWrapper from "../../layout";

import styles from "./styles";

const SetNewPassword = () => {
	const [pass, setPass] = useState("");
	const dispatch = useDispatch();

	const resetPass = useSelector(
		(state: StoreState) => state.resetPassword
	);

	const submitPasswordChange = useCallback(
		() =>
			dispatch(
				Actions.ResetPassword.resetPasswordWithToken(
					resetPass.email ?? "",
					pass,
					resetPass.resetToken ?? ""
				)
			),
		[pass]
	);

	const text = {
		labelOne: "Password",
		labelTwo: "Password (again)",
		placeholder: "My password",
		btnLabel: "Confirm",
	};

	return (
		<View style={styles.outer}>
			<LayoutWrapper>
				<Atoms.Alerts.Ribbon item={resetPass.errorAlert} />
				<Atoms.Text.Para>{text.labelOne}</Atoms.Text.Para>
				<Atoms.Inputs.Password
					placeholder={text.placeholder}
					value={pass}
					onChange={(value) => setPass(value)}
				/>
				<Atoms.Buttons.Base
					type={"highlight"}
					label={text.btnLabel}
					onPress={submitPasswordChange}
				/>
			</LayoutWrapper>
		</View>
	);
};

export default SetNewPassword;
