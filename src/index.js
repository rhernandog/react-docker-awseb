import React from "react";
import { render } from "react-dom";
import "./styles/main.scss";
import auroraImg from "./assets/images/aurora-borealis.jpg";

const App = () => {
	return <div className="wrapper">
		<div className="content">
			<h1 className="text-center">React Base App</h1>
			<p className="lead">Here is some text in the app</p>
			<p className="lead">Here is another text in the app.</p>
			<hr />
			<img className="image" src={auroraImg} alt="Aurora Borealis" height="400" />
		</div>
	</div>;
};

render(
	<App />, document.getElementById("root")
);
