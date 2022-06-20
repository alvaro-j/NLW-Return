import React from "react";
import { View, TextInput, Image, Text, TouchableOpacity, Keyboard } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from "react-native-view-shot";

import { styles } from "./styles";
import { theme } from "../../theme";
import { FeedbackType } from "../Widget";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { ScreenshotButton } from "../ScreenshotButton";
import { FormSubmitButton } from "../FormSubmitButton";

interface Props {
	feedbackType: FeedbackType;
	onFeedbackCanceled: () => void;
	onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {
	const [screenshot, setScreenshot] = React.useState<string | null>(null);
	const handleScreenshot = () => {
		captureScreen({
			format: "jpg",
			quality: 0.8,
		}).then(
			(uri) => setScreenshot(uri),
			(error) => console.error("Oops, snapshot failed", error)
		);
	};
	const handleRemoveScreenshot = () => {
		setScreenshot(null);
	};
	const feedbackTypeInfo = feedbackTypes[feedbackType];
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={onFeedbackCanceled}>
					<ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary} />
				</TouchableOpacity>
				<View style={styles.titleContainer}>
					<Image source={feedbackTypeInfo.image} style={styles.image} />
					<Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
				</View>
			</View>
			<TextInput
				multiline
				style={styles.input}
				placeholder="Tell us what's happening..."
				placeholderTextColor={theme.colors.text_secondary}
				onSubmitEditing={Keyboard.dismiss}
				spellCheck={false}
			/>
			<View style={styles.footer}>
				<ScreenshotButton
					onTakeShot={handleScreenshot}
					onRemoveShot={handleRemoveScreenshot}
					screenshot={screenshot}
				/>
				<FormSubmitButton isLoading={false} />
			</View>
		</View>
	);
}
