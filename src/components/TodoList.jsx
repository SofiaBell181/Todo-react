import TodoItem from './TodoItem';
import { selectTodo } from '../store/TodoSlice';
import {useSelector} from 'react-redux';

export default function TodoList() {

    const todos = useSelector(selectTodo);
  
    return(
        <>
            <ul className='todo-list'>
            {todos.map(todo => <TodoItem {...todo} key={todo.id}/> )}
               
            </ul>
        </>
    )
}