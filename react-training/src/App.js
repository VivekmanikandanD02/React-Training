import React from 'react';
import './App.css';
import MyButton from './MyButton';

function App() {
  const user = {
    name: "React",
    imageUrl: ""
  }
  const isLoggedIn = false;
  const products = [
    {title:"Fruits", id: 1},
    {title:"Vegetables", id: 2},
  ];
  const count=1;
  const handleClick =()=>{
    console.log("I am clicked")
  }
  return (
    <div className="App">
      <h1>Hello {user.name}</h1>
      <img src={user.imageUrl} alt={user.name}/>
      {isLoggedIn && <p>LoggedIn</p>}
      {isLoggedIn ? <p>LoggedIn</p>:<p>Not LoggedIn</p>}
      {products.map((product)=>{
        return (
          <React.Fragment>
          <p key={product.id} onClick={()=>handleClick}>{product.title}</p>
          <br/>
          </React.Fragment>
        )
      })}
      <MyButton btn1count={count}/>
    </div>
  );
}

export default App;
