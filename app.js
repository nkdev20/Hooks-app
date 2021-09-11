import React, { useState } from 'react';
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import './style.css';

const App = (props) => {
    const [example, setExample] = useState('useStateExample');

    return (
        <>
            <button onClick = {() => {setExample('useStateExample')}}>useState Example</button>
            <button onClick = {() => {setExample('useEffectExample')}}>useEffect Example</button>
            <div className="container">
                {example === 'useStateExample' ?  (<UseStateExample/>) : (<UseEffectExample/>)}
            </div>
            
        </>
    );

}



export default App;