import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'todos',
    initialState : {
        todos: []
    },

    reducers : {
        addTodo(state, action) {
            // console.log(state);
            // console.log(action.payload.text);

            state.todos.push({
                id : new Date().toISOString(),
                text : action.payload.text,
                completed : false
            });
        },

        deleteTodo(state, action) {
            state.todos = state.todos.filter(item => item.id !== action.payload.id)
        },

        toggleTodo(state, action) {
            const toggleCompleted = state.todos.find(item => item.id === action.payload.id);
            toggleCompleted.completed = !toggleCompleted.completed;

        }
    }
})

export const { addTodo, deleteTodo, toggleTodo } = TodoSlice.actions;
export const selectTodo = state => state.todos.todos;

export default TodoSlice.reducer;

