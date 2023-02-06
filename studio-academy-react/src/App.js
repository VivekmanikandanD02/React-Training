import React, { createContext, lazy, Suspense, useEffect, useReducer, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import MoviesList from './components/MoviesList';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import StopWatch from './components/Stopwatch';
import Modal from './components/Modal';
import Container from './components/Container';
import useCounter from './hooks/useCounter';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Teams from './pages/Teams';
import Layout from './Layout/Layout';
import Team from './pages/Team';
import TeamsLayout from './Layout/TeamsLayout';
/* import Dashboard from './pages/Dashboard'; */
// To lazily load the component on demand after clicking the link 
const Dashboard = lazy(()=>import("./pages/Dashboard"));

const App = ()=> {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

const initialState = {count: 0};

function reducer(state, action){
  switch(action.type){
    case 'inc':
      return {count:state.count + 1}
    case 'dec':
      return  {count:state.count - 1}
    case 'reset':
      return  {count: 0}
    default:
      throw new Error();   
  }
}
  
const [movies, setMovies] = useState(dummyMovies);

const [todoList, setTodoList] = useState([{text:"Learn React"}]);

const [state, dispatch] = useReducer(reducer, initialState);

// useRef is like useState but the major difference is component will not be rerendered when value changes
// the values will be initialized like countRef.current in useRef. When the value gets changed the component will not be re rendered like useState
const countRef = useRef(0);

const [countState, setCountState] = useState(0);

//useRef in DOM elements
// to access native DOM elements like div below
const divRef = useRef();
console.log(divRef.current);
const inputRef = useRef();

//using useEffect hook to focus the input box with inputRef
useEffect(()=>{
  inputRef.current.focus();
},[]);


//used widely while making api calls and when setting third state out of other two existing states
//will be executed everytime when any state change if dependency not specified and will execute only if a particular state changed when dependency specified and if dependency is empty it will be executed only once in the application, we can also specify multiple dependencies using comma
useEffect(()=>{
console.log("useEffect")
//for cleaning up things after component gets unmounted
return ()=> {
  console.log("cleanup")
}
},[state.count])

const fetchMovies =() =>{
  console.log("fetchmovies")
  fetch('https://swapi.dev/api/films').then(response=>{
    return response.json();
  }).then(response=>{
    setMovies(response.results);
  })
}  

const handleAddToDo = (todoText) => {
  console.log("form submitted");
  const newTodo = {text: todoText};
  setTodoList([...todoList,newTodo]);
  /* or */
  // setTodoList((prevTodos)=>{
  //   const newTodo = {text: todoText};
  //   const newTodoList = [...prevTodos,newTodo];
  //   return newTodoList;
  // });
}

const handleCountRef = () =>{
countRef.current++;
console.log(`countRef.current ${countRef.current}`)
}

const handleCountState = () =>{
  const updatedCount = countState + 1;
  setCountState(updatedCount);
  console.log(`countState ${countState}`)
  //setCountState((prevCount)=>prevCount+1);
}

const modalEle = document.getElementById("modal");

const [stateModal, setStateModal] = useState(false);
const openModal = ()=> {
  setStateModal(true);
}

const closeModal = ()=> {
  setStateModal(false);
}

/* For createContext */
 const [darkMode, setDarkMode] = useState(false);
 const toggleDarkMode = () => {
  setDarkMode(!darkMode);
 }

 /* Custom Hooks */
 /* To reuse same code in multiple places we use custom hooks, Also used in api calls while handling headers and methods */
 /* The below code has been used in useCounter.jsx custom hook */
 const ForwardCounter = () => {
  const counter = useCounter();
  /* const [counter,setCounter] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCounter((prevCounter)=>prevCounter+1);
    },1000)
    return ()=> clearInterval(interval);
  },[]); */

  return (
    <div>
    {counter}
    </div>
  )
}

 const BackwardCounter = () => {
  const counter = useCounter(false);
 /*  const [counter,setCounter] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCounter((prevCounter)=>prevCounter-1);
    },1000)
    return ()=> clearInterval(interval);
  },[]); */

  return (
    <div>
    {counter}
    </div>
  )
 }

  return (
    <>
      {/* using api call to retrieve data */}
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
      
      {/* Passing data between components */}
      <div>
        <span>Todo App</span>
       <AddTodo addTodo={handleAddToDo} />
       <TodoList todoList={todoList} />
      </div>
      {/* useReducer hook */}
      <div style={{width:"100%", display: "flex", gap: "10px" }}>
          Count: {state.count}
          <button onClick={()=>dispatch({type:'inc'})}>Increment</button>
          <button onClick={()=>dispatch({type:'dec'})}>Decrement</button>
          <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      </div>
       {/* useEffect hook implemented above. pls check*/}
       {/* Understanding Refs, Portals and React Context */}
       <br></br>
       {/* useRef */}
       <div>countRef Count: {countRef.current}</div>
       <button onClick={handleCountRef}>Click me - Ref Increment</button>
       <br></br>
       <div>countState Count: {countState}</div>
       <button onClick={handleCountState}>Click me - State Increment</button>
       <br></br>
       <div ref={divRef}>I'm an element</div>
       <input ref={inputRef} type="text"/>
       <br></br>
       {/* Stopwatch example for useRef hook */} 
       <StopWatch/>
       <br></br>
       {/* createPortal - used for rendering DOM elements in particular id or area instead of displaying it directly inside the react root element which supports web accessibility greatly */}
       {/* To check below code see <div id="modal"> in DOM after running the app */}
       <button onClick={openModal}>Open Modal</button>
      {stateModal && createPortal(<Modal close={closeModal} />,modalEle)}
      <br></br>
      {/*  createContext - to avoid prop drilling in react we use context, instead of passing multiple props to several childrens from root component we can use single context in all the childrens. useContext - this will be used along with createContext to use the created context anywhere in the children component. 
      We need to pass the values to context using the value property inside the Provider*/}
      {/* Created context above export statement */}
      <DarkModeContext.Provider value ={{darkMode, toggleDarkMode}}>
        <Container/>
      </DarkModeContext.Provider>

      {/* Custom Hooks */}
      <br></br>
      <div>
      <ForwardCounter></ForwardCounter>
      <BackwardCounter></BackwardCounter>
      </div>

      {/* React routing using npm package react-router-dom */}
      {/* Need to wrap these routes in  BrowserRouter in index.js to enable routing*/}
      {/* Intead of writing below jsx for enabling routing, we can also use useRouting hook */}
      <br></br>
      <div className="App">
      {/* if we use lazy loading for any component, we need to use Suspense and provide a fallback like below
      to display a loading indicator like below */}
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          {/* To use a different layout within a parent layout we can do like below */}
          <Route element={<TeamsLayout/>}>
          <Route path="/teams" element={<Teams/>}>
            <Route path=":teamId" element={<Team/>}></Route>
          </Route>
          </Route>
           {/* 404 Not found routes */}
          <Route path="*" element={<h1>PageNotFound</h1>}></Route>
        </Route>
      </Routes>
      </Suspense>
      </div>
    </>
  );
}

/* createContext */
const DarkModeContext = createContext();

export {App, DarkModeContext};
