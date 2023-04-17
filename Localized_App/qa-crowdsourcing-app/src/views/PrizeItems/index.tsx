import React, { useMemo } from "react";
import { IProps } from "./interface";
import * as Services from "../../services";
import LayoutWrapper from "../../layout";
import { Atoms } from "../../components";
import { ScrollView } from "react-native-gesture-handler";
import { Utils } from "../";

const PrizeItems = ({
	route: { params },
	navigation: { goBack },
}: IProps) => {
	return (
		<ScrollView>
			<LayoutWrapper>
				<Utils.NavigateBack goBackHandler={goBack} />
				{params?.prizes
					.sort((value) => (value.available ? -1 : 1))
					.map((prize) => (
						<Atoms.Cards.PrizeItem {...prize} />
					))}
			</LayoutWrapper>
		</ScrollView>
	);
};

export default PrizeItems;
