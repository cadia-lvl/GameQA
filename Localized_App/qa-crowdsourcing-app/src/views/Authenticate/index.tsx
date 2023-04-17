import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/auth";
import { Atoms, Organisms } from "../../components";
import { User } from "../../declerations";
import LayoutWrapper from "../../layout";
import * as forms from "./forms";
import styles from "./styles";
import * as Services from "../../services";
import { ICON_LVL_1, ICON_LVL_5 } from "../../static";

const Authenticate = () => {
	const [isLoading, setIsLoading] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		const LOADING_TIMEOUT = 500;
		setIsLoading(true);
		const t = setTimeout(() => {
			setIsLoading(false);
		}, LOADING_TIMEOUT);
		return () => {
			clearTimeout(t);
		};
	}, []);

	const navigation = useNavigation<any>();

	const text = {
		title: "Welcome back!",
		switchButton: "Create an account",
	};

	const handleAuth = (user: User) => {
		dispatch(registerUser(user));
		// Analytics.logEvent("login");
	};

	return isLoading ? (
		<View style={styles.loadingWrap}>
			<Atoms.Loaders.CenterBox isLoading />
		</View>
	) : (
		<LayoutWrapper>
			<View style={styles.form}>
				<Organisms.Forms.Builder<User>
					buttonLabel="Log In"
					form={forms.Authenticate}
					url="/api/auth/authenticate"
					HTTPmethod="post"
					onSubmit={handleAuth}
					buttonColor="highlight"
				>
				<View style={styles.changeForm}>
					<TouchableOpacity onPress={() => navigation.navigate("reset-password")}>
						<Atoms.Text.Para>Forgot your password?</Atoms.Text.Para>
					</TouchableOpacity>
				</View>
					<View style={{ flex: 1 }}>
						<View style={styles.imageWrapper}>
							<View style={styles.leftIconView}>
								<Image
									style={styles.leftIcon}
									source={ICON_LVL_1}
								/>
							</View>

							<View style={styles.rightIconView}>
								<Image
									style={styles.rightIcon}
									source={ICON_LVL_5}
								/>
							</View>
						</View>
					</View>
				</Organisms.Forms.Builder>
			</View>
			<View style={styles.changeForm}>
				<TouchableOpacity
					onPress={() => navigation.navigate("sign-up")}
				>
					<Atoms.Text.Para>{text.switchButton}</Atoms.Text.Para>
				</TouchableOpacity>
			</View>
		</LayoutWrapper>
	);
};

export default Authenticate;
