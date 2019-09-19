
import React, {Component} from "react";
import CompNavio from "./CompNavio.js";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

class Datos extends Component{

  constructor(props){
    super(props);
    this.state={
      "urlBuscar": "",
      "datos": [],
      tieneUrl: false,
      loading: false,
      consultas: []
    }
    this.traerInfo = this.traerInfo.bind(this);
    this.hacerPedido = this.hacerPedido.bind(this);
    this.consultaPasada = this.consultaPasada.bind(this);
  }

  componentDidMount(){
    fetch("/busquedas",{mode:'no-cors'})
    .then(response => response.json())
    .then(response => {console.log("Respose", response);
      this.setState({
      consultas:response
    })});
  }

  componentDidUpdate(){
    this.renderConsultas();
  }


  renderConsultas(){
    return this.state.consultas.map(t=>  
        <div>
          {t.text}
        </div>
    )
  }

  onChange( ){ 
      this.setState({urlBuscar:this.linkInput.value});
  }

  consultaPasada(contenido){
    this.linkInput.value = contenido;
  }
  
  hacerPedido(actual) { 
      let urlActual = this.state.urlBuscar + "?$limit=900&$offset="+actual;
      fetch(urlActual)
      .then(response => response.json())
      .then(response => {
        console.log("Datos", response);
        
        if(response.length == 0)
        {
          this.setState({tieneUrl: true, loading:false});
        }
        else
        {
          let datos = response;
          let viejos = this.state.datos;
          let nuevos = viejos.concat(datos);
          this.setState({datos:nuevos});
          console.log("Datos en datos", this.state.datos);
          actual = actual + 900;
          this.hacerPedido(actual);
        }
      });
    }

  traerInfo(){
    let actual = 0;
    this.guardarConsulta(this.linkInput.value);   
    this.setState({loading: true})
    this.hacerPedido(actual);
  }

  async guardarConsulta(contenido){
    let text = contenido;
    console.log("contenido", text);
    let resultado = await fetch("/crearConsulta", {
      method:"POST",
      body: JSON.stringify({text}), 
      headers: {
        Accept:"application/json",
        "Content-Type":"application/json"
      }
    });
  }

  refresh() {
    window.location.reload(true);
  }

  render () {
    return(
      <div> 
        <div> 
          <input type="text" ref ={linkInput => this.linkInput = linkInput} onInput = {this.onChange.bind(this)}></input>
          <button type="button" onClick={this.traerInfo}>Traer datos </button>
          <br/>
          <br/>
          <br/>
          {this.state.loading == true? <h3> Espere un momento, estamos cargando la informacion </h3>:<br></br>}
          {this.state.tieneUrl == true ? <CompNavio datos={this.state.datos}></CompNavio> : <br></br>}
        </div>  
        <div>
            <div className="d-flex w-500 justify-content-between">
              <h3> Consultas pasadas </h3>
            </div>
          <div>
            {this.renderConsultas()}
          </div>
        </div>
      </div>

      );
  }
}

export default Datos;