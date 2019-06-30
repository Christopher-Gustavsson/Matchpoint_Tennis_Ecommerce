import React, {Component} from "react";
import {Link} from "react-router-dom";

class ProductList extends Component{
    render(){
        return(
            <div className="product-list">
                <h1 className="center">MatchPoint Product List</h1>

                <ul>
                    <li>
                        <Link to="/products/1">Product 1</Link>
                    </li>
                    <li>
                        <Link to="/products/2">Product 2</Link>
                    </li>
                    <li>
                        <Link to="/products/3">Product 3</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ProductList;