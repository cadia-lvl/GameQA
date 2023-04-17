import React, { useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Atoms } from "../../..";
import { useDispatch, useSelector } from "react-redux";
import * as Interface from "./interface";
import styles from "./styles";
import { Answer, User, Question } from "../../../../declerations";
import Api from "../../../../api";
import { useEffect } from "react";
import { Colors } from "../../../../services";
import moment from "moment";
import "moment/locale/is";
import { useNavigation } from "@react-navigation/native";
import { StoreState } from "../../../../reducers";
import * as Actions from "../../../../actions";

const QuestionAnswerCard = (question: Interface.IProps) => {
	const {
		text,
		answers: rawAnswers,
		archived,
		isImpossible,
		_id,
	} = question;
	const [answers, setAnswers] = useState<Answer[]>([]);

	const navigation = useNavigation();
	const dispatch = useDispatch();

	moment.locale("is");

	const DEFAULT_SENDER: User = {
		username: "",
		email: "",
		type: "loading",
		_id: "",
		scoreCard: {
			questions: 0,
			answers: 0,
			answerVerifications: 0,
			questionVerifications: 0,
			articles: 0,
			hiscoreRank: -2,
			invites: 0,
		},
		level: 1,
		hasCompletedTutorial: false,
		streak: 1,
		resetCount: 0,
	};

	useEffect(() => {
		async function fetchAnswers() {
			try {
				const answers = await Promise.all(
					rawAnswers
						.filter((answer) => !!answer.verifiedAt)
						.map((answer) =>
							Api.get<Answer>(
								`/api/v1/answers/${answer._id}`
							)
						)
				);
				setAnswers(answers.map((answer) => answer.data));
			} catch (error) {
				//
			}
		}
		fetchAnswers();
	}, []);

	const RenderErrorMessage = (props: Interface.ErrorProps) => (
		<View
			style={{
				...styles.errorMessageOuter,
				backgroundColor: Colors.MapToDark[props.type],
			}}
		>
			<Atoms.Text.Para
				style={{
					color: Colors.MapToLight[props.type],
				}}
			>
				{props.label}
			</Atoms.Text.Para>
		</View>
	);

	const RenderAnswerAtText = (props: Answer) => {
		let text = "";
		const user = props.createdBy?.username ?? "user";

		if (props.type === "unknown") return null;
		if (props.verifiedAt === undefined) text = user;
		else
			text = `${user} answered ${moment(props.verifiedAt).fromNow()}`;
		return (
			<Atoms.Text.Para style={styles.answeredAtLabel}>
				{text}
			</Atoms.Text.Para>
		);
	};

	const RenderAnswer = (answer: Answer) => {
		switch (answer.type) {
			case "text-span":
				return (
					<View>
						<Atoms.Cards.ChatBubble
							sender={answer.createdBy ?? DEFAULT_SENDER}
							message={answer.textSpan}
						/>
						<RenderAnswerAtText {...answer} />
					</View>
				);
			case "yes-no":
				return (
					<View>
						<Atoms.Cards.ChatBubble
							sender={answer.createdBy ?? DEFAULT_SENDER}
							message={answer.answerIs ? "Yes" : "No "}
						/>
						<RenderAnswerAtText {...answer} />
					</View>
				);
			default:
				return (
					<RenderErrorMessage
						{...{ type: "highlight", label: "Something went wrong 😔" }}
					/>
				);
		}
	};

	const setImpossibleQuestion = () => {
		dispatch(Actions.GoogleSearch.setImpossibleQuestion(question));
		navigation.navigate("Google");
	};

	const RenderButton = () => (
		<TouchableOpacity onPress={() => setImpossibleQuestion()}>
			<Atoms.Cards.ChatBubble
				message={
					"❌ User was not able to find the answer \n\n 🔎 Think you can find it? Tap here!"
				}
				isInbound
			/>
		</TouchableOpacity>
	);

	return (
		<View style={styles.outer}>
			<View>
				<Atoms.Cards.ChatBubble message={text} />
				{isImpossible ? (
					<React.Fragment>
						{/* <RenderErrorMessage
							{...{
								type: "warning",
								label: "Notandi fann ekki svarið á Google",
							}}
						/> */}
						<RenderButton />
					</React.Fragment>
				) : archived ? null : answers.length === 0 ? (
					<RenderErrorMessage
						{...{
							type: "highlight",
							label: "An answer hasn't been found yet",
						}}
					/>
				) : (
					answers.map((answer) => <RenderAnswer {...answer} />)
				)}
			</View>
		</View>
	);
};

export default QuestionAnswerCard;
