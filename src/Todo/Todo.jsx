import React, { useState } from 'react';

const Todo = () => {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = () => {
        if (input.trim() !== '') {
            const newTodos = [...todo, input];
            setTodo(newTodos);
            setInput('');
        }
    };

    const handleDelete = (index) => {
        const newTodos = [...todo];
        newTodos.splice(index, 1);
        setTodo(newTodos);
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Add your todo" value={input} onChange={handleChange} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleClick}>Add</button>
                <div className="mt-4">
                    <ul>
                        {todo.map((todos, index) => (
                            <li key={index} className="flex justify-between items-center border-b-2 border-gray-200 py-2">
                                {todos}
                                <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => handleDelete(index)}>X</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;
