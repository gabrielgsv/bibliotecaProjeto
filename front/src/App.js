import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mensagem: ''
    };
  }

  componentDidMount() {
    this.helloWord()
      .then(res => this.setState({ mensagem: res.msg})) // Se tudo estiver ok , altera o estado
      .catch(err => console.log(err)); // Se não, mostra erro :)
  }

  helloWord = async() => {
    const response = await fetch('/api/helloword') // chamo a rota
    const body = await response.json(); // recupero o body
    if(response.status !== 200) throw Error(body.message); // verifico o status da api

    return body; // retorno para montar o componente
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.mensagem}</p>
      </div>
    );
  }
}

export default App;