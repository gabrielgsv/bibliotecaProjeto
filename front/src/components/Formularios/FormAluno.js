import React, { Component } from 'react';
import axios from 'axios';

class FormAluno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      curso: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state);
  }

  handleSubmit() {
    const aluno = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha,
      curso: this.state.curso
    }

    axios.post('/api/aluno/cadastrar', {aluno})
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  /*onClick() {
    this.newAluno()
      .then(res => this.setState({msg: res.msg}))
      .catch(err => console.log(err));
  }

  newAluno = async() => {
      const response = await fetch('/api/aluno/cadastrar');
      const body = await response.json();
      return body;
  }*/

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Nome
          <input type='text' name='nome' onChange={this.handleChange} />
          </label>
          <br />
          <br />

          <label>Email
          <input type='text' name='email' onChange={this.handleChange} />
          </label>
          <br />
          <br />

          <label>Senha
          <input type='password' name='senha' onChange={this.handleChange} />
          </label>
          <br />
          <br />

          <label>Curso
          <select onChange={this.handleChange}>
            <option value="administracao">Administração</option>
            <option value="medicina">Medicina</option>
            <option value="odontologia">Odontologia</option>
            <option value="direito">Direito</option>
          </select>
          </label>
          <br />
          <br />

          <input type="submit" value="Enviar"/>
        </form>

        {/*<button onClick={this.onClick.bind(this)}>ENVIAAR</button>
        <h1>{this.state.msg}</h1>*/}
      </div>
    )
  }
}

export default FormAluno;