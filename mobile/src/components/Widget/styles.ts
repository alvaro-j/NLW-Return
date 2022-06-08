import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
	button: {
		width: 48, // it doesn't need to use "px"
		height: 48,
		borderRadius: 24,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme.colors.brand,
		position: "absolute",
		right: 16,
		bottom: getBottomSpace() + 16, // fix the bottom on the IOS
	},
	modal: {
		backgroundColor: theme.colors.surface_primary,
		paddingBottom: getBottomSpace() + 16,
	},
	indicator: {
		backgroundColor: theme.colors.text_primary,
		width: 56,
	},
});
