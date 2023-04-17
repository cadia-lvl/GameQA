import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Views from "./src";

export default () => {

	return (
		<Provider store={store}>
			<Views />
		</Provider>
	);
};
