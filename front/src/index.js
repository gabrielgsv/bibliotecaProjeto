import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App/>
    , document.getElementById('root'));
registerServiceWorker();
