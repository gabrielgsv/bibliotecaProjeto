import React, { Component } from 'react';

class FormAluno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      curso: '',
      msg: '',
    }
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  onClick() {
    this.newAluno()
      .then(res => this.setState({msg: res.msg}))
      .catch(err => console.log(err));
  }

  newAluno = async() => {
      const response = await fetch('/api/aluno/cadastrar');
      const body = await response.json();
      return body;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Nome</label>
          <input type='text' name='nome' onChange={this.handleChange} />

          <label>Email</label>
          <input type='text' name='email' onChange={this.handleChange} />
          
          <label>Senha</label>
          <input type='password' name='senha' onChange={this.handleChange} />

          <label>Curso</label>
          <select onChange={this.handleChange}>
            <option value="administracao">Administração</option>
            <option value="medicina">Medicina</option>
            <option value="odontologia">Odontologia</option>
            <option value="direito">Direito</option>
          </select>
          <input type="submit" value="Enviar"/>
        </form>
        <button onClick={this.onClick.bind(this)}>ENVIAAR</button>
        <h1>{this.state.msg}</h1>
      </div>
    )
  }
}

export default FormAluno;



/*import React, { Component } from 'react';

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
*/