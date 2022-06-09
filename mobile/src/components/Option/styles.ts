import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
	container: {
		width: 88, // 104 normal size
		height: 96, // 112 normal size
		justifyContent: "center",
		alignItems: "center",
		padding: 8,
		borderRadius: 8,
		marginHorizontal: 8,
		backgroundColor: theme.colors.surface_secondary,
	},
	image: {
		width: 36, // 40 normal size
		height: 36, // 40 normal size
	},
	title: {
		fontSize: 14,
		marginTop: 8,
		fontFamily: theme.fonts.medium,
		color: theme.colors.text_primary,
	},
});
