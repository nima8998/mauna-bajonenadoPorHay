import "./css/App.css";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from "./container/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />

				<Switch>
					<Route path="/item/:id/:paramTitle/:paramPrice/:paramStock/:paramImg/:paramDesc">
						<ItemDetailContainer />
					</Route>

					<Route path="/category/:paramCategory">
						<ItemListContainer />
					</Route>

					<Route path="/">
						<ItemListContainer />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
