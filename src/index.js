import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import HeaderComponent from './headerComponent';
import ImageComponent from './components/ImageComponent';



function App () {
    return (
    <React.Fragment>
        <HeaderComponent />
        <ImageComponent />    
    </React.Fragment>
)
}

const arrayOfObjects = [{name:"john", age : 46}, {name:"dow", age : 55}]
console.log(...arrayOfObjects)

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)

root.render(<App/>)