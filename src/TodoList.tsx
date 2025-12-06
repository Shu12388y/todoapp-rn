import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';
import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: 'Complete react native',
    },
  ]);
  const [title, setTitle] = useState('');
  const [isEdit, setIsEdit] = useState({
    id: 0,
    isActive: false,
  });

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        todo: title,
      },
    ]);
  };
  const deleteTodo = (id: number) => {
    const todo = todos.filter((ele, _) => ele.id !== id);
    setTodos(todo);
  };

  const editTodo = ({ id, title }: { id: number; title: string }) => {
    setIsEdit({
      id: id,
      isActive: true,
    });
  };
  return (
    <View style={style.todoBody}>
      <View style={style.todoInput}>
        <TextInput
          onChangeText={text => setTitle(text)}
          style={style.todoTextInput}
          placeholder="Add your todos"
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <ScrollView
        style={style.scrollView}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {todos.map((ele, index) => {
          return (
            <View key={index} style={style.todoview}>
              <View>
                {isEdit.isActive && isEdit.id === ele.id ? (
                  <TextInput
                    onChangeText={text => setTitle(text)}
                    defaultValue={ele.todo}
                  />
                ) : (
                  <Text style={style.todoText}>{ele.todo}</Text>
                )}
              </View>
              <View style={style.viewButtons}>
                <TouchableHighlight
                  onPress={() =>
                    editTodo({
                      id: ele.id,
                      title: title,
                    })
                  }
                  style={style.editButton}
                >
                  <Text style={style.buttonColor}>Edit</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => deleteTodo(ele.id)}
                  style={style.deleteButton}
                >
                  <Text style={style.buttonColor}>Delete</Text>
                </TouchableHighlight>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  todoBody: {
    padding: 20,
  },
  todoTextInput: {
    width: '80%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#111101ff',
  },
  todoview: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 3,
    margin: 2,
  },
  todoInput: {
    flexDirection: 'row',
    flexBasis: 'auto',
    alignItems: 'center',
    gap: 20,
  },
  scrollView: {
    marginTop: 40,
  },
  viewButtons: {
    flexBasis: 'auto',
    flexDirection: 'row',
    gap: 10,
  },
  editButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: '10%',
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: '10%',
  },
  buttonColor: {
    color: 'white',
  },
  todoText: {
    fontStyle: 'normal',
    fontSize: 20,
    textAlign: 'center',
  },
});
