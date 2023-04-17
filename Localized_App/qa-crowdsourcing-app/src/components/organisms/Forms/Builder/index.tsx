import React, { useState } from "react";
import { View } from "react-native";
import { IProps } from "./interface";
import { Atoms } from "../../..";
import { LOAD_TIMER_MS } from "./utils";
import Api from "../../../../api";
import styles from "./styles";
import { Alert } from "../../../../declerations";

const FormBuilder = <T extends {}, K = {}>({
	form,
	onSubmit,
	buttonLabel,
	url,
	HTTPmethod,
	buttonColor,
	children,
}: IProps<T, K>) => {
	const [formObject, setFormObject] = useState(form);
	const [errorMessage, setErrorMessage] = useState<Alert | undefined>(
		undefined
	);
	const [isLoading, setIsLoading] = useState(false);

	// handle typing in input factory element
	const onChange = (accessor: keyof K, newValue: any) => {
		const element = formObject[accessor];
		element.value = newValue;
		const updatedForm = { ...formObject };
		updatedForm[accessor] = element;
		setFormObject(updatedForm);
	};

	// handles submitting
	const handleSubmit = async () => {
		if (isLoading) return;
		setIsLoading(true);
		const formValues: { [key in keyof K]: any } = { ...form };
		for (const key in formValues)
			formValues[key] = formObject[key].value;
		try {
			const res = await Api[HTTPmethod]<T>(url, formValues);
			setErrorMessage(undefined);
			onSubmit(res.data);
			setFormObject({ ...form });
		} catch (error) {
			setErrorMessage({
				type: "danger",
				label: error.response?.data.message ?? "Unknown error",
			});
		} finally {
			setTimeout(() => setIsLoading(false), LOAD_TIMER_MS);
		}
	};

	return (
		<React.Fragment>
			<Atoms.Alerts.Ribbon item={errorMessage} />
			<View style={styles.outer}>
				<View>
					{Object.keys(formObject).map((key: any) => (
						<Atoms.Inputs.Factory
							key={key}
							inputField={{
								...form[key as keyof K],
							}}
							onChange={(value) => onChange(key, value)}
						/>
					))}
				</View>
				{children ?? null}
				<Atoms.Buttons.Base
					type={buttonColor ?? "highlight"}
					label={isLoading ? "Loading..." : buttonLabel}
					onPress={handleSubmit}
				/>
			</View>
		</React.Fragment>
	);
};
export default FormBuilder;
