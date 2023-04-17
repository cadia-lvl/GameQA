import { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";
import {Subscription} from "expo-modules-core";

const useNotificationListener = (cb: (noti: Notifications.Notification) => void) => {
	const listener = useRef<Subscription>();

	useEffect(() => {
		// This listener is fired whenever a notification is received while the app is foregrounded
		listener.current = Notifications.addNotificationReceivedListener(cb);
		// hook cleanup
		return () => {
			if (listener.current !== undefined)
				Notifications.removeNotificationSubscription(listener.current);
		};
	}, []);
};

export default useNotificationListener;
