import './App.css';
import Axios from "axios";
import {useEffect, useState} from "react";

function App() {
    //Module 1: Component and props
    const User =(props)=>{
        return(
            <div>
                <h1>{props.name}</h1>
                <h2>{props.age}</h2>
            </div>
        );
    }

    const Jobs = (props)=>{
        return(
          <div>
              <h1>{props.salary}</h1>
              <h2>{props.position}</h2>
              <h3>{props.company}</h3>
          </div>
        );
    }
    //Module 8 : API
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
            <Jobs salary={9} position={"Tester"} company="Tesla"/>
            {/*Module 2: Component and props*/}
            <User name="Phap" age={39} />
            {/*Module 8: API*/}
            <p>{todo}</p>
            {/*<User/>*/}
        </div>
    );
}

export default App;
