import React from "react";
import { View, Text } from "react-native";
import { Atoms } from "../../..";
import { User } from "../../../../declerations";
import styles from "./styles";

const UserScoreCard = ({ scoreCard: data }: User) => {
	const calculateRatio = (count: number) =>
		(2 * Math.atan(0.25 * (count ?? 0))) / Math.PI;

	return (
		<View>
			{/* 
			
			Questions progress
			
			*/}
			<View style={styles.labelLine}>
				<Atoms.Text.Para>Questions</Atoms.Text.Para>
				<Atoms.Text.Para>{data.questions}</Atoms.Text.Para>
			</View>
			<Atoms.Charts.ProgressBar
				ratio={calculateRatio(data.questions)}
				label=""
				color="warning"
			/>
			{/* 
			
			Answers progress 
			
			*/}
			<View style={styles.labelLine}>
				<Atoms.Text.Para>Answers</Atoms.Text.Para>
				<Atoms.Text.Para>{data.answers}</Atoms.Text.Para>
			</View>
			<Atoms.Charts.ProgressBar
				ratio={calculateRatio(data.answers)}
				label=""
				color="danger"
			/>
			{/* 
			
			Invites progress
			
			*/}
			<View style={styles.labelLine}>
				<Atoms.Text.Para>Invited Friends</Atoms.Text.Para>
				<Atoms.Text.Para>{data.invites}</Atoms.Text.Para>
			</View>
			<Atoms.Charts.ProgressBar
				ratio={calculateRatio(data.invites)}
				label=""
				color="highlight"
			/>

			{/* Articles found progress  */}

			<View style={styles.labelLine}>
				<Atoms.Text.Para>These websites might contain the answer</Atoms.Text.Para>
				<Atoms.Text.Para>{data.articles}</Atoms.Text.Para>
			</View>
			<Atoms.Charts.ProgressBar
				ratio={calculateRatio(data.articles)}
				label=""
				color="highlight"
			/>

			{/* question qa progress */}
			<View style={styles.labelLine}>
				<Text>Reviewed Questions</Text>
				<Text>{data.questionVerifications}</Text>
			</View>
			<Atoms.Charts.ProgressBar
				ratio={calculateRatio(data.questionVerifications)}
				label=""
				color="success"
			/>

			{/* Answer review progress */}
			<View style={styles.labelLine}>
				<Text>Reviewed answers</Text>
				<Text>{data.answerVerifications}</Text>
			</View>
			<Atoms.Charts.ProgressBar
				ratio={calculateRatio(data.answerVerifications)}
				label=""
				color="danger"
			/>
		</View>
	);
};

/**	{/* 
			
			question qa progress 
			
			<View style={styles.labelLine}>
				<Text>Yfirfarnar spurningar</Text>
				<Text>{data.questionVerifications}</Text>
			</View>
			<Atoms.Charts.ProgressBar
				ratio={calculateRatio(data.questionVerifications)}
				label=""
				color="success"
			/>
			
			Answer review progress 
			
			<View style={styles.labelLine}>
				<Text>Yfirfarin svör</Text>
				<Text>{data.answerVerifications}</Text>
			</View>
			<Atoms.Charts.ProgressBar
				ratio={calculateRatio(data.answerVerifications)}
				label=""
				color="danger"
			/>
			{/* 
			
			Articles found progress 
			
			<View style={styles.labelLine}>
				<Text>Vefsíður með svörum</Text>
				<Text>{data.articles}</Text>
			</View>
			<Atoms.Charts.ProgressBar
				ratio={calculateRatio(data.articles)}
				label=""
				color="highlight"
			/> */

export default UserScoreCard;
