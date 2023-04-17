import ExpoConstants from "expo-constants";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { Platform } from "react-native";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";

const registerForPushNotificationsAsync = (cb: (token: string) => void) => {
	const ANDROID = "android";
	const GRANTED = "granted";
	const ANDROID_COLOR = "#FF231F7C";

	const auth = useSelector((state: StoreState) => state.auth);
	const pushNotification = useSelector((state: StoreState) => state.pushNotification);

	const handleGetPermission = async () => {
		if (!ExpoConstants.isDevice) throw new Error("Not a physical device");

		let permission = await Notifications.getPermissionsAsync();

		if (permission.status !== GRANTED)
			permission = await Notifications.requestPermissionsAsync();

		if (permission.status !== GRANTED)
			throw new Error("User did not grant permission for notifications");

		return (await Notifications.getExpoPushTokenAsync()).data;
	};

	useEffect(() => {
		const isAuth = !["guest", "isLoading", "not-verified"].includes(auth.type);
		if (isAuth && !pushNotification.hasPermission)
			handleGetPermission()
				.then(cb)
				.catch((e) => {
					//
				});
	}, [auth.type, pushNotification.hasPermission]);

	useEffect(() => {
		if (Platform.OS === ANDROID) {
			Notifications.setNotificationChannelAsync(ANDROID, {
				name: "default",
				importance: Notifications.AndroidImportance.DEFAULT,
				vibrationPattern: [0, 250, 250, 250],
				lightColor: ANDROID_COLOR,
			});
		}
	}, []);
};

export default registerForPushNotificationsAsync;
