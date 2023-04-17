import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Atoms, Molecules, Organisms } from "../../components";
import LayoutWrapper from "../../layout";
import { StoreState } from "../../reducers";

/**
 * This view is not a part of the game under the PLAY tab,
 * rather this view uses the Games.GoogleSearch in order
 * to allow the user to search for answers for his own
 * questions that have been marked as impossible
 * @returns JSX Element
 *
 */
const GoogleSearchView = () => {
	const auth = useSelector((state: StoreState) => state.auth);
	const game = useSelector((state: StoreState) => state.game);

	const navigation = useNavigation();

	const startTime = React.useRef(new Date().getTime());

	useEffect(() => {
		if (game.lastLoaded > startTime.current) navigation.goBack();
	}, [startTime, game.lastLoaded]);
	return (
		<LayoutWrapper>
			<Molecules.Users.Info {...auth} />
			{game.isLoading ? (
				<Atoms.Loaders.CenterBox
					isLoading={game.isLoading}
					onCancel={
						game.axiosCancelTokenSource
							? () => game.axiosCancelTokenSource?.cancel()
							: undefined
					}
				/>
			) : (
				<Organisms.Game.GoogleSearch />
			)}
		</LayoutWrapper>
	);
};

export default GoogleSearchView;
