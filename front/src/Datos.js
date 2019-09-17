
import React, {Component} from "react";

class Datos extends Component{

  constructor(props){
    super(props);
    this.state={
      'datos': []
    }
    this.traerInfo = this.traerInfo.bind(this);
  }

  renderDatos() {
    return this.state.datos.map(t => (
      <div>
        <p>{t.id + " " + t.visitas + " " +t.url.url }</p>
      </div>
    ));
  }
  
  traerInfo(){

    fetch("https://www.datos.gov.co/resource/gc9e-9mzf.json")
      .then(response => response.json())
      .then(response => {
        console.log("Datos", response);
        //this.setState({datos: response})
        let datos = response;
        let filtrados = [];
        for(let cadauno in datos)
        {

          if(datos[cadauno].visitas <  3)
          {
            filtrados.push(datos[cadauno]);
          }
        }

        console.log("filtrados",filtrados);
        // ordenar de menor a mayor

        //let ordenados=filtrados.sort((a,b) => (a.visitas > b.visitas) ? 1 : ((b.visitas> a.visitas) ? -1 : 0));

        //ordenar de mayor a menor
        let ordenados=filtrados.sort((a,b) => (a.visitas < b.visitas) ? 1 : ((b.visitas< a.visitas) ? -1 : 0));

        this.setState({datos:filtrados});

    })
  }

//this.setState({operacion}, callback) si necesito llamar this.state inmediatamente.


  render () {
    return(
      <div> Hola aca irian los datos
        <div> 
          <input typ="text"></input>
          <button type="button" onClick={this.traerInfo}>Traer datos </button>
          <div>
          {
            this.renderDatos()
            //this.state.datos.map(t => <p> {t.visitas} </p>)
          }
          </div>
        </div>  
      </div>

      );
  }
}

export default Datos;