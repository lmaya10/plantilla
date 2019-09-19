import React, {Component} from "react";

class Consulta extends Component {


	
  constructor(props){
    super(props);
    this.state={
      consultas: []
    }

      componentDidMount(){
    fetch("/busquedas",{mode:'no-cors'})
    .then(response => response.json())
    .then(response => {console.log("Respose", response);
      this.setState({
      consultas:response
    })});
  }


	render(){
		return (
			<div>
				{this.props.text}
			</div>

			)
	}

}

export default Consulta;
