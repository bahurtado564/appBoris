import React from 'react';

export default class Boris2 extends React.Component{
    
    constructor(){
        super();
        localStorage.clear();
    }
    render(){
        
        return(
        <h2 align="center">Por favor haga click en el botón de iniciar sesión</h2>
        )
    }
}