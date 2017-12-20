import React from 'react';
import ReactDOM from 'react-dom';
import MyRoute from './router';

import './css/index.css';
import 'antd-mobile/dist/antd-mobile.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><MyRoute/></div>, document.getElementById('root'));
registerServiceWorker();
