import './App.css';
import TodoList from './components/TodoList';
import InputField from './components/InputField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/TodoSlice';
import { useEffect } from 'react';

function App() {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const onKey = (e) => {
        if(e.keyCode === 13) 
        handleSubmit()
    }
    const handleSubmit = () => {
        if(text.trim().length > 0) {
            dispatch(addTodo({text}));
            setText('');
        }
        else return false;
    }

    const [d, setD] = useState('');

    useEffect(() => {
        let data = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = data.getDate();
        let mounth = months[data.getMonth()];
        let year = data.getFullYear()
        setD(mounth + ' '+ day + ', '+year)
    },[])
  return (
    <>
        <div className='container'>
            <div className='todo-bg'>
                <h1>Your <br /> things</h1>
                <p>{d}</p>
            </div>
            
            <InputField handleSubmit={handleSubmit} onKey={onKey} text={text} setText={setText}/>
            <TodoList/>
        </div>
    </>
  );
}

export default App;
