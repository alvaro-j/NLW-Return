import React from "react";
import { View } from "react-native";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Copyright } from "../Copyright";
import { Option } from "../Option";

import { styles } from "./styles";

export function Options() {
	return (
		<View style={styles.container}>
			<View style={styles.options}>
				{Object.entries(feedbackTypes).map(
					(
						[key, value] // destructuring the array first
					) => (
						<Option key={key} image={value.image} title={value.title} />
					)
				)}
			</View>
			<Copyright />
		</View>
	);
}
