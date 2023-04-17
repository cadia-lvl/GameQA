import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Routing from "./routing";
import { Organisms } from "./components";
import * as Actions from "./actions";
import { StoreState } from "./reducers";
import * as Views from "./views";
import { StatusBar } from "react-native";
console.disableYellowBox = true;

export default function App() {
	const dispatch = useDispatch();
	const auth = useSelector((state: StoreState) => state.auth);
	const pushNotifications = useSelector(
		(state: StoreState) => state.pushNotification
	);

	// fetch user from cookie
	React.useEffect(() => {
		dispatch(Actions.Auth.fetchUserFromToken());
		const isAuth = !["loading", "guest"].includes(auth.type);
		if (isAuth) {
			dispatch(Actions.Game.fetchCurrentGameRound());
		}
		if (isAuth && !pushNotifications.hasPermission) {
			// ask for permission
		}
	}, [auth._id]);

	// fetch chart data on load
	React.useEffect(() => {
		dispatch(Actions.ChartData.fetchAnswersPerDay());
		StatusBar.setHidden(true);
	}, []);

	const shouldUserRestart = React.useMemo(() => {
		const RESTART_AT_LEVEL = 20;
		return auth.level >= RESTART_AT_LEVEL;
	}, [auth.level]);

	if (auth.type === "not-verified") return <Views.AuthCode />;
	if (shouldUserRestart) return <Views.RestartLevelView />;
	return (
		<React.Fragment>
			<Routing.AuthStackNavigator />
			<Routing.TabNavigator />
			<Organisms.Overlay />
		</React.Fragment>
	);
}
