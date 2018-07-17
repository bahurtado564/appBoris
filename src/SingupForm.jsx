import React from 'react';
import { Redirect } from 'react-router-dom';
import {Route} from 'react-router-dom';
import Validator from 'validator';
export default class SingupForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            emailUser:'',
            passUser:''
        }
        localStorage.clear();
        this.change= this.change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.go = this.go.bind(this);
    }
    change(e){
        this.setState({[e.target.name]: e.target.value})
    }
    go(){
        window.location='servicio.html';
    }
    onSubmit(e){
        e.preventDefault();
        if(!Validator.isEmail(this.state.emailUser)){
        window.alert("Este email es inválido")
        return
            }
        if(this.state.passUser ==''){
            window.alert("La contraseña no puede ser vacia")
            return
        }
        
        
        localStorage.setItem("email", this.state.emailUser);
        window.location="appBoris/mapa.html";
        
    }
    isValid(){
        
    }
    render(){
        return (
        <div>
            <form onSubmit={this.onSubmit}>
            <h1 align="center">¡Inicie sesión!</h1>
                
        <div className="form-group">
            <label className="control-label">Email</label>
            <input 
                maxlength="100"
                value ={this.state.emailUser}
                type="email"
                name="emailUser" className="form-control"
                onChange={this.change}
                ></input>
               
                <label className="control-label">Contraseña</label>
            <input 
                type="password"
                maxlength="100"
                value ={this.state.passUser}
                name="passUser"
                onChange={this.change}
                className="form-control"></input>
                </div>
                <div className="row">
                 <div className="col-md-4 ">
               
            </div>    
                <div className="form-group col-md-4">
                <button className="btn btn-primary btn-lg" >
                    Ingresar
                    </button>
                
                </div>
             
                 <div className="col-md-4 ">
                </div>
                    </div>
                </form>
            </div>
        
        )
    }
}
