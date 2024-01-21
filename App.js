import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ToDoList from "./components/ToDoList";

export default function App() {
	return (
		<View style={styles.container}>
			<ToDoList todoData={["Eat pant", "Drink bread", "Water cats"]} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
