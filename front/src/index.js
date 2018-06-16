import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Teste from './components/Teste';

ReactDOM.render(
    <BrowserRouter>{/*onde é definido as rotas*/}
        <Switch>{/*Permite definir mais de uma rota*/}
            <Route path="/" exact={true} component={App} />{/* exact não deixa outra rota ter conflito com o App */}
            <Route path="/teste" component={Teste} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
