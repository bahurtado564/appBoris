import React from 'react';


export default class Servicio extends React.Component{
    
    constructor(){
        super();
        this.cargar = this.cargar.bind(this);
    }
   cargar () {
    setTimeout(function(){console.log('Click happened')}, 3000);
  }
    render(){
        return(
            <div id="map" onLoad={this.cargar} style={{width: 300, height:400}}>
                
        Hola
            
    
    
   
                   
                </div>
        
        )
    }
}