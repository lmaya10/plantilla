import React, {Component} from"react";
import navio from "navio";

class Navio extends Component{

	constructor(props)
	{
		super(props);
		this.usarNavio();
	}

	usarNavio()
	{
		const nv = new navio (this.elDiv, 600);
		let datosActuales = this.props.datos;
		nv.data(datosActuales);
		nv.addAllAttribs();
		console.log("Datos que llegan a Navio", this.props.datos)
	}

	render() {
		return(
			<div ref = {elDiv => this.elDiv = elDiv}></div>
			)
	}


}

export default Navio;