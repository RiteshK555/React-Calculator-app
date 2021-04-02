// import logo from './logo.svg';
import './App.css';
import MainHeading from './components/heading.jsx'
import InputBox from './components/InputBox.jsx'
import Numbers from './components/Numbers.jsx'
import Symbols from './components/symbols/Symbols.jsx'
import Clear from './components/clear.jsx'
import { useState } from 'react';
// import { useState } from 'react';
// import Click from "./components/click"
function App() {
  // const [sum,setSum]=useState(0);
  // const [count, setCount] = useState(0);
  // function Increase() {
  //   setCount(count + 1);
  // }
  // function Decrease() {
  //   setCount(count - 1);
  // }
  var [expression,setExpression]=useState(0);
  var [stringExpression,setStringExpression]=useState("");
  return (
    <div className="calculator">
     <MainHeading />
    <InputBox value={(stringExpression)} />
    <div className="table">
    <table>
      <tr>
      <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('7'));
        }} style={{height:'40px', width:'200px'}} >7</button></td>
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('8'));
        }} style={{height:'40px', width:'200px'}} >8</button></td>
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('9'));
        }} style={{height:'40px', width:'200px'}} >9</button></td>
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('/'));
        }} style={{height:'40px', width:'200px'}} >/</button></td>
      </tr>
      <tr>
        {/* <td><Numbers number="4"/></td>
        <td><Numbers number="5"/></td>
        <td><Numbers number="6"/></td>
        <td><Symbols number="x"/></td> */}
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('4'));
        }} style={{height:'40px', width:'200px'}} >4</button></td>
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('5'));
        }} style={{height:'40px', width:'200px'}} >5</button></td>
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('6'));
        }} style={{height:'40px', width:'200px'}} >6</button></td>
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('*'));
        }} style={{height:'40px', width:'200px'}} >x</button></td>
      </tr>
      <tr>
        {/* <td><Numbers number="1"/></td>
        <td><Numbers number="2"/></td>
        <td><Numbers number="3"/></td>
        <td><Symbols number="-"/></td> */}
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('1'));
        }} style={{height:'40px', width:'200px'}} >1</button></td>
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('2'));
        }} style={{height:'40px', width:'200px'}} >2</button></td>
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('3'));
        }} style={{height:'40px', width:'200px'}} >3</button></td>
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('-'));
        }} style={{height:'40px', width:'200px'}} >-</button></td>
      </tr>
      <tr>
        {/* <td><Numbers number="0"/></td>
        <td><Symbols number="."/></td>
        <td><Symbols number="="/></td>
        <td><Symbols number="+"/></td> */}
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('0'));
        }} style={{height:'40px', width:'200px'}} >0</button></td>
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('.'));
        }} style={{height:'40px', width:'200px'}} >.</button></td>
        <td><button onClick={()=>{
          setStringExpression("");
        }} style={{height:'40px', width:'200px'}} >clear</button></td>
        <td><button onClick={()=>{
          setStringExpression(stringExpression.concat('+'));
        }} style={{height:'40px', width:'200px'}} >+</button></td>
      </tr>
    </table>
    <div className="clear">
    {/* <Clear number="clear" /> */}
    {/* <button onClick={()=>{
          setStringExpression("");
        }} style={{height:'40px', width:'200px'}} >clear</button> */}
    <button onClick={()=>{
           setStringExpression(String(eval(stringExpression)));
        }} style={{height:'40px', width:'200px'}} >=</button>
    <button onClick={()=>{
           setStringExpression(stringExpression.slice(0,-1));
        }} style={{height:'40px', width:'200px'}} > delete </button>
    </div>
    </div>
    </div>
    
  );
}

export default App 
// export {App.expression};