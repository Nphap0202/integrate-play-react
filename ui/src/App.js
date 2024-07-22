import './App.css';
import Axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [todo, setTodo] = useState("");
    const fetchTodoData = () => {
        Axios.get("http://localhost:9000/todo/1").then((res) => {
            setTodo(res.data.description);
        });
    };
    useEffect(() => {
        fetchTodoData();
    }, []);

// fetch("http://localhost:9000/todo/1").then((res)=>res.json()).then((data)=>{
//     console.log(data)
// });
    // const User = () => {
    //     return (
    //         <div>
    //             <h1>Phap</h1>
    //             <h12>39</h12>
    //             <h3>np@gmail.com</h3>
    //         </div>
    //
    //     );
    // }
    return (
        <div className="App">
            <p>{todo}</p>
            {/*<User/>*/}
        </div>
    );
}

export default App;
