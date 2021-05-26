import React, {Component} from "react";
import "./App.css";
import { CartRoutes } from "./router/CartRoutes";

export default class App extends Component {
    render() {
        return(
            <div className="App">
                <h4>Shopping Cart App Using ReactJS Router</h4>
                <CartRoutes />
            </div>
        )
    }
}