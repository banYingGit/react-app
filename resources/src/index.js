import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MyRoute from './routes/MyRoute'
ReactDOM.render(
    <div>
            <MyRoute/>

    </div>,
    document.getElementById('root'));

registerServiceWorker();
