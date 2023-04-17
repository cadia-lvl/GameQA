import * as Linking from "expo-linking";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../reducers";

interface T {
	[key: string]: any;
}

const useDeepLinking = (path: string) => {
	const [queries, setQueries] = useState<T | undefined>(undefined);
	const deepLinks = useSelector((state: StoreState) => state.deepLinks);

	useEffect(() => {
		if (path == deepLinks.path) setQueries(deepLinks.query);
		else setQueries(undefined);
	}, [deepLinks.path]);

	return [queries];
};

export default useDeepLinking;
