
import React, {Component} from "react";

class Datos extends Component{

  constructor(props){
    super(props);
    this.state={
      'datos': []
    }
    this.traerInfo = this.traerInfo.bind(this);
  }


  /*sort_by_key(array, key)
  {
    return array.sort(function(a, b)
    {
      let x = a[key];
      let y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }*/

  traerInfo(){

    fetch("https://www.datos.gov.co/resource/gc9e-9mzf.json")
      .then(response => response.json())
      .then(response => {
        console.log("Datos", response[0]);
        //this.setState({datos: response})
    })
  }
  ordenarlos() {
    let ordenados=[];
  }


  render () {
    return(
      <div> Hola aca irian los datos
        <button type="submit" value="Search" onClick={this.traerInfo} />
      </div>

      );
  }
}

export default Datos;