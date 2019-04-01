import React from 'react';
//import handleClick from '../App'


export const Header = (props) => (
    <header>
        <div>
            <h2>React People</h2>
        </div>
        <div>
            <button onClick={props.handler}>List/Grid</button>
            <button onClick={props.init}>Refresh</button>
        </div>

    </header>
)
