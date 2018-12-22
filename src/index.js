import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
