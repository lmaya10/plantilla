
import React, {Component} from "react";
import CompNavio from "./CompNavio.js";

class Datos extends Component{

  constructor(props){
    super(props);
    this.state={
      "urlBuscar": "",
      "datos": [],
      tieneUrl: false
    }
    this.traerInfo = this.traerInfo.bind(this);
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
        //let datos = response;
        this.setState({datos:response}, () => {this.setState({tieneUrl:true});
          console.log("Datos en datos", this.state.datos)});
        
        
    }))
  }



  render () {
    return(
      <div> Ingrese el link de la información que desea consultar
        <div> 
          <input type="text" ref ={linkInput => this.linkInput = linkInput} onInput = {this.onChange.bind(this)}></input>
          <button type="button" onClick={this.traerInfo}>Traer datos </button>
          {this.state.tieneUrl == true ? <CompNavio datos={this.state.datos}></CompNavio> : <br></br>}
          
        </div>  
      </div>

      );
  }
}

export default Datos;