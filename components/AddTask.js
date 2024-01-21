import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

/*
0. Define AddTask.js as follows:
a) Import React and necessary components.
b) Declare the functional component ‘AddTask’ that takes in the ‘onAddTask’ prop, a
function to handle adding a new task/to-do item.
c) Use the ‘useState’ hook to manage the state of the input to-do ‘title’. It will be set to
an empty string.
d) Implement the ‘handleAddTask’ function that’s called when the ‘Add Task’ button is
called. It adds the new task ‘title’ if the trimmed input is not empty using the prop
‘onAddTask’ function. Then, set the state to empty with the state setter.
e) Return the TextInput and Button components enclosed in the same View component.
● Set TextInput value as the state variable, and pass the onChangeText callback
function that calls the state setter with the updated text.
● Button should add a new task/to-do on press with ‘handleAddTask’ as a prop.
f) Apply the provided styles to the components. View styles.
g) Export the ‘AddTask’ component
*/

const AddTask = ({ onAddTask }) => {
	const [title, setTitle] = useState("");

	function handleAddTask() {
		if (title.trim().length == 0) return alert("Title is empty.");
		onAddTask(title);
		setTitle("");
	}

	return (
		<View style={styles.addTodoForm}>
			<TextInput style={styles.input} value={title} onChangeText={setTitle} />
			<Button title="Add Task" onPress={handleAddTask} />
		</View>
	);
};

const styles = StyleSheet.create({
	addTodoForm: {
		margin: 10,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
});

export default AddTask;
