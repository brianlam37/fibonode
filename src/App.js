import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import fiboForm from "./components/fibo-form.component";

function App() {
  	return (
		<Router>
			<div className="container">
				<br/>
				<Route path ="/" exact component = {fiboForm} />
			</div>
		</Router>
  	);
}

export default App;
