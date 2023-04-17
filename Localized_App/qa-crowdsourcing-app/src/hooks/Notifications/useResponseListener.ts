import { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";
import {Subscription} from "expo-modules-core";

const useNotificationListener = (
	cb: (noti: Notifications.NotificationResponse) => void
) => {
	const listener = useRef<Subscription>();

	useEffect(() => {
		// This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
		listener.current = Notifications.addNotificationResponseReceivedListener(cb);
		// hook cleanup
		return () => {
			if (listener.current !== undefined)
				Notifications.removeNotificationSubscription(listener.current);
		};
	}, []);
};

export default useNotificationListener;
