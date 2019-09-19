import React, {Component} from 'react';
import Datos from './Datos.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      amount:1
    }
  }
	
  renderizarDatos() {
    let tamano = [];
    for(let i in 3)
    {
      tamano.push(i);
    }  
    return (
      tamano.map(t => (<Datos/>))
    )
  }

  onChange(){
    this.setState({
      amount:this.linkInput.value
    })
  }


  render() {
  let tamano = [];
    for(let i = 0; i<this.state.amount;i++)
    {
      tamano.push(i);
    }	
    return (
      <div>
        <h1> Visualizacion Datos Datos.gov.co</h1>
        <label for = "numFuentes"> Indique cuantas fuentes quiere consultar:  </label>
      <input id="numFuentes" type="text" ref ={linkInput => this.linkInput = linkInput} onInput = {this.onChange.bind(this)}></input>
      <br/>
      <br/>
      <br/>
      
      {this.state.amount >=1 && 
        <div className="container">
          <div className = "row">
          </div>
          <table className ="table">
            <thead>
              <tr>  
                {tamano.map(t=>(<th>Ingrese el link de la información que desea consultar</th>))}
              </tr>
            </thead>
            <tbody>
            <tr>  
                {tamano.map(t=>(<td><Datos/></td>))}
              </tr>
            </tbody>
          </table>
        </div>}
      </div>
    )
  }
}

export default App;
