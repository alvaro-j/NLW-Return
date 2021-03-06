import React from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { Options } from "../Options";
import { Form } from "../Form";
import { Success } from "../Success";

import { styles } from "./styles";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";

export type FeedbackType = keyof typeof feedbackTypes; // this gets the types of the object

function Widget() {
	const [feedbackType, setFeedbackType] = React.useState<FeedbackType | null>(null); // save the what's the feedback type
	const [feedbackSent, setFeedbackSent] = React.useState(false); // save the what's the feedback type

	const bottomSheetRef = React.useRef<BottomSheet>(null); // refers to the bottom sheet
	const handleOpenBottomSheet = () => {
		bottomSheetRef.current?.expand();
	};

	const handleRestartFeedback = () => {
		setFeedbackType(null); // resets the feedback type
		setFeedbackSent(false); // resets the status sent of the feedback
	};

	const handleFeedbackSent = () => {
		setFeedbackSent(true);
	};

	return (
		<>
			<TouchableOpacity style={styles.button} onPress={handleOpenBottomSheet}>
				<ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} weight="bold" />
			</TouchableOpacity>
			<BottomSheet
				ref={bottomSheetRef}
				snapPoints={[1, 280]}
				backgroundStyle={styles.modal}
				handleIndicatorStyle={styles.indicator}
			>
				{feedbackSent ? (
					<Success onSendAnotherFeedback={handleRestartFeedback} />
				) : (
					<>
						{feedbackType ? (
							<Form
								feedbackType={feedbackType}
								onFeedbackCanceled={handleRestartFeedback}
								onFeedbackSent={handleFeedbackSent}
							/>
						) : (
							<Options onFeedbackTypeChanged={setFeedbackType} />
						)}
					</>
				)}
			</BottomSheet>
		</>
	);
}

export default gestureHandlerRootHOC(Widget);
