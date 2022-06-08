import React from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../theme";

function Widget() {
	const bottomSheetRef = React.useRef<BottomSheet>(null); // refers to the bottom sheet
	const handleOpenBottomSheet = () => {
		bottomSheetRef.current?.expand();
	};
	return (
		<>
			<TouchableOpacity style={styles.button} onPress={handleOpenBottomSheet}>
				<ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} weight="bold" />
			</TouchableOpacity>
			<BottomSheet ref={bottomSheetRef} snapPoints={[1, 280]}></BottomSheet>
		</>
	);
}

export default gestureHandlerRootHOC(Widget);
