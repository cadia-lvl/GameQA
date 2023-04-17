import React from "react";
import { Atoms } from "../../../..";
import { IProps } from "./interface";
import styles from "./styles";
const QuestionIs = ({ question, center }: IProps) => {
	return (
		<Atoms.Text.Heading
			style={{
				...styles.heading,
				...(center ? { textAlign: "center" } : {}),
			}}
		>
			The question is „{question}“
		</Atoms.Text.Heading>
	);
};

export default QuestionIs;
