
import React, {Component} from "react";
import CompNavio from "./CompNavio.js";

class Datos extends Component{

  constructor(props){
    super(props);
    this.state={
      "urlBuscar": "",
      "datos": [],
      tieneUrl: false,
      loading: false
    }
    this.traerInfo = this.traerInfo.bind(this);
  }
  onChange( ){
    return this.setState({urlBuscar:this.linkInput.value});
  }
  
  hacerFetch(actual, loading) { 
      let urlActual = this.state.urlBuscar + "?$limit=900&$offset="+actual;
      console.log(urlActual);
      fetch(urlActual)
      .then(response => response.json())
      .then(response => {
        console.log("Datos", response);
        
        if(response.length == 0)
        {
          loading = true;
        }
        else
        {
          let datos = response;
          let viejos = this.state.datos;
          let nuevos = viejos.concat(datos);
          this.setState({datos:nuevos});
          console.log("Datos en datos", this.state.datos);
          actual = actual + 900;
          console.log("Actual" + actual/900); 
        }
      });
    }

  traerInfo(){
    let actual = 0;
    let loading = false;

    let urlActual = this.state.urlBuscar + "?$limit=900&$offset="+actual;
      console.log(urlActual);

      setTimeout(()=>fetch(urlActual)
      .then(response => response.json())
      .then(response => {
        console.log("Datos", response);
        
        if(response.length == 0)
        {
          loading = true;
        }
        else
        {
          let datos = response;
          let viejos = this.state.datos;
          let nuevos = viejos.concat(datos);
          this.setState({datos:nuevos}, () => {this.setState({tieneUrl:true})});
          console.log("Datos en datos", this.state.datos);
          actual = actual + 900;
          console.log("Actual" + actual/900); 
        }
      }),1000);
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