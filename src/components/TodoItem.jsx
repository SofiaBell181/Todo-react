import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/TodoSlice';

export default function TodoItem({id, text,completed, onHandledelete}) {
    const dispatch = useDispatch();

    const onHandlerdelete = () => {
        dispatch(deleteTodo({id}))
    }

    const onToggleTodo = () => {
        dispatch(toggleTodo({id}))
    }

    return(
        <>
            <li className='todo-item' key={id}>
                <input checked={completed} onChange={() => onToggleTodo({id})} className='i-checkbox' type="checkbox"/>
                <span className='todo-text'>{text}</span>
                <button className='btn-del' onClick={() => onHandlerdelete({id})}></button>   
            </li>
        </>
    )
}