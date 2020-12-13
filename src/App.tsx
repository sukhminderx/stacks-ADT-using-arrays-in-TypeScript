import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Stack } from "./Stack";
import { isSetAccessorDeclaration } from "typescript";

function App() {
  /* below contains Singly Linked List ADT */
  // create the linked list
  const stack = new Stack();

  console.log('after initialize');
  stack.printStack();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);

  console.log('after push');
  stack.printStack();

  stack.pop();
  console.log('after pop');
  stack.printStack();

  console.log('return top  : '+ stack.top());
  stack.printStack();

  stack.delete();
  console.log('after delete');
  stack.printStack();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Stack ADT using arrays... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;
