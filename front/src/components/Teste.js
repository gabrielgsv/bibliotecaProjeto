import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Teste.css'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='Teste'>
                <p>Pagina Teste</p>
                <button>
                    <Link to="/">Ir para App sem refresh</Link>
                </button>
            </div>
        )
    }
}

export default Test;