require("../css/main.less");
("use strict");
import React from "react";
import { render } from "react-dom";
class App extends React.Component {
	render() {
		return (
			<div>
				<div className="myDiv"> Hello Electron! </div>
			</div>
		);
	}
}
render(<App />, document.getElementById("app"));
 
