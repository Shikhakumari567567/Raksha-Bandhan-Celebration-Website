// import React from 'react'
// import "./App.css"

// function App() {
//   const name = "Shikha Kumari";
//   const age = 18;
//   const image = "https://i.pinimg.com/564x/02/11/c8/0211c8d1671140d0b5a867210326f415.jpg"
//   const role = "Software Engineer"

//   return(
//     <div className="profile-card">
//       <img
//        src={image}
//        alt="profile"
//        width="200"
//        />
//        <h1>{name}</h1>
//        <p>Age: {age}</p>
//        <p>Role: {role}</p>
//     </div>
//   )
// }
// export default App;



// function App() {
//   const name = "Shikha Kumari"
//   const age = "19"
//   const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5IIQ6riEgKpx7En2Lm-dxOktLEY0bTIq8_QUeppAffbFhkBjQmAeWEoRo&s=10"
//   const role = "Software engineer"
  

//   return (
//     <div className="profile-card">
      
//       <img src={image} alt="profile" width="200"/>
//       <h1>{name}</h1>
//       <p>Age: {age}</p>
//       <p>Role: {role}</p>
      
//     </div>
//   )
// }

// export default App;



// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       task: "Learn React",
//       completed: false,
//     },
//     {
//       id: 2,
//       task: "Learn JavaScript",
//       completed: true,
//     },
//   ]);

//   const [input, setInput] = useState("");
//   const [showCompleted, setShowCompleted] = useState(false);

//   // Add Todo
//   const addTodo = () => {
//     if (input.trim() === "") return;

//     const newTodo = {
//       id: Date.now(),
//       task: input,
//       completed: false,
//     };

//     setTodos([...todos, newTodo]);
//     setInput("");
//   };

//   // Delete Todo
//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   // Toggle Complete/Pending
//   const toggleStatus = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       )
//     );
//   };

//   // Filter Todos
//   const filteredTodos = showCompleted
//     ? todos.filter((todo) => todo.completed)
//     : todos;

//   // Counts
//   const completedCount = todos.filter(
//     (todo) => todo.completed
//   ).length;

//   const pendingCount = todos.length - completedCount;

//   return (
//     <div className="container">
//       <h1>Todo Application</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           placeholder="Enter your task..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />

//         <button onClick={addTodo}>
//           Add Todo
//         </button>
//       </div>

//       <button
//         className="filter-btn"
//         onClick={() =>
//           setShowCompleted(!showCompleted)
//         }
//       >
//         {showCompleted
//           ? "Show All Tasks"
//           : "Show Completed Tasks"}
//       </button>

//       {filteredTodos.length === 0 ? (
//         <h3>No tasks available</h3>
//       ) : (
//         filteredTodos.map((todo) => (
//           <div className="todo" key={todo.id}>
//             <span>
//               {todo.completed ? "☑" : "☐"}{" "}
//               {todo.task}
//             </span>

//             <button
//               onClick={() =>
//                 toggleStatus(todo.id)
//               }
//             >
//               {todo.completed
//                 ? "Pending"
//                 : "Complete"}
//             </button>

//             <button
//               className="delete"
//               onClick={() =>
//                 deleteTodo(todo.id)
//               }
//             >
//               Delete
//             </button>
//           </div>
//         ))
//       )}

//       <hr />

//       <h3>Total Tasks : {todos.length}</h3>
//       <h3>Completed : {completedCount}</h3>
//       <h3>Pending : {pendingCount}</h3>
//     </div>
//   );
// }

// export default App;







// 🎀 Project: Raksha Bandhan Celebration Website
import React from "react";
import Navbar from "./Components/Navbar";
import RakhiForm from "./Components/RakhiForm";
import Hero from "./Components/Hero";
import Wishes from "./Components/Wishes";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RakhiForm />
      <Wishes />
      <Footer />
    </>
  );
}

export default App;