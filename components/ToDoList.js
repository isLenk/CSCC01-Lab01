import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";

/*
9. Define ToDoList.js as follows:
a) Import React and necessary components (useState, View, Text, Button, StyleSheet,
uuidv4, etc.)
b) It takes an array of String as a prop to the functional component ToDoList. Each string
represents the title of a task/to-do item.
Winter 2024
c) It initializes the state for the ‘toDos’ array by mapping over the initial values and
putting it into an object containing a uniquely generated id and a title.
d) Implement an array function ‘addToDo’ with a parameter `newTitle` and use the
state setter, previous state values, and spread operator to add a new ToDo object.
e) Implement an array function ‘removeToDo’ with a parameter ‘id’ that removes the
toDo object matching the ‘id’ from the previous state values using the state setter.
● You may use the built-in JavaScript ‘filter’ method.
f) Inside the ‘return` statement, map over the ‘toDos’ state array and render each
item’s ‘title’ as Text along with a remove Button that passes in the ‘removeToDo’
function as a ‘onPress’ prop.
● The Text and Button are enclosed in the same View with id as a specified key.
● Include the AddTask component with the ‘onAddTask’ prop.
g) Set the defaultProps as an empty array.
h) The styles are provided, so you don’t have to implement them. View styles.
i) Export the ‘ToDoList’ component.
*/

const ToDoList = ({ todoData }) => {
	const [toDos, setToDos] = useState([]);

	function addToDo(newTitle) {
		setToDos([...toDos, { id: uuidv4(), title: newTitle }]);
	}

	function removeToDo(id) {
		setToDos(toDos.filter((toDo) => toDo.id != id));
	}

	useEffect(() => {
		setToDos(todoData.map((title) => ({ id: uuidv4(), title })));
	}, []);

	return (
		<View style={styles.todoListContainer}>
			{toDos.map(({ id, title }) => (
				<View key={id} style={styles.todoItem}>
					<Text>{title}</Text>
					<Button title="Remove" onPress={() => removeToDo(id)} />
				</View>
			))}
			<AddTask onAddTask={addToDo} />
		</View>
	);
};

ToDoList.defaultProps = {
	initialValues: [],
};

const styles = StyleSheet.create({
	todoListContainer: {
		margin: 10,
	},
	todoItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		marginVertical: 5,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
	},
});

export default ToDoList;
