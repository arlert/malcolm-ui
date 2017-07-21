import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Provider } from 'mobx-react'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index'

ReactDOM.render(<Provider {...store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();