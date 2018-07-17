import React, {Component} from 'react';
import Navigation from './Navigation.jsx';
import {BrowserRouter as Router, IndexRoute} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import SingupPage from './SingupPage.jsx';
import Boris2 from './Boris2.jsx';
import {Link} from 'react-router-dom';
import Servicio from './Servicio.jsx';
class App extends Component{
    
    render(){
        return(
            <div className="container">
                <Navigation/>
        <Router>
            <div >
            <Route path="/" exact strict component={Boris2}>
                
                </Route>
                <Route path="/appBoris/servicio" exact strict component={Servicio}>
                
                </Route>
                <Route path="/appBoris/inscripcion" exact strict component={SingupPage}></Route>
                
            </div>
        </Router>    
                
                </div>
                )
    }
}
export default App;