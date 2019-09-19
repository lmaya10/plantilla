
import React, {Component} from "react";
import CompNavio from "./CompNavio.js";

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
  }x

  renderConsultas(){
    return this.state.consultas.map(t=>  
        <div>
          <button type="button" ref ={linkBoton => this.linkBoton = linkBoton} onClick={() => this.traerVieja(t.text)} value={t.text}>{t.text} </button>
        </div>
    )
  }

  onChange( ){ 
      this.setState({urlBuscar:this.linkInput.value});
  }

  traerVieja(info){
    console.log("Valor boton " , info);
    this.setState({tieneUrl: false, urlBuscar: info, datos:[]}, () => this.traerInfo());
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
    console.log("Aca url buscar vale: " , this.state.urlBuscar);
    this.guardarConsulta(this.state.urlBuscar);   
    this.setState({loading: true})
    this.hacerPedido(actual);
  }

  async guardarConsulta(contenido){
    if(contenido){
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