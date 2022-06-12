import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
	isLoading: boolean;
}

export function FormSubmitButton({ isLoading, ...rest }: Props) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			{isLoading ? (
				<ActivityIndicator color={theme.colors.brand} />
			) : (
				<Text style={styles.title}>Send feedback</Text>
			)}
		</TouchableOpacity>
	);
}
