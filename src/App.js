import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Chart from "./components/Chart";
import Dashboard from "./components/Dashboard";
import Deposits from "./components/CurrentViews";

function App() {
	return (
		<div className="App">
			<Dashboard />
		</div>
	);
}

export default App;
