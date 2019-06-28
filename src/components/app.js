import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Nav from"./nav";


class App extends Component{ 
    
    render(){
        return(
            <div>
                <Nav />
            </div>
        );
    }
    
}

export default App;
