
import React, {Component} from "react";
import navio from "navio";

class Datos extends Component{

  constructor(props){
    super(props);
    this.state={
      "urlBuscar": "",
      "datos": []
    }
    this.traerInfo = this.traerInfo.bind(this);
  }

  renderDatos() {
    return this.state.datos.map(t => (
      <div>
        <p>{t.region }</p>
      </div>
    ));
  }

  onChange( ){
    return this.setState({urlBuscar:this.linkInput.value});
  }
  
  traerInfo(){
    return(
    fetch(this.state.urlBuscar)
      .then(response => response.json())
      .then(response => {
        console.log("Datos", response);
        let datos = response;
        this.setState({datos:response});

    }))
  }

  render () {
    return(
      <div> Ingrese el link de la información que desea consultar
        <div> 
          <input type="text" ref ={linkInput => this.linkInput = linkInput} onInput = {this.onChange.bind(this)}></input>
          <button type="button" onClick={this.traerInfo}>Traer datos </button>
          <div>
          {
            this.renderDatos()
          }
          </div>
        </div>  
      </div>

      );
  }
}

export default Datos;