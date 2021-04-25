import "./css/App.css";
import Feed from "./Components/Feed";
import Index from "./Components/Index.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/feed">
						<Feed />
					</Route>

					<Route exact path="/">
						<Index />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
