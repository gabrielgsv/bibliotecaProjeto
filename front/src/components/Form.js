import React, { Component } from 'react';

export default class FormularioAluno extends Component {
  constructor(props){
      super(props);
      this.state = {
          nome: '',
          idade: '',
          email: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(evento){ 
        const target = evento.target;
        target.name === 'nome' ? this.setState({nome: target.value}):
        target.name === 'idade' ? this.setState({idade: target.value}):
        this.setState({email: target.value});
        console.log(this.state)
    }


    handleSubmit(){
    }
  
    render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Nome</label>
            <input name="nome" value={this.state.nome} onChange={this.handleChange} 
                    type="text" placeholder="Digite seu nome..."/>
            <label>Idade</label>
            <input name="idade" value={this.state.idade} onChange={this.handleChange} 
                    type="number"/>
            <label>Email</label>
            <input name="email" value={this.state.email} onChange={this.handleChange}
                     type="email" placeholder="Digite seu email..."/>
            <input type="submit" value="Cadastrar"/>
        </form>
      </div>
    )
  }
};
