# Visualización de datos del Gobierno 

## Objetivo del projecto 
El objetivo de este proyecto fue crear una pagina web que permitiera a un usuario ingresar una url que proporcionara datos en formato JSON y graficarlos utlilizando Navio. 

## Tecnologias usadas
Para este proyecto se utilizo, html, css, node.js y react. 

## Autor
[Laura Maya Diaz](https://lmaya10.github.io/PaginaPersonal/)

## Screenshot
![](https://raw.githubusercontent.com/lmaya10/visualizacionDatosGobierno/master/Screenshoot.PNG)

## Hasta donde llegué 
Jhon, mi entrega incluye las siguientes cosas
* Muestra los graficos de navio segun la URL que ingrese el usuario   
* Si cambia la URL el grafico se actualiza segun los nuevos datos    
* Cuando se cargan los datos se traen todos los datos del JSON y no solo los primeros 1000   
* Esta desplegado en [Visualizacion de datos](https://visualizaciondatos.herokuapp.com)
* Utiliza base de datos de Mongo
* Guarda TODAS las consultas que se realicen
* Muestra abajo todas las consultas realizadas como botones
* Si hace una nueva consulta debe refrescar la página en el boton refresh para que se actualicen las consultas.
* Si se hace click en un boton se vuelve a realizar dicha consulta
* Mi componente creativo es que el usuario puede indicar cuantas consultas hará, de esta forma puede realizar comparaciones entre dos bases de datos o puede realizar la consulta de varias bases de datos al mismo tiempo. En la parte superior indica el numero de consultas y se muestran dicho numero de interfaces.
* CREO QUE NO ME FALTA MENCIONAR NADA MAS

## Pre-requisitos 
```
Node.js
Npm
React
Web Browser
Git
```

## Instrucciones para el funcionamiento local

``` 
git clone https://github.com/lmaya10/visualizacionDatosGobierno
cd visualizacionDatosGobierno
npm install
npm start
open localhost:3001
Introduce una url 
Oprime Traer Datos
Visualiza los datos
```

## Licencia MIT
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
