import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Nav from"./nav";
import ProductRoutes from './products';
import Home from "./home";


class App extends Component{ 
    
    render(){
        return(
            <div>
                <Nav />
                <Route path="/" exact component={Home} />
                <Route path="/products" component={ProductRoutes} />
            </div>
        );
    }
    
}

export default App;
