import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Parse from 'parse';

Parse.initialize('APPLICATION_ID');
Parse.serverURL = 'http://localhost:1337/parse';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
