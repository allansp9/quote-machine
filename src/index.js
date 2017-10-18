import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuoteMachineContainer from './QuoteMachineContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<QuoteMachineContainer />, document.getElementById('root'));
registerServiceWorker();
