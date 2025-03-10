// // With JSX 
// const element = <h1>Hello, React!</h1>;

const { Component } = require("react")

// // Without JSX 
// const myElement = React.createElement('h1', {}, 'Hello, React!');

// Javascript Expressions 

// const userName = "Kartik";
// const element = <h1>Hello, {userName}!</h1>;

// const myElement = <input type="text" />;

// Use attribute className instead of class in JSX

// const myButton = <h1 className="myclass">Hello World</h1>;

// Fragment

// const myfragment = (
//     <>
//       <p>I am a paragraph.</p>
//       <p>I am a paragraph too.</p>
//     </>
//   );

// Props 

// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }
// <Welcome name="Kartik" />

// State management

// import { useState } from "react";
// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// Event Handling 

// function Button() {
//   function handleClick() {
//     alert("Button clicked!");
//   }
//   return <button onClick={handleClick}>Click Me</button>;
// }

// passing arguments

// function Football() {
//   const shoot = (a) => {
//     alert(a);
//   }

//   return (
//     <button onClick={() => shoot("Goal!")}>Take the shot!</button>
//   );
// }

// UseEffect Syntax 

// import { useEffect } from "react";
// function MyComponent() {
//   useEffect(() => {
//     console.log("Component Mounted!");
//   }, []); // Empty dependency array means it runs only once
// }

// Conditional rendering

// using &&

// function Message({ isLoggedIn }) {
//   return <p>{isLoggedIn && "Welcome Back!"}</p>;
// }

// using ternary operator

// function Greeting({ isLoggedIn }) {
//   return <p>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</p>;
// }

// using if 

// function Greeting({ isLoggedIn }) {
//   if (isLoggedIn) {
//     return <p>Welcome Back!</p>;
//   } else {
//     return <p>Please Log In</p>;
//   }
// }

// List rendering 

// function NameList() {
//   const names = ["Alice", "Bob", "Charlie"];
//   return (
//     <ul>
//       {names.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//   );
// }

// Controlled Component in React

// import { useState } from "react";

// function FormExample() {
//   const [name, setName] = useState(""); // State for input

//   function handleSubmit(event) {
//     event.preventDefault(); // Prevent page refresh
//     alert(`Submitted Name: ${name}`); // Display input value
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name} // Controlled by React state
//         onChange={(e) => setName(e.target.value)} // Updates state
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// react router dom 

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// link for navigation 

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

