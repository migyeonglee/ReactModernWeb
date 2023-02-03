import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// js만 사용하는 FE 개발 (물리DOM)
let pPhysicalDOM = document.createElement('p')
pPhysicalDOM.innerText = 'hello physical DOM world'
document.body.appendChild(pPhysicalDOM)

//가상 DOM

const pVirtuaDOM = React.createElement('p', null, 'hello virtual DOM world')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(pVirtuaDOM)
