import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";
import User from "./pages/User"
require('../style/style.scss');

const app = document.getElementById('app');
ReactDOM.render(<User username="bert"/>, app);