import React from "react";
import { Linking, Text, View } from "react-native";

import { styles } from "./styles";

export function Copyright() {
	return (
		<View>
			<Text style={styles.text}>
				Made with ♥️ by{" "}
				<Text style={styles.link} onPress={() => Linking.openURL("https://github.com/alvaro-j")}>Álvaro J.</Text>
			</Text>
		</View>
	);
}
