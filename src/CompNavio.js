import React, {Component} from"react";
import navio from "navio";

class Navio extends Component{

	constructor(props)
	{
		super(props);
			
	}

	componentDidMount(){
		this.usarNavio();
	}

	componentDidUpdate(){
		this.usarNavio();
	}

	usarNavio()
	{
		console.log("Datos que llegan a Navio", this.props.datos)
		const nv = new navio (this.elDiv, 600);
		let datosActuales = this.props.datos;
		nv.data(datosActuales);
		nv.addAllAttribs();
	}



	render() {
		return(
			<div ref = {elDiv => this.elDiv = elDiv}></div>
			)
	}


}

export default Navio;