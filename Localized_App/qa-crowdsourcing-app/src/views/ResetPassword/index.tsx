import React, { useState, useCallback } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Atoms } from "../../components";
import * as Actions from "../../actions";
import LayoutWrapper from "../../layout";

import styles from "./styles";
import { StoreState } from "../../reducers";

const ResetPassword = () => {
	const state = useSelector((state: StoreState) => state.resetPassword);

	const dispatch = useDispatch();

	const navigation = useNavigation<any>();

	const text = {
		title: "Reset Password",
		switchButton: "I already have an Account",
		btnColor: "highlight",
	};

	const handleSubmit = useCallback(() => {
		dispatch(
			Actions.ResetPassword.getResetPasswordCode(state.email ?? "")
		);
		navigation.navigate("reset-password-authcode");
	}, [state.email]);

	return (
		<ScrollView>
			<LayoutWrapper>
				<View>
					<Atoms.Text.Heading>
					Forgot your password?
					</Atoms.Text.Heading>
					<Atoms.Text.Para>
					Enter your email to receive a new password
					</Atoms.Text.Para>

					<Atoms.Inputs.Text
						value={state.email ?? ""}
						placeholder="me@example.com"
						onChange={(value) =>
							dispatch(
								Actions.ResetPassword.setResetPasswordEmail(
									value
								)
							)
						}
						props={{
							keyboardType: "email-address",
						}}
					/>
					<Atoms.Buttons.Base
						type={"highlight"}
						label={state.isLoading ? "Loading..." : text.title}
						onPress={handleSubmit}
					/>
				</View>
				<View style={styles.outer}>
					<TouchableOpacity
						onPress={() => navigation.navigate("log-in")}
					>
						<Atoms.Text.Para>
							{text.switchButton}
						</Atoms.Text.Para>
					</TouchableOpacity>
				</View>
			</LayoutWrapper>
		</ScrollView>
	);
};

export default ResetPassword;
