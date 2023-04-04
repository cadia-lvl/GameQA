import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as Interface from "./interface";

const DelayRender = ({ children, delayMS }: Interface.Props) => {
	const [shouldShow, setShouldShow] = useState(false);

	useEffect(() => {
		const DEFAULT_TIMEOUT = 0;
		const t = setTimeout(() => {
			setShouldShow(true);
		}, delayMS ?? DEFAULT_TIMEOUT);
		return () => {
			clearTimeout(t);
		};
	}, []);

	return shouldShow ? <React.Fragment>{children}</React.Fragment> : null;
};

export default DelayRender;
