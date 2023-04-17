import * as React from "react";
import {
	NavigationContainer,
	NavigationContainerRef,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import * as routes from "./routes";
import * as icons from "./icons";
import { Tabs } from "./declerations";
import * as Services from "../services";
import { useSelector } from "react-redux";
import { StoreState } from "../reducers";
import * as Hooks from "../hooks";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const PrizeStack = createStackNavigator();
const GameStack = createStackNavigator();

const PrizeStackNavigator = () => (
	<PrizeStack.Navigator
		screenOptions={{
			headerShown: false,
		}}
	>
		{routes.prizeStack.map((route) => (
			<PrizeStack.Screen
				name={route.id}
				component={route.Component}
				key={route.id}
			/>
		))}
	</PrizeStack.Navigator>
);

export const GameStackNavigator = () => (
	<GameStack.Navigator
		screenOptions={{
			headerShown: false,
		}}
	>
		{routes.gameStack.map((route) => (
			<GameStack.Screen
				name={route.id}
				component={route.Component}
				key={route.id}
			/>
		))}
	</GameStack.Navigator>
);

export const ProfileStackNavigator = () => (
	<GameStack.Navigator
		screenOptions={{
			headerShown: false,
		}}
	>
		{routes.profileStack.map((route) => (
			<GameStack.Screen
				name={route.id}
				component={route.Component}
				key={route.id}
			/>
		))}
	</GameStack.Navigator>
);


export const TabNavigator = () => {
	const navigatorRef = React.useRef<NavigationContainerRef>(null);

	const activeColor = Services.Colors.MapToDark["highlight"];
	const inActiveColor = Services.Colors.MapToDark["grey"];

	const auth = useSelector((state: StoreState) => state.auth);
	const myQuestions = useSelector(
		(state: StoreState) => state.myQuestions
	);
	// Hook to check if user interacts with notification
	Hooks.Notifications.useResponseListener((response) => {
		// Read data sent in notification
		const data = response.notification.request.content.data;
		const route = data.route;

		if (route && typeof route === "string") {
			try {
				navigatorRef.current?.navigate(route);
			} catch {
				//
			}
		}
	});
	if (auth.type === "guest") return null;

	const mapRouteIdToTabBarBadge = (routeName: Tabs) => {
		switch (routeName) {
			case "Profile":
				const answers =
					Services.FilterMyQuestions.questionsWithAnswers(
						myQuestions.questions
					);

				const unSeenAnswers =
					Services.FilterMyQuestions.questionsUnseen(answers);
				if (unSeenAnswers.length) return unSeenAnswers.length;
			default:
				return;
		}
	};

	return (
		<NavigationContainer ref={navigatorRef}>
			<Tab.Navigator
				screenOptions={({ route, navigation }) => ({
					tabBarIcon: ({ focused }) => (
						<TouchableOpacity
							onPress={() => navigation.navigate(route.name)}
						>
							<FontAwesome
								size={17}
								name={
									icons.mapTabToIcon[route.name as Tabs]
								}
								color={
									focused ? activeColor : inActiveColor
								}
							/>
						</TouchableOpacity>
					),
				})}
				tabBarOptions={{
					activeTintColor: activeColor,
					inactiveTintColor: inActiveColor,
				}}
			>
				<Tab.Screen name="Profile" 
					component={ProfileStackNavigator} />
				
				{routes.tab.map((route) => (
					<Tab.Screen
						name={route.id}
						component={route.Component}
						options={{
							tabBarBadge: mapRouteIdToTabBarBadge(route.id),
						}}
						key={route.id}
					/>
				))}
				{/* <Tab.Screen
					name="Prizes"
					component={PrizeStackNavigator}
				/> */}
				<Tab.Screen name="Play" component={GameStackNavigator} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export const AuthStackNavigator = () => {
	const auth = useSelector((state: StoreState) => state.auth);
	if (auth.type !== "guest") return null;
	return (
		<NavigationContainer>
			<AuthStack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				{routes.authStack.map((route) => (
					<AuthStack.Screen
						name={route.id}
						component={route.Component}
					/>
				))}
			</AuthStack.Navigator>
		</NavigationContainer>
	);
};
